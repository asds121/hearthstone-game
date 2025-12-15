/**
 * 阶段实现类
 */

import type { PhaseType } from '../../types/events.types';
import type { IPhase, ISequence, ITrigger, IEvent } from '../../types/events.types';

/**
 * 阶段实现
 */
export class GamePhase implements IPhase {
  type: PhaseType;
  sequence: ISequence;
  events: IEvent[];
  triggers: ITrigger[];

  constructor(type: PhaseType, sequence: ISequence) {
    this.type = type;
    this.sequence = sequence;
    this.events = [];
    this.triggers = [];
  }

  execute(): void {
    // 执行阶段的逻辑将在应用层实现
    console.log(`Executing phase: ${this.type}`);
  }

  addTrigger(trigger: ITrigger): void {
    this.triggers.push(trigger);
    this.triggers.sort((a, b) => a.priority - b.priority);
  }

  removeTrigger(trigger: ITrigger): void {
    const index = this.triggers.indexOf(trigger);
    if (index !== -1) {
      this.triggers.splice(index, 1);
    }
  }
}