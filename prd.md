开发一个纯前端 HTML 项目（不需要后端）。

项目名称：

Agent Desktop

定位：

AI Agent Encyclopedia

帮助用户快速了解目前主流 AI Agent。

整个网站只有一个 index.html。

数据全部来自 /Users/liuqiwen/Documents/1.我的开发程序/Agent_family/agents.js

------------------------------------------------

技术要求

HTML
CSS
Vanilla JavaScript

不使用 React。

不使用 Vue。

不使用任何 UI 框架。

可以使用：

Tailwind CDN

或者纯 CSS。

------------------------------------------------

整体风格

参考：

macOS Desktop

Apple Human Interface

Raycast

Linear

整体极简。

大量留白。

不要 Dashboard。

不要表格。

不要复杂图表。

------------------------------------------------

页面布局

顶部：

Menu Bar

左边：

🍎 Agent Desktop

中间：

搜索框

右边：

Last Updated

------------------------------------------------

主体：

Desktop

所有 Agent 像 macOS App 一样排列。

例如：

Claude Code

Codex CLI

Cursor Agent

Gemini CLI

Qwen Code

Kimi CLI

DeepSeek

OpenHands

Aider

Devin

Manus

......

每个 Agent：

64x64 图标

下面名称

Hover：

轻微放大

增加阴影

点击：

展开 Popover。

------------------------------------------------

Popover

Popover 指向当前图标。

不是 Modal。

不是 Drawer。

点击其它 Agent 自动切换。

内容：

Logo

Agent Name

Company

一句话介绍

Personality

Skills

Metrics

更新时间

------------------------------------------------

Personality

第一人称。

例如：

你好，我是 Claude Code。

我擅长理解大型代码工程。

我更喜欢重构，而不是快速生成代码。

80 字左右。

------------------------------------------------

Skills

Tag：

Coding

Reasoning

Terminal

Git

Refactor

Browser

Research

Long Context

Automation

MCP

Agent

等等。

------------------------------------------------

Metrics

展示：

Community

Fork

Search Index

Enterprise

Community：

GitHub Stars

Fork：

GitHub Fork

Search Index：

0~100

Enterprise：

0~100

每项下面：

7 天增长。

例如：

+2.1k

------------------------------------------------

搜索

支持：

Agent Name

Company

Tag

------------------------------------------------

排序

支持：

Community

Search

Enterprise

更新时间

A-Z

------------------------------------------------

底部

显示：

Data Updated

共多少 Agent

数据来源：

GitHub

Google Trends

官方 Blog

企业公开信息

------------------------------------------------

整个页面必须完全由 agents.js 渲染。

HTML 不允许写死任何 Agent。
