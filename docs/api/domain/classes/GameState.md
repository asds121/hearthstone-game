[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / GameState

# Class: GameState

Defined in: [src/domain/game-state.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L15)

游戏状态实现

## Implements

- [`IGameState`](../../types/game.types/interfaces/IGameState.md)

## Constructors

### Constructor

> **new GameState**(`config`): `GameState`

Defined in: [src/domain/game-state.ts:31](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L31)

#### Parameters

##### config

[`GameConfig`](../../types/game.types/interfaces/GameConfig.md) = `DEFAULT_GAME_CONFIG`

#### Returns

`GameState`

## Properties

### currentSequence?

> `optional` **currentSequence**: [`ISequence`](../../types/events.types/interfaces/ISequence.md)

Defined in: [src/domain/game-state.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L22)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`currentSequence`](../../types/game.types/interfaces/IGameState.md#currentsequence)

***

### deathRecords

> **deathRecords**: [`IDeathRecord`](../../types/game.types/interfaces/IDeathRecord.md)[]

Defined in: [src/domain/game-state.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L23)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`deathRecords`](../../types/game.types/interfaces/IGameState.md#deathrecords)

***

### entities

> **entities**: `Map`\<`number`, [`IEntity`](../../types/entities.types/interfaces/IEntity.md)\>

Defined in: [src/domain/game-state.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L18)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`entities`](../../types/game.types/interfaces/IGameState.md#entities)

***

### gameEntity

> **gameEntity**: [`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md)

Defined in: [src/domain/game-state.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L16)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`gameEntity`](../../types/game.types/interfaces/IGameState.md#gameentity)

***

### metadata

> **metadata**: `object`

Defined in: [src/domain/game-state.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L24)

#### timeLimit

> **timeLimit**: `number`

#### timestamp

> **timestamp**: `number`

#### turnLimit

> **turnLimit**: `number`

#### version

> **version**: `string`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`metadata`](../../types/game.types/interfaces/IGameState.md#metadata)

***

### players

> **players**: `Map`\<[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md), [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md)\>

Defined in: [src/domain/game-state.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L17)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`players`](../../types/game.types/interfaces/IGameState.md#players)

***

### sequences

> **sequences**: [`ISequence`](../../types/events.types/interfaces/ISequence.md)[]

Defined in: [src/domain/game-state.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L21)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`sequences`](../../types/game.types/interfaces/IGameState.md#sequences)

***

### triggers

> **triggers**: [`ITrigger`](../../types/events.types/interfaces/ITrigger.md)[]

Defined in: [src/domain/game-state.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L20)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`triggers`](../../types/game.types/interfaces/IGameState.md#triggers)

***

### zones

> **zones**: `Map`\<[`ZoneType`](../../types/base.types/type-aliases/ZoneType.md), [`IZone`](../../types/interfaces/IZone.md)\>

Defined in: [src/domain/game-state.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L19)

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`zones`](../../types/game.types/interfaces/IGameState.md#zones)

## Methods

### addDeathRecord()

> **addDeathRecord**(`record`): `void`

Defined in: [src/domain/game-state.ts:110](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L110)

#### Parameters

##### record

[`IDeathRecord`](../../types/game.types/interfaces/IDeathRecord.md)

#### Returns

`void`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`addDeathRecord`](../../types/game.types/interfaces/IGameState.md#adddeathrecord)

***

### addEntity()

> **addEntity**(`entity`): `void`

Defined in: [src/domain/game-state.ts:60](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L60)

#### Parameters

##### entity

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)

#### Returns

`void`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`addEntity`](../../types/game.types/interfaces/IGameState.md#addentity)

***

### addPlayer()

> **addPlayer**(`player`): `void`

Defined in: [src/domain/game-state.ts:72](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L72)

#### Parameters

##### player

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md)

#### Returns

`void`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`addPlayer`](../../types/game.types/interfaces/IGameState.md#addplayer)

***

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [src/domain/game-state.ts:92](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L92)

#### Parameters

##### trigger

[`ITrigger`](../../types/events.types/interfaces/ITrigger.md)

#### Returns

`void`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`addTrigger`](../../types/game.types/interfaces/IGameState.md#addtrigger)

***

### getCurrentPlayer()

> **getCurrentPlayer**(): [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/domain/game-state.ts:81](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L81)

#### Returns

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getCurrentPlayer`](../../types/game.types/interfaces/IGameState.md#getcurrentplayer)

***

### getDeathRecords()

> **getDeathRecords**(`controller?`): [`IDeathRecord`](../../types/game.types/interfaces/IDeathRecord.md)[]

Defined in: [src/domain/game-state.ts:114](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L114)

#### Parameters

##### controller?

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`IDeathRecord`](../../types/game.types/interfaces/IDeathRecord.md)[]

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getDeathRecords`](../../types/game.types/interfaces/IGameState.md#getdeathrecords)

***

### getEntity()

> **getEntity**(`entityId`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/game-state.ts:68](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L68)

#### Parameters

##### entityId

`number`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getEntity`](../../types/game.types/interfaces/IGameState.md#getentity)

***

### getNextEntityId()

> **getNextEntityId**(): `number`

Defined in: [src/domain/game-state.ts:125](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L125)

获取下一个实体ID

#### Returns

`number`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getNextEntityId`](../../types/game.types/interfaces/IGameState.md#getnextentityid)

***

### getOpponentPlayer()

> **getOpponentPlayer**(): [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/domain/game-state.ts:86](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L86)

#### Returns

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getOpponentPlayer`](../../types/game.types/interfaces/IGameState.md#getopponentplayer)

***

### getPlayer()

> **getPlayer**(`playerId`): [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

Defined in: [src/domain/game-state.ts:77](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L77)

#### Parameters

##### playerId

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md) \| `null`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getPlayer`](../../types/game.types/interfaces/IGameState.md#getplayer)

***

### getTriggers()

> **getTriggers**(`eventType`): [`ITrigger`](../../types/events.types/interfaces/ITrigger.md)[]

Defined in: [src/domain/game-state.ts:106](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L106)

#### Parameters

##### eventType

[`EventType`](../../types/events.types/type-aliases/EventType.md)

#### Returns

[`ITrigger`](../../types/events.types/interfaces/ITrigger.md)[]

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`getTriggers`](../../types/game.types/interfaces/IGameState.md#gettriggers)

***

### removeEntity()

> **removeEntity**(`entityId`): `boolean`

Defined in: [src/domain/game-state.ts:64](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L64)

#### Parameters

##### entityId

`number`

#### Returns

`boolean`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`removeEntity`](../../types/game.types/interfaces/IGameState.md#removeentity)

***

### removeTrigger()

> **removeTrigger**(`triggerId`): `boolean`

Defined in: [src/domain/game-state.ts:97](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/game-state.ts#L97)

#### Parameters

##### triggerId

`number`

#### Returns

`boolean`

#### Implementation of

[`IGameState`](../../types/game.types/interfaces/IGameState.md).[`removeTrigger`](../../types/game.types/interfaces/IGameState.md#removetrigger)
