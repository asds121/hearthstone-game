[**hearthstone-game**](../README.md)

***

[hearthstone-game](../globals.md) / TriggerManager

# Class: TriggerManager

Defined in: [engine/trigger-manager.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L12)

扳机管理器

## Constructors

### Constructor

> **new TriggerManager**(`gameState`): `TriggerManager`

Defined in: [engine/trigger-manager.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L15)

#### Parameters

##### gameState

`IGameState`

#### Returns

`TriggerManager`

## Methods

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [engine/trigger-manager.ts:178](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L178)

添加扳机

#### Parameters

##### trigger

`ITrigger`

#### Returns

`void`

***

### createEvent()

> **createEvent**(`type`, `source`, `target?`, `value?`, `data?`): `IEvent`

Defined in: [engine/trigger-manager.ts:150](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L150)

创建事件

#### Parameters

##### type

`EventType`

##### source

`number`

##### target?

`number`

##### value?

`number`

##### data?

`any`

#### Returns

`IEvent`

***

### createSequence()

> **createSequence**(`type`, `player`, `isNested`): `ISequence`

Defined in: [engine/trigger-manager.ts:163](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L163)

创建序列

#### Parameters

##### type

`SequenceType`

##### player

`PlayerID`

##### isNested

`boolean` = `false`

#### Returns

`ISequence`

***

### getTriggers()

> **getTriggers**(`eventType`): `ITrigger`[]

Defined in: [engine/trigger-manager.ts:192](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L192)

获取特定类型的扳机

#### Parameters

##### eventType

`EventType`

#### Returns

`ITrigger`[]

***

### processBattlecry()

> **processBattlecry**(`minion`, `targetId?`): `void`

Defined in: [engine/trigger-manager.ts:119](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L119)

处理战吼

#### Parameters

##### minion

`IMinionEntity`

##### targetId?

`number`

#### Returns

`void`

***

### processDeathrattle()

> **processDeathrattle**(`minion`): `void`

Defined in: [engine/trigger-manager.ts:135](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L135)

处理亡语

#### Parameters

##### minion

`IMinionEntity`

#### Returns

`void`

***

### processPredamageTriggers()

> **processPredamageTriggers**(`sourceId`, `targetId`, `amount`): `number`

Defined in: [engine/trigger-manager.ts:51](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L51)

处理预伤害扳机

#### Parameters

##### sourceId

`number`

##### targetId

`number`

##### amount

`number`

#### Returns

`number`

***

### processTriggers()

> **processTriggers**(`eventType`, `sourceId`, `controller?`): `void`

Defined in: [engine/trigger-manager.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L22)

处理扳机

#### Parameters

##### eventType

`EventType`

##### sourceId

`number`

##### controller?

`PlayerID`

#### Returns

`void`

***

### processTurnEndTriggers()

> **processTurnEndTriggers**(): `void`

Defined in: [engine/trigger-manager.ts:103](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L103)

处理回合结束扳机

#### Returns

`void`

***

### processTurnStartTriggers()

> **processTurnStartTriggers**(): `void`

Defined in: [engine/trigger-manager.ts:81](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L81)

处理回合开始扳机

#### Returns

`void`

***

### removeTrigger()

> **removeTrigger**(`triggerId`): `boolean`

Defined in: [engine/trigger-manager.ts:185](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L185)

移除扳机

#### Parameters

##### triggerId

`number`

#### Returns

`boolean`
