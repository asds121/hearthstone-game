[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / SpellEntity

# Class: SpellEntity

Defined in: [src/domain/entities/spell.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L12)

法术实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md)

## Constructors

### Constructor

> **new SpellEntity**(`id`, `cardId`, `controller`, `cost`, `spellSchool?`): `SpellEntity`

Defined in: [src/domain/entities/spell.entity.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L29)

#### Parameters

##### id

`number`

##### cardId

`string`

##### controller

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### cost

`number`

##### spellSchool?

`string`

#### Returns

`SpellEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### CANT\_PLAY

> **CANT\_PLAY**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:27](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L27)

***

### cardId

> **cardId**: `string`

Defined in: [src/domain/entities/spell.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L13)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`cardId`](../../types/entities.types/interfaces/ISpellEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`controller`](../../types/entities.types/interfaces/ISpellEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### cost

> **cost**: `number`

Defined in: [src/domain/entities/spell.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L14)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`cost`](../../types/entities.types/interfaces/ISpellEntity.md#cost)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`creator`](../../types/entities.types/interfaces/ISpellEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### EXHAUSTED

> **EXHAUSTED**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:26](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L26)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`id`](../../types/entities.types/interfaces/ISpellEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### isLocation?

> `optional` **isLocation**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L21)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`isLocation`](../../types/entities.types/interfaces/ISpellEntity.md#islocation)

***

### isQuest?

> `optional` **isQuest**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L17)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`isQuest`](../../types/entities.types/interfaces/ISpellEntity.md#isquest)

***

### isQuestline?

> `optional` **isQuestline**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L19)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`isQuestline`](../../types/entities.types/interfaces/ISpellEntity.md#isquestline)

***

### isSecret?

> `optional` **isSecret**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L16)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`isSecret`](../../types/entities.types/interfaces/ISpellEntity.md#issecret)

***

### isSidequest?

> `optional` **isSidequest**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L18)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`isSidequest`](../../types/entities.types/interfaces/ISpellEntity.md#issidequest)

***

### isSigil?

> `optional` **isSigil**: `boolean`

Defined in: [src/domain/entities/spell.entity.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L20)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`isSigil`](../../types/entities.types/interfaces/ISpellEntity.md#issigil)

***

### NUM\_TURNS\_IN\_DECK

> **NUM\_TURNS\_IN\_DECK**: `number`

Defined in: [src/domain/entities/spell.entity.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L25)

***

### NUM\_TURNS\_IN\_HAND

> **NUM\_TURNS\_IN\_HAND**: `number`

Defined in: [src/domain/entities/spell.entity.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L24)

***

### spellSchool

> **spellSchool**: `string` \| `undefined`

Defined in: [src/domain/entities/spell.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/spell.entity.ts#L15)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`spellSchool`](../../types/entities.types/interfaces/ISpellEntity.md#spellschool)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`tags`](../../types/entities.types/interfaces/ISpellEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`zone`](../../types/entities.types/interfaces/ISpellEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`zonePosition`](../../types/entities.types/interfaces/ISpellEntity.md#zoneposition)

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

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`getTag`](../../types/entities.types/interfaces/ISpellEntity.md#gettag)

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

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`hasTag`](../../types/entities.types/interfaces/ISpellEntity.md#hastag)

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

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`removeTag`](../../types/entities.types/interfaces/ISpellEntity.md#removetag)

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

[`ISpellEntity`](../../types/entities.types/interfaces/ISpellEntity.md).[`setTag`](../../types/entities.types/interfaces/ISpellEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
