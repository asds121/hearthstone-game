[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/entities.types](../README.md) / IStateEntity

# Interface: IStateEntity

Defined in: [src/types/entities.types.ts:197](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L197)

状态实体

## Extends

- [`IEntity`](IEntity.md)

## Properties

### attachedTo

> **attachedTo**: `number`

Defined in: [src/types/entities.types.ts:199](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L199)

***

### cardId

> **cardId**: `"STATE"`

Defined in: [src/types/entities.types.ts:198](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L198)

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

### enchantmentType

> **enchantmentType**: `"ATTACK"` \| `"HEALTH"` \| `"COST"` \| `"KEYWORD"` \| `"ABILITY"`

Defined in: [src/types/entities.types.ts:204](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L204)

***

### id

> **id**: `number`

Defined in: [src/types/entities.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L13)

#### Inherited from

[`IEntity`](IEntity.md).[`id`](IEntity.md#id)

***

### isAura

> **isAura**: `boolean`

Defined in: [src/types/entities.types.ts:203](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L203)

***

### isEnchant

> **isEnchant**: `boolean`

Defined in: [src/types/entities.types.ts:201](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L201)

***

### isOneTurnEffect

> **isOneTurnEffect**: `boolean`

Defined in: [src/types/entities.types.ts:202](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L202)

***

### source

> **source**: `number`

Defined in: [src/types/entities.types.ts:200](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L200)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/types/entities.types.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L19)

#### Inherited from

[`IEntity`](IEntity.md).[`tags`](IEntity.md#tags)

***

### value

> **value**: `number`

Defined in: [src/types/entities.types.ts:205](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L205)

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
