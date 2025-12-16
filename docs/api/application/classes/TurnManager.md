[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [application](../README.md) / TurnManager

# Class: TurnManager

Defined in: [src/application/engine/turn-manager.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L13)

回合管理器

## Constructors

### Constructor

> **new TurnManager**(`gameState`, `triggerManager`): `TurnManager`

Defined in: [src/application/engine/turn-manager.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L17)

#### Parameters

##### gameState

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

##### triggerManager

[`TriggerManager`](TriggerManager.md)

#### Returns

`TurnManager`

## Methods

### cleanupTurnEffects()

> **cleanupTurnEffects**(): `void`

Defined in: [src/application/engine/turn-manager.ts:88](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L88)

清除回合效果

#### Returns

`void`

***

### endTurn()

> **endTurn**(): `void`

Defined in: [src/application/engine/turn-manager.ts:64](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L64)

结束回合

#### Returns

`void`

***

### getCurrentStep()

> **getCurrentStep**(): [`GameStep`](../../types/base.types/type-aliases/GameStep.md)

Defined in: [src/application/engine/turn-manager.ts:116](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L116)

获取当前游戏步骤

#### Returns

[`GameStep`](../../types/base.types/type-aliases/GameStep.md)

***

### setStep()

> **setStep**(`step`): `void`

Defined in: [src/application/engine/turn-manager.ts:123](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L123)

设置游戏步骤

#### Parameters

##### step

[`GameStep`](../../types/base.types/type-aliases/GameStep.md)

#### Returns

`void`

***

### startTurn()

> **startTurn**(): `void`

Defined in: [src/application/engine/turn-manager.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/turn-manager.ts#L25)

开始新回合

#### Returns

`void`
