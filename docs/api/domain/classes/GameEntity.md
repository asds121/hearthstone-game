[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / GameEntity

# Class: GameEntity

Defined in: [src/domain/entities/game.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L13)

游戏实体
对应规则集中的 Game 实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md)

## Constructors

### Constructor

> **new GameEntity**(`id`): `GameEntity`

Defined in: [src/domain/entities/game.entity.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L21)

#### Parameters

##### id

`number` = `1`

#### Returns

`GameEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### cardId

> **cardId**: `"GAME"`

Defined in: [src/domain/entities/game.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L14)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`cardId`](../../types/entities.types/interfaces/IGameEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`controller`](../../types/entities.types/interfaces/IGameEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`creator`](../../types/entities.types/interfaces/IGameEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### CURRENT\_PLAYER

> **CURRENT\_PLAYER**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/game.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L17)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`CURRENT_PLAYER`](../../types/entities.types/interfaces/IGameEntity.md#current_player)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`id`](../../types/entities.types/interfaces/IGameEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### MAX\_TURNS

> **MAX\_TURNS**: `number`

Defined in: [src/domain/entities/game.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L19)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`MAX_TURNS`](../../types/entities.types/interfaces/IGameEntity.md#max_turns)

***

### NUM\_MINIONS\_KILLED\_THIS\_TURN

> **NUM\_MINIONS\_KILLED\_THIS\_TURN**: `number`

Defined in: [src/domain/entities/game.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L16)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`NUM_MINIONS_KILLED_THIS_TURN`](../../types/entities.types/interfaces/IGameEntity.md#num_minions_killed_this_turn)

***

### STEP

> **STEP**: [`GameStep`](../../types/base.types/type-aliases/GameStep.md)

Defined in: [src/domain/entities/game.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L18)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`STEP`](../../types/entities.types/interfaces/IGameEntity.md#step)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`tags`](../../types/entities.types/interfaces/IGameEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### TURN

> **TURN**: `number`

Defined in: [src/domain/entities/game.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/game.entity.ts#L15)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`TURN`](../../types/entities.types/interfaces/IGameEntity.md#turn)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`zone`](../../types/entities.types/interfaces/IGameEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IGameEntity.md#zoneposition)

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

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`getTag`](../../types/entities.types/interfaces/IGameEntity.md#gettag)

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

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`hasTag`](../../types/entities.types/interfaces/IGameEntity.md#hastag)

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

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`removeTag`](../../types/entities.types/interfaces/IGameEntity.md#removetag)

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

[`IGameEntity`](../../types/entities.types/interfaces/IGameEntity.md).[`setTag`](../../types/entities.types/interfaces/IGameEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
