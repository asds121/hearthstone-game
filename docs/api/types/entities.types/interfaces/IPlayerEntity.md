[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/entities.types](../README.md) / IPlayerEntity

# Interface: IPlayerEntity

Defined in: [src/types/entities.types.ts:45](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L45)

玩家实体
对应规则集中的 Player 实体

## Extends

- [`IEntity`](IEntity.md)

## Properties

### cardId

> **cardId**: `"PLAYER"`

Defined in: [src/types/entities.types.ts:46](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L46)

#### Overrides

[`IEntity`](IEntity.md).[`cardId`](IEntity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../base.types/type-aliases/PlayerID.md)

Defined in: [src/types/entities.types.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L17)

#### Inherited from

[`IEntity`](IEntity.md).[`controller`](IEntity.md#controller)

***

### creator

> **creator**: `number`

Defined in: [src/types/entities.types.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L18)

#### Inherited from

[`IEntity`](IEntity.md).[`creator`](IEntity.md#creator)

***

### CURRENT\_PLAYER

> **CURRENT\_PLAYER**: `0` \| `1`

Defined in: [src/types/entities.types.ts:51](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L51)

***

### currentMana

> **currentMana**: `number`

Defined in: [src/types/entities.types.ts:62](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L62)

***

### HERO\_ENTITY

> **HERO\_ENTITY**: `number`

Defined in: [src/types/entities.types.ts:47](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L47)

***

### HERO\_POWER\_ENTITY

> **HERO\_POWER\_ENTITY**: `number`

Defined in: [src/types/entities.types.ts:48](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L48)

***

### id

> **id**: `number`

Defined in: [src/types/entities.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L13)

#### Inherited from

[`IEntity`](IEntity.md).[`id`](IEntity.md#id)

***

### MAXRESOURCES

> **MAXRESOURCES**: `number`

Defined in: [src/types/entities.types.ts:55](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L55)

***

### NUM\_ATTACKS\_THIS\_TURN

> **NUM\_ATTACKS\_THIS\_TURN**: `number`

Defined in: [src/types/entities.types.ts:65](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L65)

***

### NUM\_CARDS\_PLAYED\_THIS\_TURN

> **NUM\_CARDS\_PLAYED\_THIS\_TURN**: `number`

Defined in: [src/types/entities.types.ts:49](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L49)

***

### NUM\_HERO\_ATTACKS\_THIS\_TURN

> **NUM\_HERO\_ATTACKS\_THIS\_TURN**: `number`

Defined in: [src/types/entities.types.ts:66](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L66)

***

### NUM\_MINIONS\_PLAYED\_THIS\_TURN

> **NUM\_MINIONS\_PLAYED\_THIS\_TURN**: `number`

Defined in: [src/types/entities.types.ts:50](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L50)

***

### OVERLOAD\_LOCKED

> **OVERLOAD\_LOCKED**: `number`

Defined in: [src/types/entities.types.ts:59](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L59)

***

### OVERLOAD\_OWED

> **OVERLOAD\_OWED**: `number`

Defined in: [src/types/entities.types.ts:58](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L58)

***

### PLAYSTATE

> **PLAYSTATE**: [`PlayState`](../../base.types/type-aliases/PlayState.md)

Defined in: [src/types/entities.types.ts:52](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L52)

***

### RESOURCES\_USED

> **RESOURCES\_USED**: `number`

Defined in: [src/types/entities.types.ts:56](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L56)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/types/entities.types.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L19)

#### Inherited from

[`IEntity`](IEntity.md).[`tags`](IEntity.md#tags)

***

### TEMP\_RESOURCES

> **TEMP\_RESOURCES**: `number`

Defined in: [src/types/entities.types.ts:57](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L57)

***

### zone

> **zone**: [`ZoneType`](../../base.types/type-aliases/ZoneType.md)

Defined in: [src/types/entities.types.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L15)

#### Inherited from

[`IEntity`](IEntity.md).[`zone`](IEntity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/types/entities.types.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L16)

#### Inherited from

[`IEntity`](IEntity.md).[`zonePosition`](IEntity.md#zoneposition)

## Methods

### getTag()

> **getTag**(`key`): `any`

Defined in: [src/types/entities.types.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L22)

#### Parameters

##### key

`string`

#### Returns

`any`

#### Inherited from

[`IEntity`](IEntity.md).[`getTag`](IEntity.md#gettag)

***

### hasTag()

> **hasTag**(`key`): `boolean`

Defined in: [src/types/entities.types.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L24)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Inherited from

[`IEntity`](IEntity.md).[`hasTag`](IEntity.md#hastag)

***

### removeTag()

> **removeTag**(`key`): `boolean`

Defined in: [src/types/entities.types.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L25)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Inherited from

[`IEntity`](IEntity.md).[`removeTag`](IEntity.md#removetag)

***

### setTag()

> **setTag**(`key`, `value`): `void`

Defined in: [src/types/entities.types.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L23)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

#### Inherited from

[`IEntity`](IEntity.md).[`setTag`](IEntity.md#settag)
