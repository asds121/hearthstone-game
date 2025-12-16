[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / BattlefieldZone

# Class: BattlefieldZone

Defined in: [src/domain/zones/battlefield.zone.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L13)

战场区域

## Extends

- [`Zone`](Zone.md)

## Constructors

### Constructor

> **new BattlefieldZone**(): `BattlefieldZone`

Defined in: [src/domain/zones/base.zone.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L18)

#### Returns

`BattlefieldZone`

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

> **maxSize**: `number` = `7`

Defined in: [src/domain/zones/battlefield.zone.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L15)

#### Overrides

[`Zone`](Zone.md).[`maxSize`](Zone.md#maxsize)

***

### type

> **type**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md) = `'PLAY'`

Defined in: [src/domain/zones/battlefield.zone.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L14)

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

### filter()

> **filter**(`predicate`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:95](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L95)

#### Parameters

##### predicate

(`entity`) => `boolean`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

#### Inherited from

[`Zone`](Zone.md).[`filter`](Zone.md#filter)

***

### find()

> **find**(`predicate`): [`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

Defined in: [src/domain/zones/base.zone.ts:91](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L91)

#### Parameters

##### predicate

(`entity`) => `boolean`

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md) \| `null`

#### Inherited from

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

### getByPlayOrder()

> **getByPlayOrder**(): [`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

Defined in: [src/domain/zones/base.zone.ts:102](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L102)

根据入场顺序获取实体

#### Returns

[`IEntity`](../../types/entities.types/interfaces/IEntity.md)[]

#### Inherited from

[`Zone`](Zone.md).[`getByPlayOrder`](Zone.md#getbyplayorder)

***

### getCount()

> **getCount**(): `number`

Defined in: [src/domain/zones/base.zone.ts:75](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/base.zone.ts#L75)

#### Returns

`number`

#### Inherited from

[`Zone`](Zone.md).[`getCount`](Zone.md#getcount)

***

### getHero()

> **getHero**(): [`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md) \| `null`

Defined in: [src/domain/zones/battlefield.zone.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L21)

#### Returns

[`IHeroEntity`](../../types/entities.types/interfaces/IHeroEntity.md) \| `null`

***

### getMinions()

> **getMinions**(): [`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)[]

Defined in: [src/domain/zones/battlefield.zone.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L17)

#### Returns

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)[]

***

### getTauntMinions()

> **getTauntMinions**(): [`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)[]

Defined in: [src/domain/zones/battlefield.zone.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L29)

#### Returns

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)[]

***

### getWeapon()

> **getWeapon**(): [`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md) \| `null`

Defined in: [src/domain/zones/battlefield.zone.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L25)

#### Returns

[`IWeaponEntity`](../../types/entities.types/interfaces/IWeaponEntity.md) \| `null`

***

### hasTauntMinions()

> **hasTauntMinions**(): `boolean`

Defined in: [src/domain/zones/battlefield.zone.ts:33](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/zones/battlefield.zone.ts#L33)

#### Returns

`boolean`

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
