# ⏰ 60s API

![Update Status](https://github.com/vikiboss/60s-static-host/workflows/schedule/badge.svg) ![GitHub](https://img.shields.io/github/v/release/vikiboss/60s?label=GitHub) ![Docker](https://img.shields.io/docker/v/vikiboss/60s?style=flat&label=Docker) ![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white) ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?logo=bun&logoColor=white) ![Deno](https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white) [![群](https://img.shields.io/badge/%E4%BC%81%E9%B9%85%E7%BE%A4-595941841-ff69b4)](https://qm.qq.com/q/RpJXzgfAMG)

<a href="https://hellogithub.com/repository/vikiboss/60s" target="_blank"><img src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=8e9af473df2244f59d84b79915298fcc&claim_uid=wXMelR56paDoO2x&theme=dark" alt="Featured｜HelloGitHub" style="width: 250px; height: 54px;" width="250" height="54" /></a>

> 一系列 **高质量、开源、可靠、全球 CDN 加速** 的开放 API 集合，让你用最简单的方式获取最准确的数据。

构建于现代技术栈 [Deno](https://deno.com/)，托管在 [Deno Deploy](https://deno.com/deploy)，同时支持 [Docker](https://docker.com)、[Cloudflare Workers](https://www.cloudflare.com/zh-cn/developer-platform/products/workers/)、[Bun](https://bun.sh/) 和 [Node.js](https://nodejs.org/) 等多种部署方式。

## 🌍 看世界 · 每天60秒读懂世界

> **核心功能** - 获取每日精选新闻，让你快速了解世界大事

### 📡 API 调用方式

> 部分地区访问主域名可能超时，可尝试自行部署，或使用他人分享的 [公共实例](https://docs.60s-api.viki.moe/7306811m0)

```bash
# JSON 格式 (默认)
curl https://60s.viki.moe/v2/60s

# 纯文本格式
curl https://60s.viki.moe/v2/60s?encoding=text

# 新闻图片 (重定向到微信公众号原图)
curl https://60s.viki.moe/v2/60s?encoding=image

# 代理图片 (代理请求，绕过防盗链)
curl https://60s.viki.moe/v2/60s?encoding=image-proxy
```

### 📊 数据特性

- **数据源**: 微信公众号，详情参考 [这里](https://github.com/vikiboss/60s-static-host/blob/main/src/config/constants.ts#L1-L5)
- **更新频率**: 每半小时自动尝试更新，正常情况最晚上午 10 点会更新
- **数据处理**: [vikiboss/60s-static-host](https://github.com/vikiboss/60s-static-host) 仓库定时抓取
- **响应速度**: 毫秒级缓存响应，全球 CDN 加速
- **内容质量**: 精选 15 条国内外优质新闻 + 每日微语

### 💡 使用场景

- 📱 移动应用新闻模块
- 🖥️ 网站首页资讯展示  
- 🤖 聊天机器人新闻推送
- 📧 邮件订阅日报生成
- 🔔 桌面通知提醒

## 🎯 设计理念

- **权威数据源** - 优先选择官方、权威的数据来源，确保信息准确性
- **毫秒级响应** - 部分接口采取智能缓存策略，用户无感的高速响应体验
- **开发者友好** - 统一的 API 设计，简洁的参数结构，完善的文档支持

---

## 📚 完整 API 目录

> 完整文档托管在 [Apifox](https://docs.60s-api.viki.moe)，持续更新中，欢迎贡献！

### 📰 信息资讯类

| API              | 端点                    | 描述                 | 数据源       |
| ---------------- | ----------------------- | -------------------- | ------------ |
| 🌍 **60秒看世界** | `/v2/60s`               | 每日精选新闻摘要     | 微信公众号   |
| 🏞️ 必应壁纸       | `/v2/bing`              | 每日精美壁纸         | Bing 官方    |
| 📅 历史今天       | `/v2/today_in_history`  | 历史上的今天         | 权威历史资料 |
| 🤖 AI 快讯        | `/v2/ai-news`           | 每日 AI 行业资讯     | AI 工具集    |
| 💰 汇率查询       | `/v2/exchange_rate`     | 实时货币汇率         | 权威金融数据 |
| 🔬 HN 文章        | `/v2/hacker-news/:type` | Hacker News 前沿资讯 | HN 官方      |

### 🔥 热门榜单类

| API          | 端点                               | 描述           | 更新频率 |
| ------------ | ---------------------------------- | -------------- | -------- |
| 📺 哔哩哔哩   | `/v2/bili`                         | B站热搜榜      | 实时     |
| 🦊 微博热搜   | `/v2/weibo`                        | 微博实时热搜   | 实时     |
| ❓ 知乎热榜   | `/v2/zhihu`                        | 知乎热门话题   | 实时     |
| 🎵 抖音热搜   | `/v2/douyin`                       | 抖音热门内容   | 实时     |
| 📰 头条热搜   | `/v2/toutiao`                      | 今日头条热点   | 实时     |
| 🎬 猫眼票房   | `/v2/maoyan`                       | 实时电影票房   | 实时     |
| 🎵 网易云榜单 | `/v2/ncm-rank`、`/v2/ncm-rank/:id` | 网易云音乐榜单 | 实时     |

### 🛠️ 实用工具类

| API         | 端点          | 描述                | 特色功能          |
| ----------- | ------------- | ------------------- | ----------------- |
| 🌍 在线翻译  | `/v2/fanyi`   | 多语言翻译          | 支持 109 种语言   |
| 🖼️ 转二维码  | `/v2/qrcode`  | 生成二维码          | 支持 URL/文本等   |
| 🌦️ 天气查询  | `/v2/weather` | 实时天气预报        | 全国城市覆盖      |
| 📡 IP 查询   | `/v2/ip`      | IP地址定位          | 精确地理位置      |
| 🗓️ 农历转换  | `/v2/lunar`   | 公历农历互转        | 天干地支/节气     |
| ❓ 百科查询  | `/v2/baike`   | 百度百科词条        | 智能搜索          |
| 🎮 Epic 游戏 | `/v2/epic`    | Epic Games 免费游戏 | 每周更新          |
| 🐦 OG 信息   | `/v2/og`      | 网页元信息提取      | 社交分享优化      |
| 🌈 哈希工具  | `/v2/hash`    | 多种编码解码        | MD5/Base64/URL 等 |

### 🎈 趣味娱乐类

| API         | 端点             | 描述            | 特色          |
| ----------- | ---------------- | --------------- | ------------- |
| 💬 KFC 段子  | `/v2/kfc`        | 随机搞笑段子    | 经典网络梗    |
| 💭 一言语录  | `/v2/hitokoto`   | 随机励志语录    | 多分类语句    |
| 💻 JS 趣味题 | `/v2/awesome-js` | JavaScript 题库 | 100+ 精选题目 |
| ✨ 今日运势  | `/v2/luck`       | 随机运势预测    | 趣味占卜      |
| ⚛️ 化学元素  | `/v2/chemical`   | 随机化学知识    | 科普教育      |
| 🎤 唱歌音频  | `/v2/changya`    | 随机歌曲片段    | 娱乐互动      |
| 🤣 搞笑段子  | `/v2/duanzi`     | 精选笑话        | 解压神器      |
| 🤭 发病文学  | `/v2/fabing`     | 网络流行文体    | 年轻人语言    |
| 📖 答案之书  | `/v2/answer`     | 随机人生建议    | 心灵鸡汤      |
| 🥶 冷笑话    | `/v2/dad-joke`   | 随机冷笑话      | 放松解压      |

### 🔧 常用参数说明

```bash
# 输出格式控制
?encoding=json    # JSON格式 (默认)
?encoding=text    # 纯文本格式

# 随机获取 (适用于部分 API，以文档为准)  
?random=true      # 随机返回
?id=123          # 获取指定ID

# 示例调用
curl "https://60s.viki.moe/v2/60s?encoding=text"
curl "https://60s.viki.moe/v2/epic"
curl "https://60s.viki.moe/v2/fanyi?text=Hello&to=ja"
```

## 🚀 快速开始

### 📦 一键部署

**Docker 方式（推荐）**
```bash
docker run -d \
  --restart always \
  --name 60s \
  -p 4399:4399 \
  vikiboss/60s:latest
```

**其他运行时**
```bash
# Deno
deno install && deno run -A deno.ts

# Bun
bun install && bun run bun.ts

# Node.js (需要 v22.6+)
npm install && node --experimental-strip-types node.ts
```

### ☁️ 云端部署

**Cloudflare Workers**

方式一，使用 Workers 的可视化界面：

1. [Fork 本仓库](https://github.com/vikiboss/60s/fork)
2. 在 [Cloudflare Workers](https://workers.cloudflare.com/) 通过 GitHub 创建项目
3. 使用默认配置直接部署

> 仓库已预置 Workers 配置，无需额外设置。后续更新只需同步主仓库即可。

方式二，命令行操作，clone 本仓库然后执行：

```bash
npm install && npx wrangler publish
```

---

## 📋 数据更新机制

![数据流架构图](./images/arch.png)

### 🔄 更新策略
- **数据抓取**: GitHub Actions 定时任务
- **存储方式**: 静态 JSON 文件 + CDN 缓存  
- **更新频率**: 每日自动更新

> 可视化架构图: [60s 更新策略 - Excalidraw](https://excalidraw.com/#json=VRffPBlMuFBkOlTbGe7IH,0C6yClfLME65ZhmQ30ywdg)

---

## 🤝 社区与支持

### 💬 交流群组
- **QQ 群**: [![加入群聊](https://img.shields.io/badge/%E4%BC%81%E9%B5%9D%E7%BE%A4-595941841-ff69b4)](https://qm.qq.com/q/RpJXzgfAMG) (问题反馈、使用交流)
- **GitHub**: [Issues](https://github.com/vikiboss/60s/issues) (Bug 报告、功能建议)
- **文档**: [API 文档](https://docs.60s-api.viki.moe) (详细使用说明)

### 🎯 项目起源
本项目源于 [这篇文章](https://xlog.viki.moe/60s) 中提到的想法，致力于为开发者提供简单可靠的数据接口服务。

### 📈 项目数据

[![Star History Chart](https://api.star-history.com/svg?repos=vikiboss/60s&type=Date)](https://star-history.com/#vikiboss/60s&Date)

## 💰 赞赏

如果觉得这个项目对你有帮助，欢迎请我喝咖啡 ☕️

> 采取**自愿**原则, 收到的赞赏将用于提高开发者积极性和开发环境。

<div id='readme-reward' style="display: flex; gap: 8px; flex-wrap: wrap; width: 100%">
  <img src="https://s2.loli.net/2022/11/16/X2kFMdaxvSc1V5P.jpg" alt="wxpay" height="160px"style="margin: 24px;"/>
  <img src="https://s2.loli.net/2022/11/16/vZ4xkCopKRmIFVX.jpg" alt="alipay" height="160px" style="margin:24px;"/>
</div>

感谢以下小伙伴的赞赏（排名不分先后）：

<!-- 表格 -->
|           赞赏人            |  金额  |  途径  |             备注             |
| :-------------------------: | :----: | :----: | :--------------------------: |
|           Update            |  6.66  | WeChat |      感谢大佬的开源分享      |
|            匿名             |  0.01  | WeChat |              -               |
|         月夜忆江南          |  5.00  | WeChat |              -               |
|            匿名             |  1.66  | WeChat |              -               |
|         GoooodJooB7         |  1.66  | WeChat |         谢谢大佬开源         |
|            匿名             |  1.66  | WeChat |              -               |
| 十七岁就学会吃饭的天才少年  |  5.00  | WeChat |              -               |
|          Sundrops           |  1.66  | WeChat |        感谢友友的接口        |
|        春风伴我余生         | 10.00  | WeChat |              -               |
|             杰              |  1.00  | WeChat |              -               |
|            Blue             |  6.66  | WeChat |      Blue 祝开发者 6666      |
|           聆听、            | 10.00  | WeChat |      喝杯咖啡，记得加冰      |
|            匿名             | 100.00 | WeChat |            好项目            |
| 卤蛋 （HelloGitHub 发起人） | 88.88  | WeChat | 很喜欢你的项目，加油 ^ O ^ ~ |
|             ---             |  ---   |  ---   |             ---              |
|             *斌             | 12.90  | Alipay |              -               |
|             *杰             | 20.00  | Alipay |              -               |
|            **杰             |  9.90  | Alipay |              -               |
|             ---             |  ---   |  ---   |             ---              |
|             Ko.             | 11.66  |   QQ   |              -               |
|           yijiong           | 15.00  |   QQ   |       a cup of coffee        |

如有遗漏，欢迎通过 issue 或者反馈 QQ 群反馈～

## 🪪 License （开源协议）

[MIT](license) License © 2022-PRESENT Viki
