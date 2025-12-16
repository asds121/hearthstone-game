[**hearthstone-game**](../../../README.md)

***

[hearthstone-game](../../../modules.md) / [types/entities.types](../README.md) / IMinionEntity

# Interface: IMinionEntity

Defined in: [src/types/entities.types.ts:112](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L112)

随从实体

## Extends

- [`ICardEntity`](ICardEntity.md)

## Properties

### attack

> **attack**: `number`

Defined in: [src/types/entities.types.ts:114](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L114)

***

### attackCount

> **attackCount**: `number`

Defined in: [src/types/entities.types.ts:139](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L139)

***

### canAttack

> **canAttack**: `boolean`

Defined in: [src/types/entities.types.ts:140](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L140)

***

### canAttackNow?

> `optional` **canAttackNow**: `boolean`

Defined in: [src/types/entities.types.ts:144](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L144)

***

### CANT\_BE\_TARGETED\_BY\_HERO\_POWERS

> **CANT\_BE\_TARGETED\_BY\_HERO\_POWERS**: `boolean`

Defined in: [src/types/entities.types.ts:132](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L132)

***

### CANT\_BE\_TARGETED\_BY\_SPELLS

> **CANT\_BE\_TARGETED\_BY\_SPELLS**: `boolean`

Defined in: [src/types/entities.types.ts:131](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L131)

***

### CANT\_PLAY

> **CANT\_PLAY**: `boolean`

