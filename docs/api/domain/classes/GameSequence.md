[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / GameSequence

# Class: GameSequence

Defined in: [src/domain/sequence/sequence.ts:11](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L11)

序列实现

## Implements

- [`ISequence`](../../types/events.types/interfaces/ISequence.md)

## Constructors

### Constructor

> **new GameSequence**(`type`, `player`, `isNested`, `isDegenerate`): `GameSequence`

Defined in: [src/domain/sequence/sequence.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L21)

#### Parameters

##### type

[`SequenceType`](../../types/events.types/type-aliases/SequenceType.md)

##### player

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### isNested

`boolean` = `false`

##### isDegenerate

`boolean` = `false`

#### Returns

`GameSequence`

## Properties

### currentPhase

> **currentPhase**: `number`

Defined in: [src/domain/sequence/sequence.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L16)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`currentPhase`](../../types/events.types/interfaces/ISequence.md#currentphase)

***

### events

> **events**: [`IEvent`](../../types/events.types/interfaces/IEvent.md)[]

Defined in: [src/domain/sequence/sequence.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L19)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`events`](../../types/events.types/interfaces/ISequence.md#events)

***

### id

> **id**: `string`

Defined in: [src/domain/sequence/sequence.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L12)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`id`](../../types/events.types/interfaces/ISequence.md#id)

***

### isDegenerate

> **isDegenerate**: `boolean`

Defined in: [src/domain/sequence/sequence.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L18)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`isDegenerate`](../../types/events.types/interfaces/ISequence.md#isdegenerate)

***

### isNested

> **isNested**: `boolean`

Defined in: [src/domain/sequence/sequence.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L17)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`isNested`](../../types/events.types/interfaces/ISequence.md#isnested)

***

### phases

> **phases**: [`IPhase`](../../types/events.types/interfaces/IPhase.md)[]

Defined in: [src/domain/sequence/sequence.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L15)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`phases`](../../types/events.types/interfaces/ISequence.md#phases)

***

### player

> **player**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/sequence/sequence.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L14)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`player`](../../types/events.types/interfaces/ISequence.md#player)

***

### type

> **type**: [`SequenceType`](../../types/events.types/type-aliases/SequenceType.md)

Defined in: [src/domain/sequence/sequence.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L13)

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`type`](../../types/events.types/interfaces/ISequence.md#type)

## Accessors

### currentPhaseObj

#### Get Signature

> **get** **currentPhaseObj**(): [`IPhase`](../../types/events.types/interfaces/IPhase.md) \| `null`

Defined in: [src/domain/sequence/sequence.ts:61](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L61)

##### Returns

[`IPhase`](../../types/events.types/interfaces/IPhase.md) \| `null`

## Methods

### addEvent()

> **addEvent**(`event`): `void`

Defined in: [src/domain/sequence/sequence.ts:53](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L53)

#### Parameters

##### event

[`IEvent`](../../types/events.types/interfaces/IEvent.md)

#### Returns

`void`

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`addEvent`](../../types/events.types/interfaces/ISequence.md#addevent)

***

### addPhase()

> **addPhase**(`phase`): `void`

Defined in: [src/domain/sequence/sequence.ts:57](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L57)

#### Parameters

##### phase

[`IPhase`](../../types/events.types/interfaces/IPhase.md)

#### Returns

`void`

***

### end()

> **end**(): `void`

Defined in: [src/domain/sequence/sequence.ts:49](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L49)

#### Returns

`void`

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`end`](../../types/events.types/interfaces/ISequence.md#end)

***

### nextPhase()

> **nextPhase**(): `boolean`

Defined in: [src/domain/sequence/sequence.ts:41](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L41)

#### Returns

`boolean`

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`nextPhase`](../../types/events.types/interfaces/ISequence.md#nextphase)

***

### start()

> **start**(): `void`

Defined in: [src/domain/sequence/sequence.ts:37](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/sequence.ts#L37)

#### Returns

`void`

#### Implementation of

[`ISequence`](../../types/events.types/interfaces/ISequence.md).[`start`](../../types/events.types/interfaces/ISequence.md#start)
