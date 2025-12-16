[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/events.types](../README.md) / ITrigger

# Interface: ITrigger

Defined in: [src/types/events.types.ts:93](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L93)

扳机接口

## Properties

### condition

> **condition**: (`event`, `gameState`) => `boolean` \| `undefined`

Defined in: [src/types/events.types.ts:97](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L97)

***

### effect()

> **effect**: (`event`, `gameState`) => `void`

Defined in: [src/types/events.types.ts:98](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L98)

#### Parameters

##### event

[`IEvent`](IEvent.md)

##### gameState

[`IGameState`](../../game.types/interfaces/IGameState.md)

#### Returns

`void`

***

### eventType

> **eventType**: [`EventType`](../type-aliases/EventType.md)

Defined in: [src/types/events.types.ts:96](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L96)

***

### id

> **id**: `number`

Defined in: [src/types/events.types.ts:94](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L94)

***

### isActive

> **isActive**: `boolean`

Defined in: [src/types/events.types.ts:102](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L102)

***

### isAura?

> `optional` **isAura**: `boolean`

Defined in: [src/types/events.types.ts:111](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L111)

***

### isEnchantment?

> `optional` **isEnchantment**: `boolean`

Defined in: [src/types/events.types.ts:112](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L112)

***

### isOneTurnEffect?

> `optional` **isOneTurnEffect**: `boolean`

Defined in: [src/types/events.types.ts:113](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L113)

***

### isQuest?

> `optional` **isQuest**: `boolean`

Defined in: [src/types/events.types.ts:101](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L101)

***

### isSecret?

> `optional` **isSecret**: `boolean`

Defined in: [src/types/events.types.ts:100](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L100)

***

### priority

> **priority**: `number`

Defined in: [src/types/events.types.ts:99](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L99)

***

### source

> **source**: `number`

Defined in: [src/types/events.types.ts:95](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L95)

***

### timing

> **timing**: `"BEFORE"` \| `"AFTER"` \| `"INSTEAD_OF"`

Defined in: [src/types/events.types.ts:105](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L105)

***

### zone

> **zone**: [`ZoneType`](../../base.types/type-aliases/ZoneType.md)

Defined in: [src/types/events.types.ts:108](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L108)

## Methods

### canTrigger()?

> `optional` **canTrigger**(`event`, `gameState`): `boolean`

Defined in: [src/types/events.types.ts:116](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L116)

#### Parameters

##### event

[`IEvent`](IEvent.md)

##### gameState

[`IGameState`](../../game.types/interfaces/IGameState.md)

#### Returns

`boolean`

***

### trigger()

> **trigger**(`event`, `gameState`): `void`

Defined in: [src/types/events.types.ts:117](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L117)

#### Parameters

##### event

[`IEvent`](IEvent.md)

##### gameState

[`IGameState`](../../game.types/interfaces/IGameState.md)

#### Returns

`void`
