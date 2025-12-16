[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [application](../README.md) / GameEngine

# Class: GameEngine

Defined in: [src/application/engine/game-engine.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L44)

主游戏引擎

## Constructors

### Constructor

> **new GameEngine**(`config`, `gameState?`): `GameEngine`

Defined in: [src/application/engine/game-engine.ts:51](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L51)

#### Parameters

##### config

[`GameConfig`](../../types/game.types/interfaces/GameConfig.md) = `DEFAULT_GAME_CONFIG`

##### gameState?

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

#### Returns

`GameEngine`

## Methods

### attack()

> **attack**(`attackerId`, `targetId`): `boolean`

Defined in: [src/application/engine/game-engine.ts:314](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L314)

随从攻击

#### Parameters

##### attackerId

`number`

##### targetId

`number`

#### Returns

`boolean`

***

### checkGameEnd()

> **checkGameEnd**(): `boolean`

Defined in: [src/application/engine/game-engine.ts:492](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L492)

检查游戏结束

#### Returns

`boolean`

***

### displayGameState()

> **displayGameState**(): `void`

Defined in: [src/application/engine/game-engine.ts:350](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L350)

显示游戏状态

#### Returns

`void`

***

### drawCard()

> **drawCard**(`playerId`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

Defined in: [src/application/engine/game-engine.ts:429](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L429)

抽牌

#### Parameters

##### playerId

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

***

### endTurn()

> **endTurn**(): `void`

Defined in: [src/application/engine/game-engine.ts:231](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L231)

结束回合

#### Returns

`void`

***

### getGameState()

> **getGameState**(): [`IGameState`](../../types/game.types/interfaces/IGameState.md)

Defined in: [src/application/engine/game-engine.ts:373](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L373)

获取游戏状态

#### Returns

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

***

### initializeGame()

> **initializeGame**(`player1Deck`, `player2Deck`): `void`

Defined in: [src/application/engine/game-engine.ts:61](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L61)

初始化新游戏

#### Parameters

##### player1Deck

`string`[]

##### player2Deck

`string`[]

#### Returns

`void`

***

### playCard()

> **playCard**(`handIndex`, `targetId?`): `boolean`

Defined in: [src/application/engine/game-engine.ts:269](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L269)

使用手牌中的卡牌

#### Parameters

##### handIndex

`number`

##### targetId?

`number`

#### Returns

`boolean`

***

### startTurn()

> **startTurn**(): `void`

Defined in: [src/application/engine/game-engine.ts:189](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/game-engine.ts#L189)

开始新回合

#### Returns

`void`
