[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/game.types](../README.md) / IGameState

# Interface: IGameState

Defined in: [src/types/game.types.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L12)

游戏状态接口

## Properties

### currentSequence?

> `optional` **currentSequence**: [`ISequence`](../../events.types/interfaces/ISequence.md)

Defined in: [src/types/game.types.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L19)

***

### deathRecords

> **deathRecords**: [`IDeathRecord`](IDeathRecord.md)[]

Defined in: [src/types/game.types.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L20)

***

### entities

> **entities**: `Map`\<`number`, [`IEntity`](../../entities.types/interfaces/IEntity.md)\>

Defined in: [src/types/game.types.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L15)

***

### gameEntity

> **gameEntity**: [`IGameEntity`](../../entities.types/interfaces/IGameEntity.md)

Defined in: [src/types/game.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L13)

***

### metadata

> **metadata**: `object`

Defined in: [src/types/game.types.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L23)

#### timeLimit

> **timeLimit**: `number`

#### timestamp

> **timestamp**: `number`

#### turnLimit

> **turnLimit**: `number`

#### version

> **version**: `string`

***

### players

> **players**: `Map`\<[`PlayerID`](../../base.types/type-aliases/PlayerID.md), [`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md)\>

Defined in: [src/types/game.types.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L14)

***

### sequences

> **sequences**: [`ISequence`](../../events.types/interfaces/ISequence.md)[]

Defined in: [src/types/game.types.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L18)

***

### triggers

> **triggers**: [`ITrigger`](../../events.types/interfaces/ITrigger.md)[]

Defined in: [src/types/game.types.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L17)

***

### zones

> **zones**: `Map`\<[`ZoneType`](../../base.types/type-aliases/ZoneType.md), [`IZone`](../../interfaces/IZone.md)\>

Defined in: [src/types/game.types.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L16)

## Methods

### addDeathRecord()

> **addDeathRecord**(`record`): `void`

Defined in: [src/types/game.types.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L44)

#### Parameters

##### record

[`IDeathRecord`](IDeathRecord.md)

#### Returns

`void`

***

### addEntity()

> **addEntity**(`entity`): `void`

Defined in: [src/types/game.types.ts:31](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L31)

#### Parameters

##### entity

[`IEntity`](../../entities.types/interfaces/IEntity.md)

#### Returns

`void`

***

### addPlayer()

> **addPlayer**(`player`): `void`

Defined in: [src/types/game.types.ts:35](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L35)

#### Parameters

##### player

[`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md)

#### Returns

`void`

***

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [src/types/game.types.ts:40](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L40)

#### Parameters

##### trigger

[`ITrigger`](../../events.types/interfaces/ITrigger.md)

#### Returns

`void`

***

### getCurrentPlayer()

> **getCurrentPlayer**(): [`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/types/game.types.ts:37](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L37)

#### Returns

[`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md) \| `null`

***

### getDeathRecords()

> **getDeathRecords**(`controller?`): [`IDeathRecord`](IDeathRecord.md)[]

Defined in: [src/types/game.types.ts:45](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L45)

#### Parameters

##### controller?

[`PlayerID`](../../base.types/type-aliases/PlayerID.md)

#### Returns

[`IDeathRecord`](IDeathRecord.md)[]

***

### getEntity()

> **getEntity**(`entityId`): [`IEntity`](../../entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/types/game.types.ts:33](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L33)

#### Parameters

##### entityId

`number`

#### Returns

[`IEntity`](../../entities.types/interfaces/IEntity.md) \| `null`

***

### getNextEntityId()

> **getNextEntityId**(): `number`

Defined in: [src/types/game.types.ts:48](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L48)

#### Returns

`number`

***

### getOpponentPlayer()

> **getOpponentPlayer**(): [`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/types/game.types.ts:38](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L38)

#### Returns

[`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md) \| `null`

***

### getPlayer()

> **getPlayer**(`playerId`): [`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/types/game.types.ts:36](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L36)

#### Parameters

##### playerId

[`PlayerID`](../../base.types/type-aliases/PlayerID.md)

#### Returns

[`IPlayerEntity`](../../entities.types/interfaces/IPlayerEntity.md) \| `null`

***

### getTriggers()

> **getTriggers**(`eventType`): [`ITrigger`](../../events.types/interfaces/ITrigger.md)[]

Defined in: [src/types/game.types.ts:42](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L42)

#### Parameters

##### eventType

[`EventType`](../../events.types/type-aliases/EventType.md)

#### Returns

[`ITrigger`](../../events.types/interfaces/ITrigger.md)[]

***

### removeEntity()

> **removeEntity**(`entityId`): `boolean`

Defined in: [src/types/game.types.ts:32](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L32)

#### Parameters

##### entityId

`number`

#### Returns

`boolean`

***

### removeTrigger()

> **removeTrigger**(`triggerId`): `boolean`

Defined in: [src/types/game.types.ts:41](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/game.types.ts#L41)

#### Parameters

##### triggerId

`number`

#### Returns

`boolean`
