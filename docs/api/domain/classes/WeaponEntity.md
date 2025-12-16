[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / WeaponEntity

# Class: WeaponEntity

Defined in: [src/domain/entities/weapon.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L12)

武器实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md)

## Constructors

### Constructor

> **new WeaponEntity**(`id`, `cardId`, `controller`, `attack`, `durability`, `cost`): `WeaponEntity`

Defined in: [src/domain/entities/weapon.entity.ts:27](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L27)

#### Parameters

##### id

`number`

##### cardId

`string`

##### controller

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### attack

`number`

##### durability

`number`

##### cost

`number`

#### Returns

`WeaponEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### attack

> **attack**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L14)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`attack`](../../types/entities.types/interfaces/IWeaponEntity.md#attack)

***

### CANT\_PLAY

> **CANT\_PLAY**: `boolean`

Defined in: [src/domain/entities/weapon.entity.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L25)

***

### cardId

> **cardId**: `string`

Defined in: [src/domain/entities/weapon.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L13)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`cardId`](../../types/entities.types/interfaces/IWeaponEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`controller`](../../types/entities.types/interfaces/IWeaponEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### cost

> **cost**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L18)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`cost`](../../types/entities.types/interfaces/IWeaponEntity.md#cost)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`creator`](../../types/entities.types/interfaces/IWeaponEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### damage

> **damage**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L17)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`damage`](../../types/entities.types/interfaces/IWeaponEntity.md#damage)

***

### durability

> **durability**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L15)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`durability`](../../types/entities.types/interfaces/IWeaponEntity.md#durability)

***

### EXHAUSTED

> **EXHAUSTED**: `boolean`

Defined in: [src/domain/entities/weapon.entity.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L24)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`id`](../../types/entities.types/interfaces/IWeaponEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### isExhausted

> **isExhausted**: `boolean`

Defined in: [src/domain/entities/weapon.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L19)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`isExhausted`](../../types/entities.types/interfaces/IWeaponEntity.md#isexhausted)

***

### maxDurability

> **maxDurability**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L16)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`maxDurability`](../../types/entities.types/interfaces/IWeaponEntity.md#maxdurability)

***

### NUM\_TURNS\_IN\_DECK

> **NUM\_TURNS\_IN\_DECK**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L23)

***

### NUM\_TURNS\_IN\_HAND

> **NUM\_TURNS\_IN\_HAND**: `number`

Defined in: [src/domain/entities/weapon.entity.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L22)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`tags`](../../types/entities.types/interfaces/IWeaponEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`zone`](../../types/entities.types/interfaces/IWeaponEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IWeaponEntity.md#zoneposition)

#### Inherited from

[`Entity`](Entity.md).[`zonePosition`](Entity.md#zoneposition)

## Accessors

### currentDurability

#### Get Signature

> **get** **currentDurability**(): `number`

Defined in: [src/domain/entities/weapon.entity.ts:50](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L50)

##### Returns

`number`

***

### effectiveAttack

#### Get Signature

> **get** **effectiveAttack**(): `number`

Defined in: [src/domain/entities/weapon.entity.ts:54](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/weapon.entity.ts#L54)

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

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`getTag`](../../types/entities.types/interfaces/IWeaponEntity.md#gettag)

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

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`hasTag`](../../types/entities.types/interfaces/IWeaponEntity.md#hastag)

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

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`removeTag`](../../types/entities.types/interfaces/IWeaponEntity.md#removetag)

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

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md).[`setTag`](../../types/entities.types/interfaces/IWeaponEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
