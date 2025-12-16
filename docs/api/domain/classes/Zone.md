[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / Zone

# Abstract Class: Zone

Defined in: [src/domain/zones/base.zone.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L13)

区域基类

## Extended by

- [`BattlefieldZone`](BattlefieldZone.md)
- [`HandZone`](HandZone.md)
- [`DeckZone`](DeckZone.md)
- [`GraveyardZone`](GraveyardZone.md)
- [`SecretZone`](SecretZone.md)
- [`SetasideZone`](SetasideZone.md)

## Implements

- [`IZone`](../../types/interfaces/IZone.md)

## Constructors

### Constructor

> **new Zone**(): `Zone`

Defined in: [src/domain/zones/base.zone.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L18)

#### Returns

`Zone`

## Properties

### entities

> **entities**: [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L15)

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`entities`](../../types/interfaces/IZone.md#entities)

***

### maxSize

> `abstract` **maxSize**: `number`

Defined in: [src/domain/zones/base.zone.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L16)

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`maxSize`](../../types/interfaces/IZone.md#maxsize)

***

### type

> `abstract` **type**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/zones/base.zone.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L14)

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`type`](../../types/interfaces/IZone.md#type)

## Methods

### add()

> **add**(`entity`, `position?`): `boolean`

Defined in: [src/domain/zones/base.zone.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L22)

#### Parameters

##### entity

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)

##### position?

`number`

#### Returns

`boolean`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`add`](../../types/interfaces/IZone.md#add)

***

### contains()

> **contains**(`entity`): `boolean`

Defined in: [src/domain/zones/base.zone.ts:87](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L87)

#### Parameters

##### entity

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)

#### Returns

`boolean`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`contains`](../../types/interfaces/IZone.md#contains)

***

### filter()

> **filter**(`predicate`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:95](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L95)

#### Parameters

##### predicate

(`entity`) => `boolean`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`filter`](../../types/interfaces/IZone.md#filter)

***

### find()

> **find**(`predicate`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/zones/base.zone.ts:91](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L91)

#### Parameters

##### predicate

(`entity`) => `boolean`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`find`](../../types/interfaces/IZone.md#find)

***

### get()

> **get**(`position`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/zones/base.zone.ts:67](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L67)

#### Parameters

##### position

`number`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`get`](../../types/interfaces/IZone.md#get)

***

### getAll()

> **getAll**(): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:71](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L71)

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`getAll`](../../types/interfaces/IZone.md#getall)

***

### getByPlayOrder()

> **getByPlayOrder**(): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:102](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L102)

根据入场顺序获取实体

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

***

### getCount()

> **getCount**(): `number`

Defined in: [src/domain/zones/base.zone.ts:75](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L75)

#### Returns

`number`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`getCount`](../../types/interfaces/IZone.md#getcount)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/domain/zones/base.zone.ts:83](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L83)

#### Returns

`boolean`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`isEmpty`](../../types/interfaces/IZone.md#isempty)

***

### isFull()

> **isFull**(): `boolean`

Defined in: [src/domain/zones/base.zone.ts:79](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L79)

#### Returns

`boolean`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`isFull`](../../types/interfaces/IZone.md#isfull)

***

### remove()

> **remove**(`entity`): `boolean`

Defined in: [src/domain/zones/base.zone.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L44)

#### Parameters

##### entity

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)

#### Returns

`boolean`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`remove`](../../types/interfaces/IZone.md#remove)

***

### removeAt()

> **removeAt**(`position`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/zones/base.zone.ts:50](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L50)

#### Parameters

##### position

`number`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Implementation of

[`IZone`](../../types/interfaces/IZone.md).[`removeAt`](../../types/interfaces/IZone.md#removeat)
