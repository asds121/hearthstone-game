/**
 * 序列实现类
 */

import type { PlayerID } from '../../types/base.types';
import type { ISequence, IPhase, IEvent, SequenceType } from '../../types/events.types';

/**
 * 序列实现
 */
export class GameSequence implements ISequence {
  id: string;
  type: SequenceType;
  player: PlayerID;
  phases: IPhase[];
  currentPhase: number;
  isNested: boolean;
  isDegenerate: boolean; // 退化序列
  events: IEvent[];

  constructor(
    type: SequenceType,
    player: PlayerID,
    isNested: boolean = false,
    isDegenerate: boolean = false
  ) {
    this.id = `${type}_${Date.now()}_${Math.random()}`;
    this.type = type;
    this.player = player;
    this.phases = [];
    this.currentPhase = -1;
    this.isNested = isNested;
    this.isDegenerate = isDegenerate;
    this.events = [];
  }

  start(): void {
    this.currentPhase = 0;
  }

  nextPhase(): boolean {
    if (this.currentPhase < this.phases.length - 1) {
      this.currentPhase++;
      return true;
    }
    return false;
  }

  end(): void {
    this.currentPhase = -1;
  }

  addEvent(event: IEvent): void {
    this.events.push(event);
  }

  addPhase(phase: IPhase): void {
    this.phases.push(phase);
  }

  get currentPhaseObj(): IPhase | null {
    return this.phases[this.currentPhase] || null;
  }
}