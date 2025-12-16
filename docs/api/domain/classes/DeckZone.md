[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / DeckZone

# Class: DeckZone

Defined in: [src/domain/zones/deck.zone.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L12)

牌库区域

## Extends

- [`Zone`](Zone.md)

## Constructors

### Constructor

> **new DeckZone**(): `DeckZone`

Defined in: [src/domain/zones/base.zone.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L18)

#### Returns

`DeckZone`

#### Inherited from

[`Zone`](Zone.md).[`constructor`](Zone.md#constructor)

## Properties

### entities

> **entities**: [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L15)

#### Inherited from

[`Zone`](Zone.md).[`entities`](Zone.md#entities)

***

### maxSize

> **maxSize**: `number` = `60`

Defined in: [src/domain/zones/deck.zone.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L14)

#### Overrides

[`Zone`](Zone.md).[`maxSize`](Zone.md#maxsize)

***

### type

> **type**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md) = `'DECK'`

Defined in: [src/domain/zones/deck.zone.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L13)

#### Overrides

[`Zone`](Zone.md).[`type`](Zone.md#type)

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

#### Inherited from

[`Zone`](Zone.md).[`add`](Zone.md#add)

***

### contains()

> **contains**(`entity`): `boolean`

Defined in: [src/domain/zones/base.zone.ts:87](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L87)

#### Parameters

##### entity

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)

#### Returns

`boolean`

#### Inherited from

[`Zone`](Zone.md).[`contains`](Zone.md#contains)

***

### draw()

> **draw**(): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

Defined in: [src/domain/zones/deck.zone.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L16)

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

***

### filter()

> **filter**(`predicate`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

Defined in: [src/domain/zones/deck.zone.ts:49](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L49)

#### Parameters

##### predicate

(`card`) => `boolean`

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

#### Overrides

[`Zone`](Zone.md).[`filter`](Zone.md#filter)

***

### find()

> **find**(`predicate`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

Defined in: [src/domain/zones/deck.zone.ts:45](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L45)

#### Parameters

##### predicate

(`card`) => `boolean`

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md) \| `null`

#### Overrides

[`Zone`](Zone.md).[`find`](Zone.md#find)

***

### get()

> **get**(`position`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/zones/base.zone.ts:67](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L67)

#### Parameters

##### position

`number`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Inherited from

[`Zone`](Zone.md).[`get`](Zone.md#get)

***

### getAll()

> **getAll**(): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:71](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L71)

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

#### Inherited from

[`Zone`](Zone.md).[`getAll`](Zone.md#getall)

***

### getBottom()

> **getBottom**(`count`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

Defined in: [src/domain/zones/deck.zone.ts:33](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L33)

#### Parameters

##### count

`number`

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

***

### getByPlayOrder()

> **getByPlayOrder**(): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:102](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L102)

根据入场顺序获取实体

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

#### Inherited from

[`Zone`](Zone.md).[`getByPlayOrder`](Zone.md#getbyplayorder)

***

### getCards()

> **getCards**(): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

Defined in: [src/domain/zones/deck.zone.ts:37](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L37)

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

***

### getCount()

> **getCount**(): `number`

Defined in: [src/domain/zones/base.zone.ts:75](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L75)

#### Returns

`number`

#### Inherited from

[`Zone`](Zone.md).[`getCount`](Zone.md#getcount)

***

### getTop()

> **getTop**(`count`): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

Defined in: [src/domain/zones/deck.zone.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L29)

#### Parameters

##### count

`number`

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/domain/zones/base.zone.ts:83](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L83)

#### Returns

`boolean`

#### Inherited from

[`Zone`](Zone.md).[`isEmpty`](Zone.md#isempty)

***

### isFull()

> **isFull**(): `boolean`

Defined in: [src/domain/zones/base.zone.ts:79](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L79)

#### Returns

`boolean`

#### Inherited from

[`Zone`](Zone.md).[`isFull`](Zone.md#isfull)

***

### remove()

> **remove**(`entity`): `boolean`

Defined in: [src/domain/zones/base.zone.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L44)

#### Parameters

##### entity

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)

#### Returns

`boolean`

#### Inherited from

[`Zone`](Zone.md).[`remove`](Zone.md#remove)

***

### removeAt()

> **removeAt**(`position`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/zones/base.zone.ts:50](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L50)

#### Parameters

##### position

`number`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Inherited from

[`Zone`](Zone.md).[`removeAt`](Zone.md#removeat)

***

### shuffle()

> **shuffle**(): `void`

Defined in: [src/domain/zones/deck.zone.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L21)

#### Returns

`void`

***

### toArray()

> **toArray**(): [`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]

Defined in: [src/domain/zones/deck.zone.ts:41](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/deck.zone.ts#L41)

#### Returns

[`ICardEntity`](../../types/entities.types/interfaces/ICardEntity.md)[]
