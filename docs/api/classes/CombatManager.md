[**hearthstone-game**](../README.md)

***

[hearthstone-game](../globals.md) / CombatManager

# Class: CombatManager

Defined in: [engine/combat-manager.ts:18](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L18)

战斗管理器

## Constructors

### Constructor

> **new CombatManager**(`gameState`, `triggerManager`): `CombatManager`

Defined in: [engine/combat-manager.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L22)

#### Parameters

##### gameState

`IGameState`

##### triggerManager

[`TriggerManager`](TriggerManager.md)

#### Returns

`CombatManager`

## Methods

### canAttackTarget()

> **canAttackTarget**(`attacker`, `target`): `boolean`

Defined in: [engine/combat-manager.ts:61](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L61)

检查是否可以攻击目标

#### Parameters

##### attacker

`IMinionEntity`

##### target

`IEntity`

#### Returns

`boolean`

***

### checkDeaths()

> **checkDeaths**(): `void`

Defined in: [engine/combat-manager.ts:173](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L173)

检查死亡

#### Returns

`void`

***

### dealDamage()

> **dealDamage**(`sourceId`, `targetId`, `amount`): `void`

Defined in: [engine/combat-manager.ts:86](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L86)

造成伤害

#### Parameters

##### sourceId

`number`

##### targetId

`number`

##### amount

`number`

#### Returns

`void`

***

### destroyEntity()

> **destroyEntity**(`entityId`): `void`

Defined in: [engine/combat-manager.ts:159](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L159)

消灭实体

#### Parameters

##### entityId

`number`

#### Returns

`void`

***

### executeAttack()

> **executeAttack**(`attacker`, `target`): `void`

Defined in: [engine/combat-manager.ts:30](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L30)

执行攻击

#### Parameters

##### attacker

`IMinionEntity`

##### target

`IEntity`

#### Returns

`void`

***

### heal()

> **heal**(`targetId`, `amount`): `void`

Defined in: [engine/combat-manager.ts:132](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/combat-manager.ts#L132)

治疗

#### Parameters

##### targetId

`number`

##### amount

`number`

#### Returns

`void`
