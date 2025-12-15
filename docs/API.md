# Hearthstone Game Engine - API 文档

简要介绍本仓库提供的公共类型、域模型和主引擎接口。适用于快速查阅和集成。

## 目录

- 简介
- 安装与构建
- 快速开始
- API 参考
  - 类型 (Types)
  - 域模型 (Domain)
  - 引擎 (GameEngine)
- 示例
- 参阅

---

## 简介

本项目为一个基于 TypeScript 的《炉石传说》规则兼容游戏引擎实现，包含类型定义、域模型与主要引擎 `GameEngine` 实现。

## 安装与构建

```bash
npm install
npm run build
npm test
```

## 快速开始

```ts
import { GameEngine } from "../src/application/engine/game-engine";

const engine = new GameEngine();
engine.initializeGame(["MINION_01", "SPELL_01"], ["MINION_02", "SPELL_02"]);
engine.startTurn();
engine.displayGameState();
```

## API 参考

**Types (核心类型与枚举)**

- **`Keyword`**: 常用关键词枚举（如 `TAUNT`, `DIVINE_SHIELD`, `CHARGE` 等） — [src/types/keywords.types.ts](src/types/keywords.types.ts#L1)
- **`TriggerPriority`**: 扳机优先级枚举，用于按优先级排序扳机 — [src/types/keywords.types.ts](src/types/keywords.types.ts#L54)
- **`GameErrorCode` / `GameError`**: 引擎错误代码与自定义错误类 — [src/types/keywords.types.ts](src/types/keywords.types.ts#L109)
- **`IEffect`, `ICondition`**: 效果和条件接口，用于描述卡牌或扳机的效果 — [src/types/keywords.types.ts](src/types/keywords.types.ts#L85)
- **`EventType`, `IEvent`, `ITrigger`**: 事件类型与扳机接口，定义事件系统结构 — [src/types/events.types.ts](src/types/events.types.ts#L1)
- **`ISequence`, `IPhase`, `SequenceType`, `PhaseType`**: 序列与阶段类型，表示游戏内操作序列化流程 — [src/types/events.types.ts](src/types/events.types.ts#L118)
- **`IGameState`, `GameConfig`, `DEFAULT_GAME_CONFIG`**: 游戏状态接口与默认配置 — [src/types/game.types.ts](src/types/game.types.ts#L1)

**Domain (域模型 & 实现类)**

- **`GameState`**: 游戏状态实现类，管理实体、区域（Zones）、扳机和序列 — [src/domain/game-state.ts](src/domain/game-state.ts#L1)
  - 方法示例：`addEntity()`, `removeEntity()`, `getEntity()`, `addPlayer()`, `getPlayer()`, `getNextEntityId()`
- **事件/扳机**: `GameEvent`, `Trigger` — [src/domain/events/event.ts](src/domain/events/event.ts#L1) 与 [src/domain/events/trigger.ts](src/domain/events/trigger.ts#L1)
  - 注意: `GameEvent` 的 `target` / `value` 为可选属性以适应不同事件类型。
- **序列/阶段实现**: `GameSequence`, `GamePhase` — [src/domain/sequence/sequence.ts](src/domain/sequence/sequence.ts#L1), [src/domain/sequence/phase.ts](src/domain/sequence/phase.ts#L1)
- **区域 (Zones)**: 抽象 `Zone` 与具体实现 `BattlefieldZone`, `HandZone`, `DeckZone`, `GraveyardZone`, `SecretZone`, `SetasideZone` — [src/domain/zones](src/domain/zones)
  - `DeckZone` 新增方法: `getCards()`, `toArray()`, `find(predicate)`, `filter(predicate)`，方便在运行时访问与查询牌库完整列表。
- **实体 (Entities)**: 基类 `Entity` 及常见实体实现 `MinionEntity`, `PlayerEntity`, `SpellEntity`, `WeaponEntity`, `HeroEntity`, `HeroPowerEntity` — [src/domain/entities](src/domain/entities)

**GameEngine (主引擎)**

- **`GameEngine`** - 主要方法：
  - `initializeGame(player1Deck: string[], player2Deck: string[]): void` — 初始化游戏、创建玩家、英雄、牌库并执行初始抽牌。
  - `startTurn(): void` — 开始回合，处理资源、抽牌并创建回合序列。
  - `endTurn(): void` — 结束回合并处理回合结束逻辑。
  - `playCard(handIndex: number, targetId?: number): boolean` — 使用手牌中的卡牌。
  - `attack(attackerId: number, targetId: number): boolean` — 发起攻击序列。
  - `displayGameState(): void` — 控制台输出当前游戏状态。
  - `getGameState(): IGameState` — 获取当前 `IGameState` 实例。
  - 构造器现在支持可选注入 `gameState` 参数：`new GameEngine(config?, gameState?)`，用于在应用层或测试中共用同一 `GameState` 实例。
  - `drawCard(playerId: number)` 已实现为从共享 `DeckZone` 中寻找并移除属于指定玩家的顶部卡牌并放入 `HandZone`。
  - 实现文件: [src/application/engine/game-engine.ts](src/application/engine/game-engine.ts#L1)

**Application (应用层)**

- **`GameApplication`**: 推荐的对外入口，整合 `GameEngine`、`TurnManager`、`CardManager`、`CombatManager`、`TriggerManager` 并提供易用的 API：
  - `initializeGame(player1Deck: string[], player2Deck: string[])` — 初始化游戏。
  - `startGame()` / `endTurn()` / `playCard()` / `attack()` / `useHeroPower()` — 常用游戏操作。
  - 提示: 为了在测试环境避免异步定时器导致的竞争或日志抖动，`startGame()` 在 Jest 环境下会同步触发回合开始逻辑（实现细节不会影响正常运行模式）。

## 示例

- 一个最小演示见 [examples/basic-game.ts](examples/basic-game.ts)

## 参阅

- 源码入口: [src/types/index.ts](src/types/index.ts#L1)
- 测试: [tests](tests)
- 贡献指南与代码风格请参见仓库 README

---

如果需要，我可以为每个导出符号生成更详尽的 API 段（参数、返回值与示例），或将此文档拆分为多个子页面（Types / Domain / Engine）。
