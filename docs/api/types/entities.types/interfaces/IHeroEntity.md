[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/entities.types](../README.md) / IHeroEntity

# Interface: IHeroEntity

Defined in: [src/types/entities.types.ts:72](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L72)

英雄实体

## Extends

- [`IEntity`](IEntity.md)

## Properties

### armor

> **armor**: `number`

Defined in: [src/types/entities.types.ts:77](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L77)

***

### attack

> **attack**: `number`

Defined in: [src/types/entities.types.ts:78](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L78)

***

### canAttack

> **canAttack**: `boolean`

Defined in: [src/types/entities.types.ts:81](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L81)

***

### cardId

> **cardId**: `string`

Defined in: [src/types/entities.types.ts:73](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L73)

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

### currentHealth

> **currentHealth**: `number`

Defined in: [src/types/entities.types.ts:84](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L84)

***

### damage

> **damage**: `number`

Defined in: [src/types/entities.types.ts:76](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L76)

***

### hasAttackedThisTurn

> **hasAttackedThisTurn**: `boolean`

Defined in: [src/types/entities.types.ts:80](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L80)

***

### health

> **health**: `number`

Defined in: [src/types/entities.types.ts:74](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L74)

***

### id

> **id**: `number`

Defined in: [src/types/entities.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L13)

#### Inherited from

[`IEntity`](IEntity.md).[`id`](IEntity.md#id)

***

### isFrozen

> **isFrozen**: `boolean`

Defined in: [src/types/entities.types.ts:79](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L79)

***

### maxHealth

> **maxHealth**: `number`

Defined in: [src/types/entities.types.ts:75](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L75)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/types/entities.types.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L19)

#### Inherited from

[`IEntity`](IEntity.md).[`tags`](IEntity.md#tags)

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
