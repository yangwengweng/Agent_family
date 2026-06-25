## community score
function calculate Popularity({
  githubStars,
  githubGrowth,
  googleTrend,
  twitterMentions,
  redditMentions
}) {
  return Math.round(
      githubStars * 0.30 +
      githubGrowth * 0.25 +
      googleTrend * 0.20 +
      twitterMentions * 0.15 +
      redditMentions * 0.10
  );
}


## 例如
const popularity = calculatePopularity({

    githubStars:92,

    githubGrowth:95,

    googleTrend:87,

    twitterMentions:91,

    redditMentions:84

});
Popularity = 91

## 方案
结论会分成“字段本身能不能拿到”和“当前数据结构是否支持自动拿到”。一个关键点是：公式里的 5 个输入看起来都应先归一化到 0-100，而不是直接用 GitHub star 原始数量。
可以拿，但**不是这 5 个都同等稳定**；而且当前 `agents.js` 的数据结构还不够，需要补充每个 Agent 的数据源标识。

`score.md` 里的公式输入是：

```3:7:score.md
  githubStars,
  githubGrowth,
  googleTrend,
  twitterMentions,
  redditMentions
```

我的评估：

| 字段 | 可获取性 | 说明 |
|---|---:|---|
| `githubStars` | 高 | 只要有 GitHub repo，可以用 GitHub API 拿 `stargazers_count`。但当前很多 Agent 的 `website` 不是 GitHub 链接，例如 Claude Code、Cursor、Kimi、ChatGPT 等。需要额外维护 `githubRepo`。 |
| `githubGrowth` | 中高 | 可以按周定时抓取 stars 并保存快照，然后计算本周增长。GitHub API 不直接给“周增长”，需要自己存历史。 |
| `googleTrend` | 中 | Google Trends 没有稳定官方公开 API。可以用非官方方案或第三方服务，但稳定性、限流、部署复杂度都更高。 |
| `twitterMentions` | 中低 | X/Twitter 现在 API 成本和权限门槛较高。理论可拿，实际需要付费 API、Bearer Token、查询规则和限流处理。 |
| `redditMentions` | 中 | Reddit API 可以搜索关键词并统计一周 mentions，但需要 OAuth，且搜索质量、限流、关键词歧义需要处理。 |

更重要的是：`score.md` 里的示例值都是 0-100 分：

```20:30:score.md
const popularity = calculatePopularity({

    githubStars:92,

    githubGrowth:95,

    googleTrend:87,

    twitterMentions:91,

    redditMentions:84
```

所以实际实现时不应该直接把 `134278 Stars` 代入公式。应该先把每个原始指标转成 `0-100` 分，比如：

- `githubStarsScore`
- `githubGrowthScore`
- `googleTrendScore`
- `twitterMentionsScore`
- `redditMentionsScore`

然后再加权计算 `community.value`。

当前 `agents.js` 里 `community` 还是手写静态值：

```25:30:agents.js
      metrics: {
        community: { value: 134278, unit: "Stars", trend: "+3400" },
        fork: { value: 5200, trend: "+410" },
        searchIndex: { value: 98, trend: "+8" },
        enterprise: { value: 82, trend: "+6" }
      },
```

建议方案：第一版先做**可稳定自动更新的版本**：

1. 给每个 Agent 增加 `sources.githubRepo`、`sources.searchKeywords`。
2. 每周跑一次脚本。
3. GitHub stars / forks / growth 用 GitHub API 自动算。
4. Google Trends、Twitter、Reddit 先作为可选增强项；拿不到时不参与或用上次值。
5. 最终把 `community.value` 改成综合分，而不是 Stars 数量。

结论：  
`githubStars` 和 `githubGrowth` 最适合先落地；`redditMentions` 可以做；`googleTrend` 和 `twitterMentions` 能做但不够稳定，尤其 Twitter 成本最高。当前项目要实现实时/每周自动更新，需要先补数据源字段。