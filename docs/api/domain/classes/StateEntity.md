[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / StateEntity

# Class: StateEntity

Defined in: [src/domain/entities/state.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L12)

状态实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md)

## Constructors

### Constructor

> **new StateEntity**(`id`, `attachedTo`, `source`, `enchantmentType`, `value`): `StateEntity`

Defined in: [src/domain/entities/state.entity.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L22)

#### Parameters

##### id

`number`

##### attachedTo

`number`

##### source

`number`

##### enchantmentType

`"ATTACK"` | `"HEALTH"` | `"COST"` | `"KEYWORD"` | `"ABILITY"`

##### value

`number`

#### Returns

`StateEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### attachedTo

> **attachedTo**: `number`

Defined in: [src/domain/entities/state.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L14)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`attachedTo`](../../types/entities.types/interfaces/IStateEntity.md#attachedto)

***

### cardId

> **cardId**: `"STATE"`

Defined in: [src/domain/entities/state.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L13)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`cardId`](../../types/entities.types/interfaces/IStateEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`controller`](../../types/entities.types/interfaces/IStateEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`creator`](../../types/entities.types/interfaces/IStateEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### enchantmentType

> **enchantmentType**: `"ATTACK"` \| `"HEALTH"` \| `"COST"` \| `"KEYWORD"` \| `"ABILITY"`

Defined in: [src/domain/entities/state.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L19)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`enchantmentType`](../../types/entities.types/interfaces/IStateEntity.md#enchantmenttype)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`id`](../../types/entities.types/interfaces/IStateEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### isAura

> **isAura**: `boolean`

Defined in: [src/domain/entities/state.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L18)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`isAura`](../../types/entities.types/interfaces/IStateEntity.md#isaura)

***

### isEnchant

> **isEnchant**: `boolean`

Defined in: [src/domain/entities/state.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L16)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`isEnchant`](../../types/entities.types/interfaces/IStateEntity.md#isenchant)

***

### isOneTurnEffect

> **isOneTurnEffect**: `boolean`

Defined in: [src/domain/entities/state.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L17)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`isOneTurnEffect`](../../types/entities.types/interfaces/IStateEntity.md#isoneturneffect)

***

### source

> **source**: `number`

Defined in: [src/domain/entities/state.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L15)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`source`](../../types/entities.types/interfaces/IStateEntity.md#source)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`tags`](../../types/entities.types/interfaces/IStateEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### value

> **value**: `number`

Defined in: [src/domain/entities/state.entity.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/state.entity.ts#L20)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`value`](../../types/entities.types/interfaces/IStateEntity.md#value)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`zone`](../../types/entities.types/interfaces/IStateEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IStateEntity.md#zoneposition)

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

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`getTag`](../../types/entities.types/interfaces/IStateEntity.md#gettag)

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

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`hasTag`](../../types/entities.types/interfaces/IStateEntity.md#hastag)

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

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`removeTag`](../../types/entities.types/interfaces/IStateEntity.md#removetag)

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

[`IStateEntity`](../../types/entities.types/interfaces/IStateEntity.md).[`setTag`](../../types/entities.types/interfaces/IStateEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
