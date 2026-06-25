# Agent Desktop

**AI Agent Encyclopedia** — 一个帮助开发者快速了解主流 AI Agent 的纯前端网页。

把 AI Agent 生态整理成类似 macOS 桌面的浏览体验：每个 Agent 像桌面 App 一样排列，点击即可查看详情，无需注册、无需后端。

---

## 这是什么？

Agent Desktop 是一个轻量级的 **AI Agent 目录与对比站点**，持续追踪 Coding Agent、AI IDE、Research、General Agent 与 Framework 等方向的代表产品。

你可以用它来：

- 快速浏览当前热门的 AI Agent 有哪些
- 按社区热度、搜索关注度等维度排序
- 搜索 Agent 名称、公司或技能标签
- 查看每个产品的简介、能力标签与核心指标

---

## 主要功能

| 功能 | 说明 |
| --- | --- |
| 桌面式布局 | 参考 macOS / Raycast / Linear 风格，极简、留白充足 |
| 搜索 | 支持按 Agent 名称、公司、技能关键词检索 |
| 排序 | 支持按 Community、Search Index、Enterprise 等维度排序 |
| 详情 Popover | 点击图标展开浮层，展示 Logo、公司、介绍、Skills、Metrics |
| 指标展示 | Community、Fork、Search Index、Enterprise，含 7 天趋势 |
| 分类覆盖 | Coding Agent、AI IDE、General Agent、Research、Framework |

---

## 技术栈

- **HTML + CSS + Vanilla JavaScript**
- 无 React / Vue / 构建工具
- 数据来自本地 `agents.js`，可直接用浏览器打开 `index.html` 预览

---

## 快速开始

克隆仓库后，在项目根目录启动一个本地静态服务即可：

```bash
# 方式一：Python
python3 -m http.server 8080

# 方式二：npx
npx serve .
```

浏览器访问 `http://localhost:8080` 即可。

> 也可以直接用浏览器打开 `index.html`，但建议使用本地服务以避免部分浏览器的跨域限制。

---

## 项目结构

```
Agent_family/
├── index.html    # 页面入口（UI + 交互逻辑）
├── agents.js     # Agent 数据（名称、分类、指标、介绍等）
├── data.md       # Agent 清单与分类说明（参考文档）
├── prd.md        # 产品需求文档
├── score.md      # Community Score 计算公式（规划中）
└── README.md     # 项目说明
```

---

## 数据说明

所有 Agent 信息维护在 `agents.js` 中，每条记录包含：

- 基本信息：名称、公司、官网、分类、发布时间
- 产品描述与 Slogan
- Skills 标签与优势方向
- Metrics：Community、Fork、Search Index、Enterprise

页面顶部会显示 **Last Updated**，表示数据最近更新时间。

Community Score 的加权计算方案见 `score.md`，后续计划改为按周自动更新。

---

## Agent 分类

| 类型 | 说明 | 代表产品 |
| --- | --- | --- |
| Coding Agent | 面向开发者的 Coding Agent / CLI | Claude Code、Codex CLI、Gemini CLI、Aider |
| AI IDE | AI 原生开发环境 | Cursor、Windsurf、GitHub Copilot |
| General Agent | 通用任务执行 | ChatGPT Agent、Manus、Operator |
| Research | 搜索、调研、知识分析 | Perplexity、NotebookLM、Gemini Deep Research |
| Framework | 构建 Agent 的开发框架 | LangGraph、CrewAI、AutoGen |

完整清单见 [data.md](./data.md)。

---

## 设计原则

- 像桌面，不像 Dashboard
- 不用表格、不用复杂图表
- 信息密度适中，一眼能扫完
- 移动端与桌面端均可浏览

---

## License

MIT（如无特殊说明，可按需调整）
