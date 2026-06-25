const app = {

  lastUpdated: "2026-06-25",

  version: "0.2",

  agentCount: 40,

  agents: [

    /* ── Coding Agent ── */

    {
      id: "claude-code",
      name: "Claude Code",
      company: "Anthropic",
      logo: "logos/claude-code.png",
      website: "https://claude.ai/code",
      category: "Coding Agent",
      release: "2025-02",
      slogan: "The Architect",
      description: "Claude Code 是 Anthropic 推出的 Coding Agent，擅长大型工程理解、代码重构、复杂代码维护与终端开发，更偏好先理解再修改，注重长期维护而非快速堆砌。",
      skills: ["Coding", "Reasoning", "Terminal", "Refactor", "Git", "MCP", "Long Context"],
      strengths: ["大型项目", "代码理解", "重构", "终端"],
      metrics: {
        community: { value: 134278, unit: "Stars", trend: "+3400" },
        fork: { value: 5200, trend: "+410" },
        searchIndex: { value: 98, trend: "+8" },
        enterprise: { value: 82, trend: "+6" }
      },
      updated: "2026-06-25"
    },

    {
      id: "codex-cli",
      name: "Codex CLI",
      company: "OpenAI",
      logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/codex-color.png",
      website: "https://openai.com/codex",
      category: "Coding Agent",
      release: "2025-04",
      slogan: "The Terminal Coder",
      description: "OpenAI Codex CLI 是面向终端的 Coding Agent，可在命令行中完成代码编写、调试与自动化任务，擅长快速理解需求并直接动手实现，注重与现有工具链的无缝协作。",
      skills: ["Coding", "Terminal", "Automation", "Git", "Agent", "MCP"],
      strengths: ["终端开发", "快速迭代", "OpenAI 生态"],
      metrics: {
        community: { value: 93528, unit: "Stars", trend: "+2100" },
        fork: { value: 3800, trend: "+290" },
        searchIndex: { value: 94, trend: "+6" },
        enterprise: { value: 88, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "cursor",
      name: "Cursor Agent",
      company: "Cursor",
      logo: "logos/cursor.png",
      website: "https://cursor.com",
      category: "Coding Agent",
      release: "2024-03",
      slogan: "The Pair Programmer",
      description: "Cursor Agent 是目前最受欢迎的 AI IDE，在编辑器内提供结对编程、重构与多文件编辑能力，熟悉项目上下文，陪伴开发者协作写代码而非替代开发者。",
      skills: ["Coding", "IDE", "Autocomplete", "Chat", "Refactor", "Agent", "MCP"],
      strengths: ["IDE 集成", "结对编程", "多文件编辑"],
      metrics: {
        community: { value: 38500, trend: "+2800" },
        fork: { value: 3200, trend: "+180" },
        searchIndex: { value: 96, trend: "+7" },
        enterprise: { value: 91, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    {
      id: "gemini-cli",
      name: "Gemini CLI",
      company: "Google",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOufkKwyb4LgS0EqCAgDNUvT3QK84dhTHwQV73wWS0vg&s=10",
      website: "https://github.com/google-gemini/gemini-cli",
      category: "Coding Agent",
      release: "2025-06",
      slogan: "The Google Terminal",
      description: "Gemini CLI 是 Google 推出的开源终端 Coding Agent，支持 MCP 协议与 Gemini 模型深度集成，可在终端中完成写代码、查文档、跑命令等开发任务。",
      skills: ["Coding", "Terminal", "MCP", "Research", "Automation", "Agent"],
      strengths: ["Google 生态", "MCP 集成", "开源"],
      metrics: {
        community: { value: 105537, trend: "+5200" },
        fork: { value: 4100, trend: "+680" },
        searchIndex: { value: 92, trend: "+9" },
        enterprise: { value: 85, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "qwen-code",
      name: "Qwen Code",
      company: "Alibaba",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaIp0Z6SLfCabs-0PuPLVtASeOpm5wsVYQeUJ0u2J-JNEHovSXgEPECQ&s=10",
      website: "https://github.com/QwenLM/qwen-code",
      category: "Coding Agent",
      release: "2025-05",
      slogan: "The Alibaba Coder",
      description: "Qwen Code 是阿里通义团队推出的终端 Coding Agent，基于 Qwen 大模型，熟悉中英文开发语境，可在终端中读代码、写补丁、跑测试。",
      skills: ["Coding", "Terminal", "Reasoning", "Git", "Long Context", "Agent"],
      strengths: ["中文语境", "开源", "Qwen 模型"],
      metrics: {
        community: { value: 25503, trend: "+1800" },
        fork: { value: 980, trend: "+210" },
        searchIndex: { value: 78, trend: "+12" },
        enterprise: { value: 72, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    {
      id: "kimi-cli",
      name: "Kimi CLI",
      company: "Moonshot AI",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Kimi-logo-2025.png",
      website: "https://kimi.moonshot.cn",
      category: "Coding Agent",
      release: "2025-07",
      slogan: "The Long Context Coder",
      description: "Kimi CLI 是月之暗面推出的终端 Coding Agent，依托 Kimi 超长上下文能力处理大型代码库，擅长在终端中理解、修改和维护整仓项目。",
      skills: ["Coding", "Terminal", "Long Context", "Reasoning", "Refactor", "Agent"],
      strengths: ["超长上下文", "中文支持", "代码理解"],
      metrics: {
        community: { value: 8600, trend: "+1200" },
        fork: { value: 620, trend: "+95" },
        searchIndex: { value: 81, trend: "+10" },
        enterprise: { value: 68, trend: "+4" }
      },
      updated: "2026-06-25"
    },


    {
      id: "opencode",
      name: "OpenCode",
      company: "SST",
      logo: "logos/opencode.png",
      website: "https://opencode.ai",
      category: "Coding Agent",
      release: "2025-01",
      slogan: "The Open Terminal IDE",
      description: "OpenCode 就是专门为开发者和编程场景量身定制的“自主智能体”。它主要运行在终端（Terminal）中，也可以作为桌面应用或 IDE 插件使用，能够直接理解、编写、修改和测试本地计算机上的代码。OpenCode 被社区称为“智能体界的 Linux”，其最大的特点在于完全开放与自主掌控",
      skills: ["Coding", "Terminal", "Agent", "MCP", "Automation", "Git"],
      strengths: ["开源", "多模型", "TUI 体验"],
      metrics: {
        community: { value: 178340, trend: "+4500" },
        fork: { value: 2100, trend: "+380" },
        searchIndex: { value: 88, trend: "+8" },
        enterprise: { value: 65, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "aider",
      name: "Aider",
      company: "Aider",
      logo: "logos/aider.png",
      website: "https://aider.chat",
      category: "Coding Agent",
      release: "2023-05",
      slogan: "The Git-Native Coder",
      description: "Aider 是老牌终端结对编程工具，直接在 Git 仓库中编辑代码并自动提交，支持多种 LLM，以简单可靠的方式改代码、写 commit，深受开发者信任。",
      skills: ["Coding", "Terminal", "Git", "Refactor", "Automation"],
      strengths: ["Git 集成", "成熟稳定", "多模型支持"],
      metrics: {
        community: { value: 46671, trend: "+1600" },
        fork: { value: 2200, trend: "+190" },
        searchIndex: { value: 84, trend: "+3" },
        enterprise: { value: 58, trend: "+2" }
      },
      updated: "2026-06-25"
    },

    {
      id: "github-copilot",
      name: "GitHub Copilot",
      company: "GitHub",
      logo: "https://cdn.simpleicons.org/githubcopilot",
      website: "https://github.com/features/copilot",
      category: "Coding Agent",
      release: "2021-10",
      slogan: "The Enterprise Standard",
      description: "GitHub Copilot 是微软 GitHub 推出的 AI 编程助手，覆盖 IDE 补全、Chat 与 Agent 模式，在 VS Code、JetBrains 等 IDE 中服务数百万开发者，兼顾企业合规与日常编码。",
      skills: ["Coding", "IDE", "Autocomplete", "Chat", "Agent", "Git"],
      strengths: ["企业 adoption", "IDE 覆盖", "GitHub 生态"],
      metrics: {
        community: { value: 5200, trend: "+420" },
        fork: { value: 680, trend: "+55" },
        searchIndex: { value: 97, trend: "+2" },
        enterprise: { value: 95, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "qoder-cli",
      name: "Qoder CLI",
      company: "Qoder",
      logo: "logos/qoder-cli.png",
      website: "https://qoder.com",
      category: "Coding Agent",
      release: "2025-06",
      slogan: "The Fast Code Runner",
      description: "Qoder CLI 是面向终端的 Coding Agent，提供代码生成、重构与命令执行能力，专注高效编码流程，帮助开发者从需求快速推进到可运行代码。",
      skills: ["Coding", "Terminal", "Automation", "Git", "Agent"],
      strengths: ["终端效率", "快速迭代", "开发流畅性"],
      metrics: {
        community: { value: 6900, trend: "+980" },
        fork: { value: 520, trend: "+70" },
        searchIndex: { value: 69, trend: "+8" },
        enterprise: { value: 52, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    /* ── AI IDE ── */

    {
      id: "trae",
      name: "Trae",
      company: "ByteDance",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDunbiJ-vQ4RwxavtAoclZW3ccOm3n5WPlLK87DNdrLA&s=10",
      website: "https://trae.ai",
      category: "AI IDE",
      release: "2025-01",
      slogan: "The Creative AI IDE",
      description: "Trae 是面向开发者的 AI IDE，结合代码编辑、对话协作与任务执行，将 IDE 与 Agent 协作融合，支持从想法到可交付代码的快速闭环。",
      skills: ["IDE", "Coding", "Chat", "Agent", "Refactor"],
      strengths: ["AI IDE 体验", "任务闭环", "交互流畅"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 83, trend: "+10" },
        enterprise: { value: 66, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "windsurf",
      name: "Windsurf",
      company: "Codeium",
      logo: "logos/windsurf.png",
      website: "https://windsurf.com",
      category: "AI IDE",
      release: "2024-11",
      slogan: "The Flow-State IDE",
      description: "Windsurf 是 Codeium 推出的 AI IDE，强调 flow 模式下的连续编码体验，支持多文件理解与智能改写，帮助开发者保持心流、减少打断与重复劳动。",
      skills: ["IDE", "Coding", "Autocomplete", "Agent", "Refactor"],
      strengths: ["心流体验", "多文件编辑", "Codeium 生态"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 89, trend: "+7" },
        enterprise: { value: 78, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    {
      id: "replit",
      name: "Replit",
      company: "Replit",
      logo: "logos/replit.png",
      website: "https://replit.com",
      category: "AI IDE",
      release: "2016-03",
      slogan: "The Cloud AI Workspace",
      description: "Replit 是云端开发平台，结合在线 IDE 与 AI Agent，支持在浏览器中写、跑、发应用，帮助开发者更快把想法做成产品。",
      skills: ["IDE", "Coding", "Cloud", "Agent", "Collaboration"],
      strengths: ["云端开发", "快速部署", "协作友好"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 87, trend: "+4" },
        enterprise: { value: 72, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "kiro",
      name: "Kiro",
      company: "Kiro",
      logo: "logos/kiro.png",
      website: "https://kiro.dev",
      category: "AI IDE",
      release: "2025-04",
      slogan: "The Task-Driven IDE",
      description: "Kiro 是以任务驱动为核心的 AI IDE，擅长将复杂需求拆解为可执行任务，再逐步推进到代码落地，让开发过程更清晰可控。",
      skills: ["IDE", "Coding", "Agent", "Planning", "Automation"],
      strengths: ["任务驱动", "结构化开发", "流程清晰"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 74, trend: "+12" },
        enterprise: { value: 63, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    /* ── General Agent ── */



    {
      id: "chatgpt-agent",
      name: "ChatGPT Agent",
      company: "OpenAI",
      logo: "logos/chatgpt-agent.png",
      website: "https://chatgpt.com",
      category: "General Agent",
      release: "2025-01",
      slogan: "The Work Copilot",
      description: "ChatGPT Agent 是 OpenAI 的通用任务智能体，可在写作、分析、编程和流程自动化中提供端到端协作，从信息整理到可交付结果，兼顾质量与效率。",
      skills: ["Agent", "Reasoning", "Research", "Automation", "Coding"],
      strengths: ["通用能力", "多场景协作", "生态整合"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 99, trend: "+6" },
        enterprise: { value: 92, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "manus",
      name: "Manus",
      company: "Monica",
      logo: "logos/manus.png",
      website: "https://manus.im",
      category: "General Agent",
      release: "2025-03",
      slogan: "The Autonomous Worker",
      description: "Manus 是 Monica 推出的通用自主 Agent，能独立完成研究、写作、数据分析等复杂任务，自主规划步骤、搜集信息并产出结果，追求端到端任务完成。",
      skills: ["Agent", "Research", "Automation", "Browser", "Reasoning"],
      strengths: ["自主规划", "任务闭环", "多场景"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 91, trend: "+14" },
        enterprise: { value: 70, trend: "+8" }
      },
      updated: "2026-06-25"
    },

    {
      id: "genspark",
      name: "Genspark",
      company: "Genspark",
      logo: "logos/genspark.png",
      website: "https://genspark.ai",
      category: "General Agent",
      release: "2024-06",
      slogan: "The Spark Engine",
      description: "Genspark 是 AI 搜索引擎与通用 Agent 平台，通过 Sparkpages 聚合信息并执行多步研究任务，不只返回链接，而是整理成 Sparkpage 帮助用户真正理解问题。",
      skills: ["Research", "Agent", "Browser", "Automation", "Reasoning"],
      strengths: ["AI 搜索", "Sparkpages", "信息聚合"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 82, trend: "+9" },
        enterprise: { value: 55, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "pi",
      name: "Pi",
      company: "Inflection AI",
      logo: "logos/pi.png",
      website: "https://pi.ai",
      category: "General Agent",
      release: "2023-05",
      slogan: "The Personal Companion",
      description: "Pi 是 Inflection AI 推出的个人 AI 助手，以对话式陪伴和情感化交互见长，后融入 Microsoft Copilot 生态，擅长倾听、给建议与处理日常问题。",
      skills: ["Agent", "Reasoning", "Research", "Chat"],
      strengths: ["情感交互", "个人助手", "对话体验"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 76, trend: "+1" },
        enterprise: { value: 62, trend: "+2" }
      },
      updated: "2026-06-25"
    },

    {
      id: "operator",
      name: "Operator",
      company: "OpenAI",
      logo: "logos/operator.png",
      website: "https://openai.com",
      category: "General Agent",
      release: "2025-01",
      slogan: "The Web Task Runner",
      description: "Operator 是 OpenAI 的网页任务执行 Agent，能够在浏览器中代用户完成浏览、点击、填写等多步操作与信息处理，将重复性网页劳动自动化。",
      skills: ["Agent", "Browser", "Automation", "Research", "Reasoning"],
      strengths: ["网页操作", "任务自动化", "多步执行"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 89, trend: "+11" },
        enterprise: { value: 84, trend: "+6" }
      },
      updated: "2026-06-25"
    },

    {
      id: "hermes",
      name: "Hermes",
      company: "Nous Research",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVFhwmXL4CWShXdHcoIS79FMMiov7Tw5R9fT3uQ61Tw&s=10",
      website: "https://nousresearch.com",
      category: "General Agent",
      release: "2024-08",
      slogan: "The Open Agent Model",
      description: "Hermes 是 Nous Research 推出的开源 Agent 模型系列，专为工具调用与多步推理优化，开发者可将其部署到任何 Agent 框架中。",
      skills: ["Agent", "Reasoning", "MCP", "Automation", "Coding"],
      strengths: ["开源模型", "工具调用", "可定制"],
      metrics: {
        community: { value: 4200, trend: "+380" },
        fork: { value: 520, trend: "+65" },
        searchIndex: { value: 71, trend: "+5" },
        enterprise: { value: 48, trend: "+2" }
      },
      updated: "2026-06-25"
    },

    /* ── Browser Agent ── */

    {
      id: "browser-use",
      name: "Browser Use",
      company: "Browser Use",
      logo: "https://pbs.twimg.com/profile_images/2056516030974091264/Qb5CJOLu.jpg",
      website: "https://browser-use.com",
      category: "Browser Agent",
      release: "2024-11",
      slogan: "The Browser Automator",
      description: "Browser Use 是开源浏览器自动化 Agent 框架，让 AI 控制 Chrome 完成网页交互与数据采集，帮助开发者构建能感知并操作网页的 Agent。",
      skills: ["Browser", "Agent", "Automation", "Coding", "MCP"],
      strengths: ["浏览器控制", "开源框架", "Playwright 集成"],
      metrics: {
        community: { value: 100582, trend: "+6800" },
        fork: { value: 4100, trend: "+920" },
        searchIndex: { value: 87, trend: "+13" },
        enterprise: { value: 60, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "stagehand",
      name: "Stagehand",
      company: "Browserbase",
      logo: "logos/stagehand.png",
      website: "https://stagehand.dev",
      category: "Browser Agent",
      release: "2024-10",
      slogan: "The Dev-Friendly Browser Agent",
      description: "Stagehand 是 Browserbase 推出的浏览器 Agent SDK，结合 AI 与 Playwright 实现可靠的网页自动化，支持用自然语言驱动浏览器，同时保留 Playwright 的精确控制。",
      skills: ["Browser", "Agent", "Automation", "Coding"],
      strengths: ["开发者 SDK", "Browserbase 云", "Playwright"],
      metrics: {
        community: { value: 23237, trend: "+2100" },
        fork: { value: 780, trend: "+240" },
        searchIndex: { value: 79, trend: "+8" },
        enterprise: { value: 66, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    /* ── Research Agent ── */

    {
      id: "perplexity-labs",
      name: "Perplexity Labs",
      company: "Perplexity",
      logo: "logos/perplexity-labs.png",
      website: "https://perplexity.ai",
      category: "Research Agent",
      release: "2025-05",
      slogan: "The Research Engine",
      description: "Perplexity Labs 是 Perplexity 的深度研究 Agent，可自主搜索、交叉验证并生成带引用的研究报告，每个结论都有出处。",
      skills: ["Research", "Agent", "Browser", "Reasoning", "Long Context"],
      strengths: ["引用溯源", "深度研究", "实时搜索"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 93, trend: "+7" },
        enterprise: { value: 80, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "gemini-deep-research",
      name: "Gemini Deep Research",
      company: "Google",
      logo: "logos/gemini-deep-research.png",
      website: "https://gemini.google.com",
      category: "Research Agent",
      release: "2024-12",
      slogan: "The Google Researcher",
      description: "Gemini Deep Research 是 Google Gemini 的深度研究模式，自主浏览网页并生成结构清晰、附完整引用的研究报告。",
      skills: ["Research", "Agent", "Browser", "Reasoning", "Long Context"],
      strengths: ["Google 搜索", "深度报告", "多源整合"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 90, trend: "+6" },
        enterprise: { value: 86, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "notebooklm",
      name: "NotebookLM",
      company: "Google",
      logo: "logos/notebooklm.png",
      website: "https://notebooklm.google.com",
      category: "Research Agent",
      release: "2023-07",
      slogan: "The Source-Grounded Researcher",
      description: "NotebookLM 是 Google 的 AI 笔记本，基于用户上传的文档进行问答、摘要与深度研究，只依据源材料回答、不编造，还能生成播客。",
      skills: ["Research", "Long Context", "Reasoning", "Agent"],
      strengths: ["源材料 grounded", "文档研究", "Audio Overview"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 85, trend: "+4" },
        enterprise: { value: 77, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "openai-deep-research",
      name: "OpenAI Deep Research",
      company: "OpenAI",
      logo: "logos/openai-deep-research.png",
      website: "https://chatgpt.com",
      category: "Research Agent",
      release: "2025-02",
      slogan: "The High-Depth Analyst",
      description: "OpenAI Deep Research 是面向深度调研场景的研究 Agent，能够进行长链路检索、交叉验证与结构化报告产出，帮助用户在复杂主题上快速建立认知。",
      skills: ["Research", "Reasoning", "Agent", "Long Context", "Browser"],
      strengths: ["深度检索", "长链路分析", "报告产出"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 92, trend: "+9" },
        enterprise: { value: 88, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    /* ── Multi-Agent Framework ── */

    {
      id: "langgraph",
      name: "LangGraph",
      company: "LangChain",
      logo: "logos/langgraph.png",
      website: "https://langchain.com/langgraph",
      category: "Multi-Agent Framework",
      release: "2024-01",
      slogan: "The Graph Orchestrator",
      description: "LangGraph 是 LangChain 推出的 Agent 编排框架，用图结构定义多 Agent 工作流与状态管理，以节点为步骤、边为流转，适合建模和运行复杂工作流。",
      skills: ["Agent", "Automation", "MCP", "Coding", "Reasoning"],
      strengths: ["图编排", "状态管理", "LangChain 生态"],
      metrics: {
        community: { value: 35689, trend: "+1100" },
        fork: { value: 1540, trend: "+210" },
        searchIndex: { value: 83, trend: "+4" },
        enterprise: { value: 76, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "crewai",
      name: "CrewAI",
      company: "CrewAI",
      logo: "logos/crewai.png",
      website: "https://crewai.com",
      category: "Multi-Agent Framework",
      release: "2023-11",
      slogan: "The Crew Manager",
      description: "CrewAI 是热门的多 Agent 协作框架，通过 Role、Task、Crew 抽象让多个 Agent 分工合作，支持调研、写稿、审核等角色协作完成任务。",
      skills: ["Agent", "Automation", "Coding", "Research", "Reasoning"],
      strengths: ["角色分工", "易上手", "社区活跃"],
      metrics: {
        community: { value: 54333, trend: "+3200" },
        fork: { value: 3800, trend: "+480" },
        searchIndex: { value: 86, trend: "+5" },
        enterprise: { value: 70, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "autogen",
      name: "AutoGen",
      company: "Microsoft",
      logo: "logos/autogen.png",
      website: "https://microsoft.github.io/autogen",
      category: "Multi-Agent Framework",
      release: "2023-09",
      slogan: "The Microsoft Multi-Agent",
      description: "AutoGen 是微软开源的多 Agent 对话框架，支持 Agent 间自动对话、代码执行与人机协作，让多个 Agent 互相讨论、写代码并产出结果。",
      skills: ["Agent", "Coding", "Automation", "Reasoning", "MCP"],
      strengths: ["微软背书", "对话式协作", "代码执行"],
      metrics: {
        community: { value: 59232, trend: "+2800" },
        fork: { value: 6200, trend: "+520" },
        searchIndex: { value: 85, trend: "+2" },
        enterprise: { value: 82, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "pydantic-ai",
      name: "PydanticAI",
      company: "Pydantic",
      logo: "logos/pydantic-ai.png",
      website: "https://ai.pydantic.dev",
      category: "Multi-Agent Framework",
      release: "2024-11",
      slogan: "The Type-Safe Agent",
      description: "PydanticAI 是 Pydantic 团队推出的类型安全 Agent 框架，用 Python 类型系统约束 Agent 输入输出，以 Schema 保障生产环境的可靠性。",
      skills: ["Agent", "Coding", "MCP", "Automation", "Reasoning"],
      strengths: ["类型安全", "Pydantic 生态", "生产就绪"],
      metrics: {
        community: { value: 17991, trend: "+2400" },
        fork: { value: 1100, trend: "+280" },
        searchIndex: { value: 80, trend: "+9" },
        enterprise: { value: 68, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    {
      id: "mastra",
      name: "Mastra",
      company: "Mastra",
      logo: "logos/mastra.png",
      website: "https://mastra.ai",
      category: "Multi-Agent Framework",
      release: "2024-12",
      slogan: "The TypeScript Agent Stack",
      description: "Mastra 是 TypeScript 原生的 Agent 框架，提供 Workflow、Memory、Tool 等模块，帮助开发者快速搭建生产级 Agent 应用。",
      skills: ["Agent", "Coding", "Automation", "MCP", "Reasoning"],
      strengths: ["TypeScript 原生", "Workflow", "开发者体验"],
      metrics: {
        community: { value: 25436, trend: "+3600" },
        fork: { value: 980, trend: "+310" },
        searchIndex: { value: 77, trend: "+11" },
        enterprise: { value: 64, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "agno",
      name: "Agno",
      company: "Agno",
      logo: "logos/agno.png",
      website: "https://agno.com",
      category: "Multi-Agent Framework",
      release: "2024-06",
      slogan: "The Lightweight Multi-Agent",
      description: "Agno（原 Phidata）是轻量级 Python 多 Agent 框架，强调性能与简洁 API，几行代码即可跑起 Agent Team，多 Agent 协作高效且不臃肿。",
      skills: ["Agent", "Coding", "Automation", "Reasoning", "MCP"],
      strengths: ["轻量高性能", "Agent Team", "Python 友好"],
      metrics: {
        community: { value: 40838, trend: "+4100" },
        fork: { value: 2800, trend: "+560" },
        searchIndex: { value: 79, trend: "+10" },
        enterprise: { value: 62, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    {
      id: "smolagents",
      name: "SmolAgents",
      company: "Hugging Face",
      logo: "logos/smolagents.png",
      website: "https://huggingface.co/docs/smolagents",
      category: "Multi-Agent Framework",
      release: "2024-12",
      slogan: "The Minimal Agent Library",
      description: "SmolAgents 是 Hugging Face 推出的极简 Agent 库，代码量少但功能完整，支持 Code Agent 与 Tool Calling，以极小体量实现 Agent 能力。",
      skills: ["Agent", "Coding", "Automation", "Reasoning", "MCP"],
      strengths: ["极简设计", "HF 生态", "Code Agent"],
      metrics: {
        community: { value: 28006, trend: "+2900" },
        fork: { value: 1600, trend: "+340" },
        searchIndex: { value: 74, trend: "+8" },
        enterprise: { value: 58, trend: "+2" }
      },
      updated: "2026-06-25"
    },

    {
      id: "camel",
      name: "CAMEL",
      company: "CAMEL-AI",
      logo: "logos/camel.png",
      website: "https://www.camel-ai.org",
      category: "Multi-Agent Framework",
      release: "2023-10",
      slogan: "The Agent Society Framework",
      description: "CAMEL 是多 Agent 协作研究与开发框架，强调角色扮演与社会化协作机制，通过角色分工和对话机制处理复杂任务模拟与编排。",
      skills: ["Agent", "Research", "Automation", "Reasoning", "Coding"],
      strengths: ["角色协作", "研究导向", "多 Agent 编排"],
      metrics: {
        community: { value: 17267, trend: "+1700" },
        fork: { value: 1800, trend: "+260" },
        searchIndex: { value: 73, trend: "+6" },
        enterprise: { value: 57, trend: "+3" }
      },
      updated: "2026-06-25"
    },

    

    /* ── Autonomous SWE Agent ── */

    {
      id: "devin",
      name: "Devin",
      company: "Cognition",
      logo: "logos/devin.png",
      website: "https://devin.ai",
      category: "Autonomous SWE Agent",
      release: "2024-03",
      slogan: "The AI Software Engineer",
      description: "Devin 是 Cognition 推出的自主软件工程师 Agent，能独立完成从 Issue 到 PR 的完整开发流程，自主写代码、跑测试并提交 PR。",
      skills: ["Coding", "Agent", "Git", "Terminal", "Automation", "Reasoning"],
      strengths: ["端到端开发", "Issue 到 PR", "行业标杆"],
      metrics: {
        community: { value: 0, trend: "0" },
        fork: { value: 0, trend: "0" },
        searchIndex: { value: 95, trend: "+3" },
        enterprise: { value: 89, trend: "+5" }
      },
      updated: "2026-06-25"
    },

    {
      id: "openhands",
      name: "OpenHands",
      company: "All Hands AI",
      logo: "logos/openhands.png",
      website: "https://openhands.dev",
      category: "Autonomous SWE Agent",
      release: "2024-03",
      slogan: "The Open SWE Agent",
      description: "OpenHands（原 OpenDevin）是开源自主软件工程 Agent，在沙箱环境中完成代码编写、调试与 Git 操作，由社区驱动、持续进化。",
      skills: ["Coding", "Agent", "Git", "Terminal", "Automation", "Browser"],
      strengths: ["开源", "沙箱执行", "社区贡献"],
      metrics: {
        community: { value: 78282, trend: "+4200" },
        fork: { value: 6100, trend: "+580" },
        searchIndex: { value: 87, trend: "+6" },
        enterprise: { value: 72, trend: "+4" }
      },
      updated: "2026-06-25"
    },

    {
      id: "swe-agent",
      name: "SWE-Agent",
      company: "Princeton",
      logo: "logos/swe-agent.png",
      website: "https://swe-agent.com",
      category: "Autonomous SWE Agent",
      release: "2024-04",
      slogan: "The Benchmark Leader",
      description: "SWE-Agent 是普林斯顿等机构推出的软件工程 Agent，在 SWE-bench 上表现领先，专注读懂 Issue、修复 Bug 并通过测试。",
      skills: ["Coding", "Agent", "Git", "Terminal", "Reasoning", "Refactor"],
      strengths: ["SWE-bench 领先", "学术研究", "Issue 修复"],
      metrics: {
        community: { value: 19620, trend: "+900" },
        fork: { value: 1500, trend: "+120" },
        searchIndex: { value: 80, trend: "+3" },
        enterprise: { value: 64, trend: "+2" }
      },
      updated: "2026-06-25"
    },

    {
      id: "autogpt",
      name: "AutoGPT",
      company: "Significant Gravitas",
      logo: "logos/autogpt.png",
      website: "https://agpt.co",
      category: "Autonomous SWE Agent",
      release: "2023-03",
      slogan: "The Pioneer Agent",
      description: "AutoGPT 是一款基于大型语言模型（主要是 OpenAI 的 GPT-4 和 GPT-3.5）的开源自主 AI 智能体（AI Agent）框架。与传统的 ChatGPT 等需要人类不断输入提示词（Prompt）进行交互的聊天机器人不同，AutoGPT 具备**自主思维链（Chain of Thought）**能力。用户只需为它设定一个最终的“大目标”，它就能自己将目标拆解成多个子任务、自主为任务排定优先级，并循环往复地执行，直到完成目标为止。",
      skills: ["Agent", "Automation", "Browser", "Coding", "Research"],
      strengths: ["Agent 先驱", "目标分解", "工具调用"],
      metrics: {
        community: { value: 185159, trend: "+800" },
        fork: { value: 42000, trend: "+210" },
        searchIndex: { value: 75, trend: "+1" },
        enterprise: { value: 45, trend: "+1" }
      },
      updated: "2026-06-25"
    }

  ]

};
