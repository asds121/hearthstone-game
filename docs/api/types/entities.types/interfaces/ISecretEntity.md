[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/entities.types](../README.md) / ISecretEntity

# Interface: ISecretEntity

Defined in: [src/types/entities.types.ts:211](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L211)

奥秘实体

## Extends

- [`IEntity`](IEntity.md)

## Properties

### cardId

> **cardId**: `string`

Defined in: [src/types/entities.types.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L14)

#### Inherited from

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

### id

> **id**: `number`

Defined in: [src/types/entities.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L13)

#### Inherited from

[`IEntity`](IEntity.md).[`id`](IEntity.md#id)

***

### isQuest

> **isQuest**: `boolean`

Defined in: [src/types/entities.types.ts:215](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L215)

***

### isSecret

> **isSecret**: `boolean`

Defined in: [src/types/entities.types.ts:214](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L214)

***

### isTriggered

> **isTriggered**: `boolean`

Defined in: [src/types/entities.types.ts:212](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L212)

***

### questProgress

> **questProgress**: `number`

Defined in: [src/types/entities.types.ts:216](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L216)

***

### questTarget

> **questTarget**: `number`

Defined in: [src/types/entities.types.ts:217](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L217)

***

### revealed

> **revealed**: `boolean`

Defined in: [src/types/entities.types.ts:213](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L213)

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