Defined in: [src/types/entities.types.ts:106](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L106)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`CANT_PLAY`](ICardEntity.md#cant_play)

***

### cardId

> **cardId**: `string`

Defined in: [src/types/entities.types.ts:113](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L113)

#### Overrides

[`ICardEntity`](ICardEntity.md).[`cardId`](ICardEntity.md#cardid)

***

### CHARGE

> **CHARGE**: `boolean`

Defined in: [src/types/entities.types.ts:124](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L124)

***

### COLOSSAL

> **COLOSSAL**: `boolean`

Defined in: [src/types/entities.types.ts:162](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L162)

***

### controller

> **controller**: [`PlayerID`](../../base.types/type-aliases/PlayerID.md)

Defined in: [src/types/entities.types.ts:17](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L17)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`controller`](ICardEntity.md#controller)

***

### CORRUPT

> **CORRUPT**: `boolean`

Defined in: [src/types/entities.types.ts:157](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L157)

***

### CORRUPTED

> **CORRUPTED**: `boolean`

Defined in: [src/types/entities.types.ts:158](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L158)

***

### cost

> **cost**: `number`

Defined in: [src/types/entities.types.ts:118](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L118)

#### Overrides

[`ICardEntity`](ICardEntity.md).[`cost`](ICardEntity.md#cost)

***

### creator

> **creator**: `number`

Defined in: [src/types/entities.types.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L18)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`creator`](ICardEntity.md#creator)

***

### currentHealth

> **currentHealth**: `number`

Defined in: [src/types/entities.types.ts:147](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L147)

***

### damage

> **damage**: `number`

Defined in: [src/types/entities.types.ts:117](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L117)

***

### DIVINE\_SHIELD

> **DIVINE\_SHIELD**: `boolean`

Defined in: [src/types/entities.types.ts:122](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L122)

***

### DREDGE

> **DREDGE**: `boolean`

Defined in: [src/types/entities.types.ts:163](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L163)

***

### effectiveAttack

> **effectiveAttack**: `number`

Defined in: [src/types/entities.types.ts:148](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L148)

***

### EXHAUSTED

> **EXHAUSTED**: `boolean`

Defined in: [src/types/entities.types.ts:105](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L105)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`EXHAUSTED`](ICardEntity.md#exhausted)

***

### FRENZY

> **FRENZY**: `boolean`

Defined in: [src/types/entities.types.ts:159](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L159)

***

### FROZEN

> **FROZEN**: `boolean`

Defined in: [src/types/entities.types.ts:130](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L130)

***

### hasAttackedThisTurn

> **hasAttackedThisTurn**: `boolean`

Defined in: [src/types/entities.types.ts:138](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L138)

***

### health

> **health**: `number`

Defined in: [src/types/entities.types.ts:115](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L115)

***

### HONORABLE\_KILL

> **HONORABLE\_KILL**: `boolean`

Defined in: [src/types/entities.types.ts:161](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L161)

***

### id

> **id**: `number`

Defined in: [src/types/entities.types.ts:13](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L13)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`id`](ICardEntity.md#id)

***

### IMMUNE

> **IMMUNE**: `boolean`

Defined in: [src/types/entities.types.ts:129](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L129)

***

### isDead

> **isDead**: `boolean`

Defined in: [src/types/entities.types.ts:149](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L149)

***

### isDormant

> **isDormant**: `boolean`

Defined in: [src/types/entities.types.ts:141](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L141)

***

### isDying

> **isDying**: `boolean`

Defined in: [src/types/entities.types.ts:150](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L150)

***

### JUST\_PLAYED

> **JUST\_PLAYED**: `boolean`

Defined in: [src/types/entities.types.ts:136](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L136)

***

### LIFESTEAL

> **LIFESTEAL**: `boolean`

Defined in: [src/types/entities.types.ts:126](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L126)

***

### maxHealth

> **maxHealth**: `number`

Defined in: [src/types/entities.types.ts:116](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L116)

***

### MEGA\_WINDFURY

> **MEGA\_WINDFURY**: `boolean`

Defined in: [src/types/entities.types.ts:154](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L154)

***

### NUM\_TURNS\_IN\_DECK

> **NUM\_TURNS\_IN\_DECK**: `number`

Defined in: [src/types/entities.types.ts:104](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L104)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`NUM_TURNS_IN_DECK`](ICardEntity.md#num_turns_in_deck)

***

### NUM\_TURNS\_IN\_HAND

> **NUM\_TURNS\_IN\_HAND**: `number`

Defined in: [src/types/entities.types.ts:103](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L103)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`NUM_TURNS_IN_HAND`](ICardEntity.md#num_turns_in_hand)

***

### NUM\_TURNS\_IN\_PLAY

> **NUM\_TURNS\_IN\_PLAY**: `number`

Defined in: [src/types/entities.types.ts:135](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L135)

***

### POISONOUS

> **POISONOUS**: `boolean`

Defined in: [src/types/entities.types.ts:127](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L127)

***

### REBORN

> **REBORN**: `boolean`

Defined in: [src/types/entities.types.ts:155](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L155)

***

### RUSH

> **RUSH**: `boolean`

Defined in: [src/types/entities.types.ts:125](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L125)

***

### SPELLBURST

> **SPELLBURST**: `boolean`

Defined in: [src/types/entities.types.ts:156](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L156)

***

### STEALTH

> **STEALTH**: `boolean`

Defined in: [src/types/entities.types.ts:128](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L128)

***

### tags

> **tags**: `Map`\<`string`, `any`\>

Defined in: [src/types/entities.types.ts:19](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L19)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`tags`](ICardEntity.md#tags)

***

### TAUNT

> **TAUNT**: `boolean`

Defined in: [src/types/entities.types.ts:121](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L121)

***

### TO\_BE\_DESTROYED

> **TO\_BE\_DESTROYED**: `boolean`

Defined in: [src/types/entities.types.ts:137](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L137)

***

### TRADEABLE

> **TRADEABLE**: `boolean`

Defined in: [src/types/entities.types.ts:160](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L160)

***

### WINDFURY

> **WINDFURY**: `boolean`

Defined in: [src/types/entities.types.ts:123](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L123)

***

### zone

> **zone**: [`ZoneType`](../../base.types/type-aliases/ZoneType.md)

Defined in: [src/types/entities.types.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L15)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`zone`](ICardEntity.md#zone)

***

### zonePosition

> **zonePosition**: `number`

Defined in: [src/types/entities.types.ts:16](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L16)

#### Inherited from

[`ICardEntity`](ICardEntity.md).[`zonePosition`](ICardEntity.md#zoneposition)

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

[`ICardEntity`](ICardEntity.md).[`getTag`](ICardEntity.md#gettag)

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

[`ICardEntity`](ICardEntity.md).[`hasTag`](ICardEntity.md#hastag)

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

[`ICardEntity`](ICardEntity.md).[`removeTag`](ICardEntity.md#removetag)

***

### setCurrentHealth()

> **setCurrentHealth**(`value`): `void`

Defined in: [src/types/entities.types.ts:151](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/types/entities.types.ts#L151)

#### Parameters

##### value

`number`

#### Returns

`void`

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

[`ICardEntity`](ICardEntity.md).[`setTag`](ICardEntity.md#settag)
