[**hearthstone-game**](../../README.md)

***

[hearthstone-game](../../modules.md) / [application](../README.md) / TriggerManager

# Class: TriggerManager

Defined in: [src/application/engine/trigger-manager.ts:12](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L12)

扳机管理器

## Constructors

### Constructor

> **new TriggerManager**(`gameState`): `TriggerManager`

Defined in: [src/application/engine/trigger-manager.ts:15](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L15)

#### Parameters

##### gameState

[`IGameState`](../../types/game.types/interfaces/IGameState.md)

#### Returns

`TriggerManager`

## Methods

### addTrigger()

> **addTrigger**(`trigger`): `void`

Defined in: [src/application/engine/trigger-manager.ts:178](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L178)

添加扳机

#### Parameters

##### trigger

[`ITrigger`](../../types/events.types/interfaces/ITrigger.md)

#### Returns

`void`

***

### createEvent()

> **createEvent**(`type`, `source`, `target?`, `value?`, `data?`): [`IEvent`](../../types/events.types/interfaces/IEvent.md)

Defined in: [src/application/engine/trigger-manager.ts:150](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L150)

创建事件

#### Parameters

##### type

[`EventType`](../../types/events.types/type-aliases/EventType.md)

##### source

`number`

##### target?

`number`

##### value?

`number`

##### data?

`any`

#### Returns

[`IEvent`](../../types/events.types/interfaces/IEvent.md)

***

### createSequence()

> **createSequence**(`type`, `player`, `isNested`): [`ISequence`](../../types/events.types/interfaces/ISequence.md)

Defined in: [src/application/engine/trigger-manager.ts:163](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L163)

创建序列

#### Parameters

##### type

[`SequenceType`](../../types/events.types/type-aliases/SequenceType.md)

##### player

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

##### isNested

`boolean` = `false`

#### Returns

[`ISequence`](../../types/events.types/interfaces/ISequence.md)

***

### getTriggers()

> **getTriggers**(`eventType`): [`ITrigger`](../../types/events.types/interfaces/ITrigger.md)[]

Defined in: [src/application/engine/trigger-manager.ts:192](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L192)

获取特定类型的扳机

#### Parameters

##### eventType

[`EventType`](../../types/events.types/type-aliases/EventType.md)

#### Returns

[`ITrigger`](../../types/events.types/interfaces/ITrigger.md)[]

***

### processBattlecry()

> **processBattlecry**(`minion`, `targetId?`): `void`

Defined in: [src/application/engine/trigger-manager.ts:119](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L119)

处理战吼

#### Parameters

##### minion

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)

##### targetId?

`number`

#### Returns

`void`

***

### processDeathrattle()

> **processDeathrattle**(`minion`): `void`

Defined in: [src/application/engine/trigger-manager.ts:135](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L135)

处理亡语

#### Parameters

##### minion

[`IMinionEntity`](../../types/entities.types/interfaces/IMinionEntity.md)

#### Returns

`void`

***

### processPredamageTriggers()

> **processPredamageTriggers**(`sourceId`, `targetId`, `amount`): `number`

Defined in: [src/application/engine/trigger-manager.ts:51](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L51)

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

Defined in: [src/application/engine/trigger-manager.ts:22](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L22)

处理扳机

#### Parameters

##### eventType

[`EventType`](../../types/events.types/type-aliases/EventType.md)

##### sourceId

`number`

##### controller?

[`PlayerID`](../../types/base.types/type-aliases/PlayerID.md)

#### Returns

`void`

***

### processTurnEndTriggers()

> **processTurnEndTriggers**(): `void`

Defined in: [src/application/engine/trigger-manager.ts:103](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L103)

处理回合结束扳机

#### Returns

`void`

***

### processTurnStartTriggers()

> **processTurnStartTriggers**(): `void`

Defined in: [src/application/engine/trigger-manager.ts:81](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L81)

处理回合开始扳机

#### Returns

`void`

***

### removeTrigger()

> **removeTrigger**(`triggerId`): `boolean`

Defined in: [src/application/engine/trigger-manager.ts:185](https://github.com/asds121/hearthstone-game/blob/9975ce67d0e16a4df6982eb91c6d911b5fd20998/src/application/engine/trigger-manager.ts#L185)

移除扳机

#### Parameters

##### triggerId

`number`

#### Returns

`boolean`
