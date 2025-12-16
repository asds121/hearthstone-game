[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / HeroPowerEntity

# Class: HeroPowerEntity

Defined in: [src/domain/entities/hero-power.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero-power.entity.ts#L12)

英雄技能实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md)

## Constructors

### Constructor

> **new HeroPowerEntity**(`id`, `cardId`, `controller`, `cost`): `HeroPowerEntity`

Defined in: [src/domain/entities/hero-power.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero-power.entity.ts#L18)

#### Parameters

##### id

`number`

##### cardId

`string`

##### controller

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### cost

`number` = `2`

#### Returns

`HeroPowerEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### cardId

> **cardId**: `string`

Defined in: [src/domain/entities/hero-power.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero-power.entity.ts#L13)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`cardId`](../../types/entities.types/interfaces/IHeroPowerEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`controller`](../../types/entities.types/interfaces/IHeroPowerEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### cost

> **cost**: `number`

Defined in: [src/domain/entities/hero-power.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero-power.entity.ts#L14)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`cost`](../../types/entities.types/interfaces/IHeroPowerEntity.md#cost)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`creator`](../../types/entities.types/interfaces/IHeroPowerEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`id`](../../types/entities.types/interfaces/IHeroPowerEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### isExhausted

> **isExhausted**: `boolean`

Defined in: [src/domain/entities/hero-power.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero-power.entity.ts#L15)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`isExhausted`](../../types/entities.types/interfaces/IHeroPowerEntity.md#isexhausted)

***

### NUM\_USES\_THIS\_TURN

> **NUM\_USES\_THIS\_TURN**: `number`

Defined in: [src/domain/entities/hero-power.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/hero-power.entity.ts#L16)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`NUM_USES_THIS_TURN`](../../types/entities.types/interfaces/IHeroPowerEntity.md#num_uses_this_turn)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`tags`](../../types/entities.types/interfaces/IHeroPowerEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`zone`](../../types/entities.types/interfaces/IHeroPowerEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IHeroPowerEntity.md#zoneposition)

#### Inherited from

[`Entity`](Entity.md).[`zonePosition`](Entity.md#zoneposition)

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

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`getTag`](../../types/entities.types/interfaces/IHeroPowerEntity.md#gettag)

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

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`hasTag`](../../types/entities.types/interfaces/IHeroPowerEntity.md#hastag)

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

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`removeTag`](../../types/entities.types/interfaces/IHeroPowerEntity.md#removetag)

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

[`IHeroPowerEntity`](../../types/entities.types/interfaces/IHeroPowerEntity.md).[`setTag`](../../types/entities.types/interfaces/IHeroPowerEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
