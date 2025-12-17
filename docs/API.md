# API Documentation

> 生成时间：2025-12-17T03:19:28.906Z


---

**hearthstone-game**

***

# Hearthstone Game Engine (TypeScript)

<div align="center">

![Hearthstone](https://img.shields.io/badge/Game-Hearthstone-orange)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](<https://img.shields.io/badge/Version-0.0.1%20(WIP)-orange>)
[![Generate API Docs](https://github.com/asds121/hearthstone-game/actions/workflows/generate-docs.yml/badge.svg)](https://github.com/asds121/hearthstone-game/actions/workflows/generate-docs.yml)

</div>

---

## 简介

基于《炉石传说》进阶规则集的 TypeScript 游戏引擎。实现包括：核心类型、域模型、事件/扳机系统与运行时引擎（`GameEngine` / `GameApplication`）。本仓库附带示例与测试套件，项目脚本请参见 `package.json`。

> 注：API 文档由 GitHub Actions（工作流 **Generate API Docs**）自动生成并更新到 `docs/API.md`。如需手动生成，请运行 `npm run docs`。

---

## 主要特性

- ✅ TypeScript（严格模式兼容）
- ✅ 模块化架构（domain / application / data-structures）
- ✅ 事件驱动与扳机优先级系统
- ✅ 示例（`examples/basic-game.ts`）与单元测试（Jest）

---

## 快速开始

### 要求

- Node.js >= 14
- npm

### 安装

```bash
npm install
```

### 常用脚本

- 构建: `npm run build`
- 开发（watch）: `npm run dev`
- 运行: `npm start` (运行 `dist/main.js`, 需先 `npm run build`)
- 示例: `npm run example` (使用 `ts-node` 直接运行 `examples/basic-game.ts`)
- 快速示例（用于 CI 或快速验证）: `npm run example:fast` （cross-env FAST_EXAMPLE=1）
- 生成 API 文档（一步）：`npm run docs` —— 运行 TypeDoc 生成并合并为 `docs/API.md`
  - 或者分两步：
    - `npm run docs:generate`（TypeDoc → `docs/api/`）
    - `npm run docs:merge`（合并 `docs/api/*.md` → `docs/API.md`）
  - 可选参数（传给 `docs:merge`）：`--out=docs/API.md` `--title="API Reference"` `--sort=alpha|none` `--remove-headers`
- 测试: `npm test` / `npm run test:watch`

### 运行示例

```bash
npx ts-node -r tsconfig-paths/register --transpile-only examples/basic-game.ts
```

或者先构建后运行：

```bash
npm run build
node dist/main.js
```

---

## 使用示例（示范代码）

```ts
import { GameApplication } from "./src/application";

const app = new GameApplication();
app.initializeGame(["MINION_01", "SPELL_01"], ["MINION_02", "SPELL_02"]);
app.startGame();
app.displayGameState();
```

---

## 项目结构（摘要）

```
src/
├─ application/    # GameApplication + engine
├─ domain/         # Entities, Zones, Sequence
├─ types/          # Type definitions
├─ data-structures/# Queue, Stack, List 等
examples/          # 示例代码
docs/              # 文档
tests/             # Jest 测试
```

---

## 文档

- API: `docs/API.md`
- 游戏规则: `docs/GAME_RULES.md`
- 示例: `examples/basic-game.ts`

---

## 贡献

欢迎贡献 PR：

1. Fork 仓库并新建分支（`feature/xxx`、`fix/xxx`）
2. 遵循 TypeScript 严格模式并通过 `npm test`
3. 保持 PR 小且聚焦，补充说明与测试用例

建议工具链：ESLint（含 TypeScript 插件）、Jest

---

## 许可证

本项目采用 **MIT** 许可证（详见 `LICENSE`）。

---

如需帮助或报告问题，请使用仓库 Issues 或联系维护者（见 `package.json` 中的仓库信息）。

---

[**hearthstone-game**](README.md)

***

# hearthstone-game

## Modules

- [application](application/README.md)
- [domain](domain/README.md)
- [types](types/README.md)
- [types/base.types](types/base.types/README.md)
- [types/entities.types](types/entities.types/README.md)
- [types/events.types](types/events.types/README.md)
- [types/game.types](types/game.types/README.md)