[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [application](../README.md) / GameApplication

# Class: GameApplication

Defined in: [src/application/game-application.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L44)

游戏应用层主类
提供完整的游戏API，整合所有子系统

## Constructors

### Constructor

> **new GameApplication**(`config`): `GameApplication`

Defined in: [src/application/game-application.ts:53](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L53)

#### Parameters

##### config

[`GameConfig`](../../types/game.types/interfaces/GameConfig.md) = `DEFAULT_GAME_CONFIG`

#### Returns

`GameApplication`

## Methods

### attack()

> **attack**(`attackerId`, `targetId`): `boolean`

Defined in: [src/application/game-application.ts:123](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L123)

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

Defined in: [src/application/game-application.ts:301](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L301)

检查游戏结束

#### Returns

`boolean`

***

### displayGameState()

> **displayGameState**(): `void`

Defined in: [src/application/game-application.ts:267](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L267)

显示游戏状态

#### Returns

`void`

***

### endGame()

> **endGame**(): `void`

Defined in: [src/application/game-application.ts:90](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L90)

结束游戏

#### Returns

`void`

***

### endTurn()

> **endTurn**(): `void`

Defined in: [src/application/game-application.ts:100](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L100)

结束当前回合

#### Returns

`void`

***

### getBattlefieldMinions()

> **getBattlefieldMinions**(`playerId?`): [`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)[]

Defined in: [src/application/game-application.ts:243](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L243)

获取战场随从

#### Parameters

##### playerId?

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)[]

***

### getCurrentPlayer()

> **getCurrentPlayer**(): [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/application/game-application.ts:200](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L200)

获取当前玩家

#### Returns

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

***

### getCurrentPlayerId()

> **getCurrentPlayerId**(): [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/application/game-application.ts:228](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L228)

获取当前玩家ID

#### Returns

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

***

### getCurrentTurn()

> **getCurrentTurn**(): `number`

Defined in: [src/application/game-application.ts:221](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L221)

获取当前回合数

#### Returns

`number`

***

### getGameState()

> **getGameState**(): [`IGameState`](../../types/game.types/interfaces/IGameState.md)

Defined in: [src/application/game-application.ts:214](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L214)

获取游戏状态

#### Returns

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

***

### getHandCards()

> **getHandCards**(`playerId`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

Defined in: [src/application/game-application.ts:235](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L235)

获取手牌

#### Parameters

##### playerId

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

***

### getHero()

> **getHero**(`playerId`): [`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md) \| `null`

Defined in: [src/application/game-application.ts:257](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L257)

获取英雄

#### Parameters

##### playerId

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md) \| `null`

***

### getOpponentPlayer()

> **getOpponentPlayer**(): [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/application/game-application.ts:207](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L207)

获取对手玩家

#### Returns

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

***

### initializeGame()

> **initializeGame**(`player1Deck`, `player2Deck`): `void`

Defined in: [src/application/game-application.ts:68](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L68)

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

Defined in: [src/application/game-application.ts:116](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L116)

使用手牌中的卡牌

#### Parameters

##### handIndex

`number`

##### targetId?

`number`

#### Returns

`boolean`

***

### startGame()

> **startGame**(): `void`

Defined in: [src/application/game-application.ts:76](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L76)

开始游戏

#### Returns

`void`

***

### useHeroPower()

> **useHeroPower**(`targetId?`): `boolean`

Defined in: [src/application/game-application.ts:156](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/game-application.ts#L156)

使用英雄技能

#### Parameters

##### targetId?

`number`

#### Returns

`boolean`
