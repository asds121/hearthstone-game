[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [application](../README.md) / CardManager

# Class: CardManager

Defined in: [src/application/engine/card-manager.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/card-manager.ts#L23)

卡牌管理器

## Constructors

### Constructor

> **new CardManager**(`gameState`, `triggerManager`): `CardManager`

Defined in: [src/application/engine/card-manager.ts:27](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/card-manager.ts#L27)

#### Parameters

##### gameState

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

##### triggerManager

[`TriggerManager`](TriggerManager.md)

#### Returns

`CardManager`

## Methods

### drawCard()

> **drawCard**(`playerId`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

Defined in: [src/application/engine/card-manager.ts:161](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/card-manager.ts#L161)

抽牌

#### Parameters

##### playerId

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

***

### playCard()

> **playCard**(`handIndex`, `targetId?`): `boolean`

Defined in: [src/application/engine/card-manager.ts:35](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/card-manager.ts#L35)

使用手牌中的卡牌

#### Parameters

##### handIndex

`number`

##### targetId?

`number`

#### Returns

`boolean`
