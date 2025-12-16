[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / Entity

# Abstract Class: Entity

Defined in: [src/domain/entities/base.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L12)

基础实体实现

## Extended by

- [`GameEntity`](GameEntity.md)
- [`PlayerEntity`](PlayerEntity.md)
- [`HeroEntity`](HeroEntity.md)
- [`HeroPowerEntity`](HeroPowerEntity.md)
- [`MinionEntity`](MinionEntity.md)
- [`SpellEntity`](SpellEntity.md)
- [`WeaponEntity`](WeaponEntity.md)
- [`StateEntity`](StateEntity.md)

## Implements

- [`IEntity`](../../types/entities.types/interfaces/IEntity.md)

## Constructors

### Constructor

> **new Entity**(`id`, `cardId`, `controller`, `creator`, `zone`): `Entity`

Defined in: [src/domain/entities/base.entity.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L21)

#### Parameters

##### id

`number`

##### cardId

`string`

##### controller

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### creator

`number` = `0`

##### zone

[`ZoneType`](../../types/base.types/type-aliases/ZoneType.md) = `'PLAY'`

#### Returns

`Entity`

## Properties

### cardId

> **cardId**: `string`

Defined in: [src/domain/entities/base.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L14)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`cardId`](../../types/entities.types/interfaces/IEntity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`controller`](../../types/entities.types/interfaces/IEntity.md#controller)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`creator`](../../types/entities.types/interfaces/IEntity.md#creator)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`id`](../../types/entities.types/interfaces/IEntity.md#id)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`tags`](../../types/entities.types/interfaces/IEntity.md#tags)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`zone`](../../types/entities.types/interfaces/IEntity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IEntity.md#zoneposition)

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

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`getTag`](../../types/entities.types/interfaces/IEntity.md#gettag)

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

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`hasTag`](../../types/entities.types/interfaces/IEntity.md#hastag)

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

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`removeTag`](../../types/entities.types/interfaces/IEntity.md#removetag)

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

[`IEntity`](../../types/entities.types/interfaces/IEntity.md).[`setTag`](../../types/entities.types/interfaces/IEntity.md#settag)
