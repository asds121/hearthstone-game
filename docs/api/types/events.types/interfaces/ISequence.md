[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/events.types](../README.md) / ISequence

# Interface: ISequence

Defined in: [src/types/events.types.ts:136](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L136)

序列接口

## Properties

### currentPhase

> **currentPhase**: `number`

Defined in: [src/types/events.types.ts:141](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L141)

***

### events

> **events**: [`IEvent`](IEvent.md)[]

Defined in: [src/types/events.types.ts:144](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L144)

***

### id

> **id**: `string`

Defined in: [src/types/events.types.ts:137](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L137)

***

### isDegenerate

> **isDegenerate**: `boolean`

Defined in: [src/types/events.types.ts:143](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L143)

***

### isNested

> **isNested**: `boolean`

Defined in: [src/types/events.types.ts:142](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L142)

***

### phases

> **phases**: [`IPhase`](IPhase.md)[]

Defined in: [src/types/events.types.ts:140](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L140)

***

### player

> **player**: [`PlayerID`](../../base.types/type-aliases/PlayerID.md)

Defined in: [src/types/events.types.ts:139](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L139)

***

### type

> **type**: [`SequenceType`](../type-aliases/SequenceType.md)

Defined in: [src/types/events.types.ts:138](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L138)

## Methods

### addEvent()

> **addEvent**(`event`): `void`

Defined in: [src/types/events.types.ts:149](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L149)

#### Parameters

##### event

[`IEvent`](IEvent.md)

#### Returns

`void`

***

### end()

> **end**(): `void`

Defined in: [src/types/events.types.ts:148](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L148)

#### Returns

`void`

***

### nextPhase()

> **nextPhase**(): `boolean`

Defined in: [src/types/events.types.ts:147](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L147)

#### Returns

`boolean`

***

### start()

> **start**(): `void`

Defined in: [src/types/events.types.ts:146](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/events.types.ts#L146)

#### Returns

`void`
