[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/events.types](../README.md) / IPhase

# Interface: IPhase

Defined in: [src/types/events.types.ts:181](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L181)

阶段接口

## Properties

### events

> **events**: [`IEvent`](IEvent.md)[]

Defined in: [src/types/events.types.ts:184](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L184)

***

### sequence

> **sequence**: [`ISequence`](ISequence.md)

Defined in: [src/types/events.types.ts:183](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L183)

***

### triggers

> **triggers**: [`ITrigger`](ITrigger.md)[]

Defined in: [src/types/events.types.ts:185](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L185)

***

### type

> **type**: [`PhaseType`](../type-aliases/PhaseType.md)

Defined in: [src/types/events.types.ts:182](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L182)

## Methods

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [src/types/events.types.ts:188](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L188)

#### Parameters

##### trigger

[`ITrigger`](ITrigger.md)

#### Returns

`void`

***

### execute()

> **execute**(): `void`

Defined in: [src/types/events.types.ts:187](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L187)

#### Returns

`void`

***

### removeTrigger()

> **removeTrigger**(`trigger`): `void`

Defined in: [src/types/events.types.ts:189](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L189)

#### Parameters

##### trigger

[`ITrigger`](ITrigger.md)

#### Returns

`void`
