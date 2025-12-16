[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [types](../README.md) / IZone

# Interface: IZone

Defined in: [src/types/zones.types.ts:11](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L11)

区域接口

## Properties

### entities

> **entities**: [`IEntity`](../entities.types/interfaces/IEntity.md)[]

Defined in: [src/types/zones.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L13)

***

### maxSize

> **maxSize**: `number`

Defined in: [src/types/zones.types.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L14)

***

### type

> **type**: [`ZoneType`](../base.types/type-aliases/ZoneType.md)

Defined in: [src/types/zones.types.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L12)

## Methods

### add()

> **add**(`entity`, `position?`): `boolean`

Defined in: [src/types/zones.types.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L16)

#### Parameters

##### entity

[`IEntity`](../entities.types/interfaces/IEntity.md)

##### position?

`number`

#### Returns

`boolean`

***

### contains()

> **contains**(`entity`): `boolean`

Defined in: [src/types/zones.types.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L24)

#### Parameters

##### entity

[`IEntity`](../entities.types/interfaces/IEntity.md)

#### Returns

`boolean`

***

### filter()

> **filter**(`predicate`): [`IEntity`](../entities.types/interfaces/IEntity.md)[]

Defined in: [src/types/zones.types.ts:26](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L26)

#### Parameters

##### predicate

(`entity`) => `boolean`

#### Returns

[`IEntity`](../entities.types/interfaces/IEntity.md)[]

***

### find()

> **find**(`predicate`): [`IEntity`](../entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/types/zones.types.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L25)

#### Parameters

##### predicate

(`entity`) => `boolean`

#### Returns

[`IEntity`](../entities.types/interfaces/IEntity.md) \| `null`

***

### get()

> **get**(`position`): [`IEntity`](../entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/types/zones.types.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L19)

#### Parameters

##### position

`number`

#### Returns

[`IEntity`](../entities.types/interfaces/IEntity.md) \| `null`

***

### getAll()

> **getAll**(): [`IEntity`](../entities.types/interfaces/IEntity.md)[]

Defined in: [src/types/zones.types.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L20)

#### Returns

[`IEntity`](../entities.types/interfaces/IEntity.md)[]

***

### getCount()

> **getCount**(): `number`

Defined in: [src/types/zones.types.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L21)

#### Returns

`number`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/types/zones.types.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L23)

#### Returns

`boolean`

***

### isFull()

> **isFull**(): `boolean`

Defined in: [src/types/zones.types.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L22)

#### Returns

`boolean`

***

### remove()

> **remove**(`entity`): `boolean`

Defined in: [src/types/zones.types.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L17)

#### Parameters

##### entity

[`IEntity`](../entities.types/interfaces/IEntity.md)

#### Returns

`boolean`

***

### removeAt()

> **removeAt**(`position`): [`IEntity`](../entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/types/zones.types.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/zones.types.ts#L18)

#### Parameters

##### position

`number`

#### Returns

[`IEntity`](../entities.types/interfaces/IEntity.md) \| `null`
