[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / Trigger

# Class: Trigger

Defined in: [src/domain/events/trigger.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L13)

扳机实现

## Constructors

### Constructor

> **new Trigger**(`id`, `source`, `eventType`, `effect`, `priority`, `timing`, `zone`, `condition?`): `Trigger`

Defined in: [src/domain/events/trigger.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L29)

#### Parameters

##### id

`number`

##### source

`number`

##### eventType

[`EventType`](../../types/events.types/type-aliases/EventType.md)

##### effect

(`event`, `gameState`) => `void`

##### priority

`number` = `TriggerPriority.NORMAL`

##### timing

`"BEFORE"` | `"AFTER"` | `"INSTEAD_OF"`

##### zone

[`ZoneType`](../../types/base.types/type-aliases/ZoneType.md) = `'PLAY'`

##### condition?

(`event`, `gameState`) => `boolean`

#### Returns

`Trigger`

## Properties

### condition

> **condition**: (`event`, `gameState`) => `boolean` \| `undefined`

Defined in: [src/domain/events/trigger.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L17)

***

### effect()

> **effect**: (`event`, `gameState`) => `void`

Defined in: [src/domain/events/trigger.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L18)

#### Parameters

##### event

[`IEvent`](../../types/events.types/interfaces/IEvent.md)

##### gameState

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

#### Returns

`void`

***

### eventType

> **eventType**: [`EventType`](../../types/events.types/type-aliases/EventType.md)

Defined in: [src/domain/events/trigger.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L16)

***

### id

> **id**: `number`

Defined in: [src/domain/events/trigger.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L14)

***

### isActive

> **isActive**: `boolean`

Defined in: [src/domain/events/trigger.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L22)

***

### isAura?

> `optional` **isAura**: `boolean`

Defined in: [src/domain/events/trigger.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L25)

***

### isEnchantment?

> `optional` **isEnchantment**: `boolean`

Defined in: [src/domain/events/trigger.ts:26](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L26)

***

### isOneTurnEffect?

> `optional` **isOneTurnEffect**: `boolean`

Defined in: [src/domain/events/trigger.ts:27](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L27)

***

### isQuest?

> `optional` **isQuest**: `boolean`

Defined in: [src/domain/events/trigger.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L21)

***

### isSecret?

> `optional` **isSecret**: `boolean`

Defined in: [src/domain/events/trigger.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L20)

***

### priority

> **priority**: `number`

Defined in: [src/domain/events/trigger.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L19)

***

### source

> **source**: `number`

Defined in: [src/domain/events/trigger.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L15)

***

### timing

> **timing**: `"BEFORE"` \| `"AFTER"` \| `"INSTEAD_OF"`

Defined in: [src/domain/events/trigger.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L23)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/events/trigger.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L24)

## Methods

### canTrigger()

> **canTrigger**(`event`, `gameState`): `boolean`

Defined in: [src/domain/events/trigger.ts:50](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L50)

#### Parameters

##### event

[`IEvent`](../../types/events.types/interfaces/IEvent.md)

##### gameState

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

#### Returns

`boolean`

***

### trigger()

> **trigger**(`event`, `gameState`): `void`

Defined in: [src/domain/events/trigger.ts:57](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/trigger.ts#L57)

#### Parameters

##### event

[`IEvent`](../../types/events.types/interfaces/IEvent.md)

##### gameState

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

#### Returns

`void`
