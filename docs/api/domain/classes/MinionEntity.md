[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [domain](../README.md) / MinionEntity

# Class: MinionEntity

Defined in: [src/domain/entities/minion.entity.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L12)

随从实体

## Extends

- [`Entity`](Entity.md)

## Implements

- [`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)

## Constructors

### Constructor

> **new MinionEntity**(`id`, `cardId`, `controller`, `attack`, `health`, `cost`): `MinionEntity`

Defined in: [src/domain/entities/minion.entity.ts:57](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L57)

#### Parameters

##### id

`number`

##### cardId

`string`

##### controller

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### attack

`number`

##### health

`number`

##### cost

`number`

#### Returns

`MinionEntity`

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructor)

## Properties

### attack

> **attack**: `number`

Defined in: [src/domain/entities/minion.entity.ts:14](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L14)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`attack`](../../types/entities.types/interfaces/IMinionEntity.md#attack)

***

### attackCount

> **attackCount**: `number`

Defined in: [src/domain/entities/minion.entity.ts:35](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L35)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`attackCount`](../../types/entities.types/interfaces/IMinionEntity.md#attackcount)

***

### canAttack

> **canAttack**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:36](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L36)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`canAttack`](../../types/entities.types/interfaces/IMinionEntity.md#canattack)

***

### CANT\_BE\_TARGETED\_BY\_HERO\_POWERS

> **CANT\_BE\_TARGETED\_BY\_HERO\_POWERS**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:30](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L30)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`CANT_BE_TARGETED_BY_HERO_POWERS`](../../types/entities.types/interfaces/IMinionEntity.md#cant_be_targeted_by_hero_powers)

***

### CANT\_BE\_TARGETED\_BY\_SPELLS

> **CANT\_BE\_TARGETED\_BY\_SPELLS**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:29](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L29)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`CANT_BE_TARGETED_BY_SPELLS`](../../types/entities.types/interfaces/IMinionEntity.md#cant_be_targeted_by_spells)

***

### CANT\_PLAY

> **CANT\_PLAY**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:53](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L53)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`CANT_PLAY`](../../types/entities.types/interfaces/IMinionEntity.md#cant_play)

***

### cardId

> **cardId**: `string`

Defined in: [src/domain/entities/minion.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L13)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`cardId`](../../types/entities.types/interfaces/IMinionEntity.md#cardid)

#### Overrides

[`Entity`](Entity.md).[`cardId`](Entity.md#cardid)

***

### CHARGE

> **CHARGE**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L22)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`CHARGE`](../../types/entities.types/interfaces/IMinionEntity.md#charge)

***

### COLOSSAL

> **COLOSSAL**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:46](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L46)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`COLOSSAL`](../../types/entities.types/interfaces/IMinionEntity.md#colossal)

***

### controller

> **controller**: [`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

Defined in: [src/domain/entities/base.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L17)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`controller`](../../types/entities.types/interfaces/IMinionEntity.md#controller)

#### Inherited from

[`Entity`](Entity.md).[`controller`](Entity.md#controller)

***

### CORRUPT

> **CORRUPT**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:41](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L41)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`CORRUPT`](../../types/entities.types/interfaces/IMinionEntity.md#corrupt)

***

### CORRUPTED

> **CORRUPTED**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:42](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L42)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`CORRUPTED`](../../types/entities.types/interfaces/IMinionEntity.md#corrupted)

***

### cost

> **cost**: `number`

Defined in: [src/domain/entities/minion.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L18)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`cost`](../../types/entities.types/interfaces/IMinionEntity.md#cost)

***

### creator

> **creator**: `number`

Defined in: [src/domain/entities/base.entity.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L18)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`creator`](../../types/entities.types/interfaces/IMinionEntity.md#creator)

#### Inherited from

[`Entity`](Entity.md).[`creator`](Entity.md#creator)

***

### damage

> **damage**: `number`

Defined in: [src/domain/entities/minion.entity.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L17)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`damage`](../../types/entities.types/interfaces/IMinionEntity.md#damage)

***

### DIVINE\_SHIELD

> **DIVINE\_SHIELD**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:20](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L20)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`DIVINE_SHIELD`](../../types/entities.types/interfaces/IMinionEntity.md#divine_shield)

***

### DREDGE

> **DREDGE**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:47](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L47)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`DREDGE`](../../types/entities.types/interfaces/IMinionEntity.md#dredge)

***

### EXHAUSTED

> **EXHAUSTED**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:52](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L52)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`EXHAUSTED`](../../types/entities.types/interfaces/IMinionEntity.md#exhausted)

***

### FRENZY

> **FRENZY**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:43](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L43)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`FRENZY`](../../types/entities.types/interfaces/IMinionEntity.md#frenzy)

***

### FROZEN

> **FROZEN**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:28](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L28)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`FROZEN`](../../types/entities.types/interfaces/IMinionEntity.md#frozen)

***

### hasAttackedThisTurn

> **hasAttackedThisTurn**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:34](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L34)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`hasAttackedThisTurn`](../../types/entities.types/interfaces/IMinionEntity.md#hasattackedthisturn)

***

### health

> **health**: `number`

Defined in: [src/domain/entities/minion.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L15)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`health`](../../types/entities.types/interfaces/IMinionEntity.md#health)

***

### HONORABLE\_KILL

> **HONORABLE\_KILL**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:45](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L45)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`HONORABLE_KILL`](../../types/entities.types/interfaces/IMinionEntity.md#honorable_kill)

***

### id

> **id**: `number`

Defined in: [src/domain/entities/base.entity.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L13)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`id`](../../types/entities.types/interfaces/IMinionEntity.md#id)

#### Inherited from

[`Entity`](Entity.md).[`id`](Entity.md#id)

***

### IMMUNE

> **IMMUNE**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:27](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L27)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`IMMUNE`](../../types/entities.types/interfaces/IMinionEntity.md#immune)

***

### isDormant

> **isDormant**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:37](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L37)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`isDormant`](../../types/entities.types/interfaces/IMinionEntity.md#isdormant)

***

### JUST\_PLAYED

> **JUST\_PLAYED**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:32](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L32)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`JUST_PLAYED`](../../types/entities.types/interfaces/IMinionEntity.md#just_played)

***

### LIFESTEAL

> **LIFESTEAL**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:24](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L24)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`LIFESTEAL`](../../types/entities.types/interfaces/IMinionEntity.md#lifesteal)

***

### maxHealth

> **maxHealth**: `number`

Defined in: [src/domain/entities/minion.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L16)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`maxHealth`](../../types/entities.types/interfaces/IMinionEntity.md#maxhealth)

***

### MEGA\_WINDFURY

> **MEGA\_WINDFURY**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:38](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L38)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`MEGA_WINDFURY`](../../types/entities.types/interfaces/IMinionEntity.md#mega_windfury)

***

### NUM\_TURNS\_IN\_DECK

> **NUM\_TURNS\_IN\_DECK**: `number`

Defined in: [src/domain/entities/minion.entity.ts:51](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L51)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`NUM_TURNS_IN_DECK`](../../types/entities.types/interfaces/IMinionEntity.md#num_turns_in_deck)

***

### NUM\_TURNS\_IN\_HAND

> **NUM\_TURNS\_IN\_HAND**: `number`

Defined in: [src/domain/entities/minion.entity.ts:50](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L50)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`NUM_TURNS_IN_HAND`](../../types/entities.types/interfaces/IMinionEntity.md#num_turns_in_hand)

***

### NUM\_TURNS\_IN\_PLAY

> **NUM\_TURNS\_IN\_PLAY**: `number`

Defined in: [src/domain/entities/minion.entity.ts:31](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L31)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`NUM_TURNS_IN_PLAY`](../../types/entities.types/interfaces/IMinionEntity.md#num_turns_in_play)

***

### POISONOUS

> **POISONOUS**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:25](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L25)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`POISONOUS`](../../types/entities.types/interfaces/IMinionEntity.md#poisonous)

***

### REBORN

> **REBORN**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:39](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L39)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`REBORN`](../../types/entities.types/interfaces/IMinionEntity.md#reborn)

***

### RUSH

> **RUSH**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:23](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L23)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`RUSH`](../../types/entities.types/interfaces/IMinionEntity.md#rush)

***

### SPELLBURST

> **SPELLBURST**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:40](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L40)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`SPELLBURST`](../../types/entities.types/interfaces/IMinionEntity.md#spellburst)

***

### STEALTH

> **STEALTH**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:26](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L26)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`STEALTH`](../../types/entities.types/interfaces/IMinionEntity.md#stealth)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/domain/entities/base.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L19)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`tags`](../../types/entities.types/interfaces/IMinionEntity.md#tags)

#### Inherited from

[`Entity`](Entity.md).[`tags`](Entity.md#tags)

***

### TAUNT

> **TAUNT**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L19)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`TAUNT`](../../types/entities.types/interfaces/IMinionEntity.md#taunt)

***

### TO\_BE\_DESTROYED

> **TO\_BE\_DESTROYED**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:33](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L33)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`TO_BE_DESTROYED`](../../types/entities.types/interfaces/IMinionEntity.md#to_be_destroyed)

***

### TRADEABLE

> **TRADEABLE**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:44](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L44)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`TRADEABLE`](../../types/entities.types/interfaces/IMinionEntity.md#tradeable)

***

### WINDFURY

> **WINDFURY**: `boolean`

Defined in: [src/domain/entities/minion.entity.ts:21](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L21)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`WINDFURY`](../../types/entities.types/interfaces/IMinionEntity.md#windfury)

***

### zone

> **zone**: [`ZoneType`](../../types/base.types/type-aliases/ZoneType.md)

Defined in: [src/domain/entities/base.entity.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L15)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`zone`](../../types/entities.types/interfaces/IMinionEntity.md#zone)

#### Inherited from

[`Entity`](Entity.md).[`zone`](Entity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/domain/entities/base.entity.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/base.entity.ts#L16)

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`zonePosition`](../../types/entities.types/interfaces/IMinionEntity.md#zoneposition)

#### Inherited from

[`Entity`](Entity.md).[`zonePosition`](Entity.md#zoneposition)

## Accessors

### canAttackNow

#### Get Signature

> **get** **canAttackNow**(): `boolean`

Defined in: [src/domain/entities/minion.entity.ts:121](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L121)

##### Returns

`boolean`

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`canAttackNow`](../../types/entities.types/interfaces/IMinionEntity.md#canattacknow)

***

### currentHealth

#### Get Signature

> **get** **currentHealth**(): `number`

Defined in: [src/domain/entities/minion.entity.ts:109](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L109)

##### Returns

`number`

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`currentHealth`](../../types/entities.types/interfaces/IMinionEntity.md#currenthealth)

***

### effectiveAttack

#### Get Signature

> **get** **effectiveAttack**(): `number`

Defined in: [src/domain/entities/minion.entity.ts:113](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L113)

##### Returns

`number`

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`effectiveAttack`](../../types/entities.types/interfaces/IMinionEntity.md#effectiveattack)

***

### isDead

#### Get Signature

> **get** **isDead**(): `boolean`

Defined in: [src/domain/entities/minion.entity.ts:117](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L117)

##### Returns

`boolean`

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`isDead`](../../types/entities.types/interfaces/IMinionEntity.md#isdead)

***

### isDying

#### Get Signature

> **get** **isDying**(): `boolean`

Defined in: [src/domain/entities/minion.entity.ts:135](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L135)

##### Returns

`boolean`

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`isDying`](../../types/entities.types/interfaces/IMinionEntity.md#isdying)

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

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`getTag`](../../types/entities.types/interfaces/IMinionEntity.md#gettag)

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

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`hasTag`](../../types/entities.types/interfaces/IMinionEntity.md#hastag)

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

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`removeTag`](../../types/entities.types/interfaces/IMinionEntity.md#removetag)

#### Inherited from

[`Entity`](Entity.md).[`removeTag`](Entity.md#removetag)

***

### setCurrentHealth()

> **setCurrentHealth**(`value`): `void`

Defined in: [src/domain/entities/minion.entity.ts:139](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/domain/entities/minion.entity.ts#L139)

#### Parameters

##### value

`number`

#### Returns

`void`

#### Implementation of

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`setCurrentHealth`](../../types/entities.types/interfaces/IMinionEntity.md#setcurrenthealth)

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

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md).[`setTag`](../../types/entities.types/interfaces/IMinionEntity.md#settag)

#### Inherited from

[`Entity`](Entity.md).[`setTag`](Entity.md#settag)
