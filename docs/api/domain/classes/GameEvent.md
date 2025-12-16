[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / GameEvent

# Class: GameEvent

Defined in: [src/domain/events/event.ts:11](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L11)

事件实现

## Implements

- [`IEvent`](../../types/events.types/interfaces/IEvent.md)

## Constructors

### Constructor

> **new GameEvent**(`type`, `source`, `target?`, `value?`, `data?`, `sequence?`): `GameEvent`

Defined in: [src/domain/events/event.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L20)

#### Parameters

##### type

[`EventType`](../../types/events.types/type-aliases/EventType.md)

##### source

`number`

##### target?

`number`

##### value?

`number`

##### data?

`any`

##### sequence?

`number` = `0`

#### Returns

`GameEvent`

## Properties

### data?

> `optional` **data**: `any`

Defined in: [src/domain/events/event.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L16)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`data`](../../types/events.types/interfaces/IEvent.md#data)

***

### sequence

> **sequence**: `number` = `0`

Defined in: [src/domain/events/event.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L18)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`sequence`](../../types/events.types/interfaces/IEvent.md#sequence)

***

### source

> **source**: `number`

Defined in: [src/domain/events/event.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L13)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`source`](../../types/events.types/interfaces/IEvent.md#source)

***

### target?

> `optional` **target**: `number`

Defined in: [src/domain/events/event.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L14)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`target`](../../types/events.types/interfaces/IEvent.md#target)

***

### timestamp

> **timestamp**: `number`

Defined in: [src/domain/events/event.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L17)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`timestamp`](../../types/events.types/interfaces/IEvent.md#timestamp)

***

### type

> **type**: [`EventType`](../../types/events.types/type-aliases/EventType.md)

Defined in: [src/domain/events/event.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L12)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`type`](../../types/events.types/interfaces/IEvent.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: [src/domain/events/event.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/events/event.ts#L15)

#### Implementation of

[`IEvent`](../../types/events.types/interfaces/IEvent.md).[`value`](../../types/events.types/interfaces/IEvent.md#value)
