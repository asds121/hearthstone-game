/**
 * 事件实现类
 */

import type { EntityID } from '../../types/base.types';
import type { EventType, IEvent } from '../../types/events.types';

/**
 * 事件实现
 */
export class GameEvent implements IEvent {
  type: EventType;
  source: EntityID;
  target?: EntityID;
  value?: number;
  data?: any;
  timestamp: number = Date.now();
  sequence: number = 0;

  constructor(
    type: EventType,
    source: EntityID,
    target?: EntityID,
    value?: number,
    data?: any,
    sequence: number = 0
  ) {
    this.type = type;
    this.source = source;
    if (target !== undefined) this.target = target;
    if (value !== undefined) this.value = value;
    this.data = data;
    this.timestamp = Date.now();
    this.sequence = sequence;
  }
}