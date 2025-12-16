[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / PlayerEntity

# Class: PlayerEntity

Defined in: [src/domain/entities/player.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L13)

玩家实体
对应规则集中的 Player 实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md)

## Constructors

### Constructor

> **new PlayerEntity**(`id`, `playerId`): `PlayerEntity`

Defined in: [src/domain/entities/player.entity.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L29)

#### Parameters

##### id

`number`

##### playerId

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

`PlayerEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### cardId

> **cardId**: `"PLAYER"`

Defined in: [src/domain/entities/player.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L14)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`cardId`](../../types/entities.types/interfaces/IPlayerEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`controller`](../../types/entities.types/interfaces/IPlayerEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`creator`](../../types/entities.types/interfaces/IPlayerEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### CURRENT\_PLAYER

> **CURRENT\_PLAYER**: `0` \| `1`

Defined in: [src/domain/entities/player.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L19)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`CURRENT_PLAYER`](../../types/entities.types/interfaces/IPlayerEntity.md#current_player)

***

### HERO\_ENTITY

> **HERO\_ENTITY**: `number`

Defined in: [src/domain/entities/player.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L15)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`HERO_ENTITY`](../../types/entities.types/interfaces/IPlayerEntity.md#hero_entity)

***

### HERO\_POWER\_ENTITY

> **HERO\_POWER\_ENTITY**: `number`

Defined in: [src/domain/entities/player.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L16)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`HERO_POWER_ENTITY`](../../types/entities.types/interfaces/IPlayerEntity.md#hero_power_entity)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`id`](../../types/entities.types/interfaces/IPlayerEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### MAXRESOURCES

> **MAXRESOURCES**: `number`

Defined in: [src/domain/entities/player.entity.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L21)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`MAXRESOURCES`](../../types/entities.types/interfaces/IPlayerEntity.md#maxresources)

***

### NUM\_ATTACKS\_THIS\_TURN

> **NUM\_ATTACKS\_THIS\_TURN**: `number`

Defined in: [src/domain/entities/player.entity.ts:26](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L26)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`NUM_ATTACKS_THIS_TURN`](../../types/entities.types/interfaces/IPlayerEntity.md#num_attacks_this_turn)

***

### NUM\_CARDS\_PLAYED\_THIS\_TURN

> **NUM\_CARDS\_PLAYED\_THIS\_TURN**: `number`

Defined in: [src/domain/entities/player.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L17)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`NUM_CARDS_PLAYED_THIS_TURN`](../../types/entities.types/interfaces/IPlayerEntity.md#num_cards_played_this_turn)

***

### NUM\_HERO\_ATTACKS\_THIS\_TURN

> **NUM\_HERO\_ATTACKS\_THIS\_TURN**: `number`

Defined in: [src/domain/entities/player.entity.ts:27](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L27)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`NUM_HERO_ATTACKS_THIS_TURN`](../../types/entities.types/interfaces/IPlayerEntity.md#num_hero_attacks_this_turn)

***

### NUM\_MINIONS\_PLAYED\_THIS\_TURN

> **NUM\_MINIONS\_PLAYED\_THIS\_TURN**: `number`

Defined in: [src/domain/entities/player.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L18)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`NUM_MINIONS_PLAYED_THIS_TURN`](../../types/entities.types/interfaces/IPlayerEntity.md#num_minions_played_this_turn)

***

### OVERLOAD\_LOCKED

> **OVERLOAD\_LOCKED**: `number`

Defined in: [src/domain/entities/player.entity.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L25)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`OVERLOAD_LOCKED`](../../types/entities.types/interfaces/IPlayerEntity.md#overload_locked)

***

### OVERLOAD\_OWED

> **OVERLOAD\_OWED**: `number`

Defined in: [src/domain/entities/player.entity.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L24)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`OVERLOAD_OWED`](../../types/entities.types/interfaces/IPlayerEntity.md#overload_owed)

***

### PLAYSTATE

> **PLAYSTATE**: [`PlayState`](../../types/base.types/type-aliases/PlayState.md)

Defined in: [src/domain/entities/player.entity.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L20)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`PLAYSTATE`](../../types/entities.types/interfaces/IPlayerEntity.md#playstate)

***

### RESOURCES\_USED

> **RESOURCES\_USED**: `number`

Defined in: [src/domain/entities/player.entity.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L22)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`RESOURCES_USED`](../../types/entities.types/interfaces/IPlayerEntity.md#resources_used)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`tags`](../../types/entities.types/interfaces/IPlayerEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### TEMP\_RESOURCES

> **TEMP\_RESOURCES**: `number`

Defined in: [src/domain/entities/player.entity.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L23)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`TEMP_RESOURCES`](../../types/entities.types/interfaces/IPlayerEntity.md#temp_resources)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`zone`](../../types/entities.types/interfaces/IPlayerEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IPlayerEntity.md#zoneposition)

#### Inherited from

[`Entity`](Entity.md).[`zonePosition`](Entity.md#zoneposition)

## Accessors

### currentMana

#### Get Signature

> **get** **currentMana**(): `number`

Defined in: [src/domain/entities/player.entity.ts:47](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L47)

##### Returns

`number`

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`currentMana`](../../types/entities.types/interfaces/IPlayerEntity.md#currentmana)

***

### isLosing

#### Get Signature

> **get** **isLosing**(): `boolean`

Defined in: [src/domain/entities/player.entity.ts:51](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/player.entity.ts#L51)

##### Returns

`boolean`

## Methods

### getTag()

> **getTag**(`key`): `any`

Defined in: [src/domain/entities/base.entity.ts:37](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L37)

#### Parameters

##### key

`string`

#### Returns

`any`

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`getTag`](../../types/entities.types/interfaces/IPlayerEntity.md#gettag)

#### Inherited from

[`Entity`](Entity.md).[`getTag`](Entity.md#gettag)

***

### hasTag()

> **hasTag**(`key`): `boolean`

Defined in: [src/domain/entities/base.entity.ts:45](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L45)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`hasTag`](../../types/entities.types/interfaces/IPlayerEntity.md#hastag)

#### Inherited from

[`Entity`](Entity.md).[`hasTag`](Entity.md#hastag)

***

### removeTag()

> **removeTag**(`key`): `boolean`

Defined in: [src/domain/entities/base.entity.ts:49](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L49)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`removeTag`](../../types/entities.types/interfaces/IPlayerEntity.md#removetag)

#### Inherited from

[`Entity`](Entity.md).[`removeTag`](Entity.md#removetag)

***

### setTag()

> **setTag**(`key`, `value`): `void`

Defined in: [src/domain/entities/base.entity.ts:41](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L41)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

#### Implementation of

[`IPlayerEntity`](../../types/entities.types/interfaces/IPlayerEntity.md).[`setTag`](../../types/entities.types/interfaces/IPlayerEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
