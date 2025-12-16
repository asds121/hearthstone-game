[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / GamePhase

# Class: GamePhase

Defined in: [src/domain/sequence/phase.ts:11](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L11)

阶段实现

## Implements

- [`IPhase`](../../types/events.types/interfaces/IPhase.md)

## Constructors

### Constructor

> **new GamePhase**(`type`, `sequence`): `GamePhase`

Defined in: [src/domain/sequence/phase.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L17)

#### Parameters

##### type

[`PhaseType`](../../types/events.types/type-aliases/PhaseType.md)

##### sequence

[`ISequence`](../../types/events.types/interfaces/ISequence.md)

#### Returns

`GamePhase`

## Properties

### events

> **events**: [`IEvent`](../../types/events.types/interfaces/IEvent.md)[]

Defined in: [src/domain/sequence/phase.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L14)

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`events`](../../types/events.types/interfaces/IPhase.md#events)

***

### sequence

> **sequence**: [`ISequence`](../../types/events.types/interfaces/ISequence.md)

Defined in: [src/domain/sequence/phase.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L13)

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`sequence`](../../types/events.types/interfaces/IPhase.md#sequence)

***

### triggers

> **triggers**: [`ITrigger`](../../types/events.types/interfaces/ITrigger.md)[]

Defined in: [src/domain/sequence/phase.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L15)

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`triggers`](../../types/events.types/interfaces/IPhase.md#triggers)

***

### type

> **type**: [`PhaseType`](../../types/events.types/type-aliases/PhaseType.md)

Defined in: [src/domain/sequence/phase.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L12)

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`type`](../../types/events.types/interfaces/IPhase.md#type)

## Methods

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [src/domain/sequence/phase.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L29)

#### Parameters

##### trigger

[`ITrigger`](../../types/events.types/interfaces/ITrigger.md)

#### Returns

`void`

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`addTrigger`](../../types/events.types/interfaces/IPhase.md#addtrigger)

***

### execute()

> **execute**(): `void`

Defined in: [src/domain/sequence/phase.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L24)

#### Returns

`void`

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`execute`](../../types/events.types/interfaces/IPhase.md#execute)

***

### removeTrigger()

> **removeTrigger**(`trigger`): `void`

Defined in: [src/domain/sequence/phase.ts:34](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/sequence/phase.ts#L34)

#### Parameters

##### trigger

[`ITrigger`](../../types/events.types/interfaces/ITrigger.md)

#### Returns

`void`

#### Implementation of

[`IPhase`](../../types/events.types/interfaces/IPhase.md).[`removeTrigger`](../../types/events.types/interfaces/IPhase.md#removetrigger)
