[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / HeroEntity

# Class: HeroEntity

Defined in: [src/domain/entities/hero.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L12)

英雄实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md)

## Constructors

### Constructor

> **new HeroEntity**(`id`, `cardId`, `controller`): `HeroEntity`

Defined in: [src/domain/entities/hero.entity.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L22)

#### Parameters

##### id

`number`

##### cardId

`string`

##### controller

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

`HeroEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### armor

> **armor**: `number`

Defined in: [src/domain/entities/hero.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L16)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`armor`](../../types/entities.types/interfaces/IHeroEntity.md#armor)

***

### attack

> **attack**: `number`

Defined in: [src/domain/entities/hero.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L17)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`attack`](../../types/entities.types/interfaces/IHeroEntity.md#attack)

***

### canAttack

> **canAttack**: `boolean`

Defined in: [src/domain/entities/hero.entity.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L20)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`canAttack`](../../types/entities.types/interfaces/IHeroEntity.md#canattack)

***

### cardId

> **cardId**: `string`

Defined in: [src/domain/entities/base.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L14)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`cardId`](../../types/entities.types/interfaces/IHeroEntity.md#cardid)

#### Inherited from

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`controller`](../../types/entities.types/interfaces/IHeroEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`creator`](../../types/entities.types/interfaces/IHeroEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### damage

> **damage**: `number`

Defined in: [src/domain/entities/hero.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L15)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`damage`](../../types/entities.types/interfaces/IHeroEntity.md#damage)

***

### hasAttackedThisTurn

> **hasAttackedThisTurn**: `boolean`

Defined in: [src/domain/entities/hero.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L19)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`hasAttackedThisTurn`](../../types/entities.types/interfaces/IHeroEntity.md#hasattackedthisturn)

***

### health

> **health**: `number`

Defined in: [src/domain/entities/hero.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L13)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`health`](../../types/entities.types/interfaces/IHeroEntity.md#health)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`id`](../../types/entities.types/interfaces/IHeroEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### isFrozen

> **isFrozen**: `boolean`

Defined in: [src/domain/entities/hero.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L18)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`isFrozen`](../../types/entities.types/interfaces/IHeroEntity.md#isfrozen)

***

### maxHealth

> **maxHealth**: `number`

Defined in: [src/domain/entities/hero.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L14)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`maxHealth`](../../types/entities.types/interfaces/IHeroEntity.md#maxhealth)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`tags`](../../types/entities.types/interfaces/IHeroEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`zone`](../../types/entities.types/interfaces/IHeroEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IHeroEntity.md#zoneposition)

#### Inherited from

[`Entity`](Entity.md).[`zonePosition`](Entity.md#zoneposition)

## Accessors

### currentHealth

#### Get Signature

> **get** **currentHealth**(): `number`

Defined in: [src/domain/entities/hero.entity.ts:34](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L34)

##### Returns

`number`

#### Implementation of

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`currentHealth`](../../types/entities.types/interfaces/IHeroEntity.md#currenthealth)

***

### effectiveAttack

#### Get Signature

> **get** **effectiveAttack**(): `number`

Defined in: [src/domain/entities/hero.entity.ts:42](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L42)

##### Returns

`number`

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

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`getTag`](../../types/entities.types/interfaces/IHeroEntity.md#gettag)

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

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`hasTag`](../../types/entities.types/interfaces/IHeroEntity.md#hastag)

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

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`removeTag`](../../types/entities.types/interfaces/IHeroEntity.md#removetag)

#### Inherited from

[`Entity`](Entity.md).[`removeTag`](Entity.md#removetag)

***

### setCurrentHealth()

> **setCurrentHealth**(`value`): `void`

Defined in: [src/domain/entities/hero.entity.ts:38](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero.entity.ts#L38)

#### Parameters

##### value

`number`

#### Returns

`void`

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

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md).[`setTag`](../../types/entities.types/interfaces/IHeroEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
