/**
 * 扳机实现类
 */

import type { EntityID, ZoneType } from '../../types/base.types';
import type { ITrigger, IEvent, EventType } from '../../types/events.types';
import { TriggerPriority } from '../../types/keywords.types';
import type { IGameState } from '../../types/game.types';

/**
 * 扳机实现
 */
export class Trigger {
  id: EntityID;
  source: EntityID;
  eventType: EventType;
  condition: ((event: IEvent, gameState: IGameState) => boolean) | undefined;
  effect: (event: IEvent, gameState: IGameState) => void;
  priority: number;
  isSecret?: boolean;
  isQuest?: boolean;
  isActive: boolean;
  timing: 'BEFORE' | 'AFTER' | 'INSTEAD_OF';
  zone: ZoneType;
  isAura?: boolean;
  isEnchantment?: boolean;
  isOneTurnEffect?: boolean;

  constructor(
    id: EntityID,
    source: EntityID,
    eventType: EventType,
    effect: (event: IEvent, gameState: IGameState) => void,
    priority: number = TriggerPriority.NORMAL,
    timing: 'BEFORE' | 'AFTER' | 'INSTEAD_OF' = 'AFTER',
    zone: ZoneType = 'PLAY',
    condition?: (event: IEvent, gameState: IGameState) => boolean
  ) {
    this.id = id;
    this.source = source;
    this.eventType = eventType;
    this.effect = effect;
    this.priority = priority;
    this.timing = timing;
    this.zone = zone;
    this.condition = condition;
    this.isActive = true;
  }

  canTrigger(event: IEvent, gameState: IGameState): boolean {
    if (!this.isActive) return false;
    if (this.eventType !== event.type) return false;
    if (this.condition && !this.condition(event, gameState)) return false;
    return true;
  }

  trigger(event: IEvent, gameState: IGameState): void {
    if (this.canTrigger(event, gameState)) {
      this.effect(event, gameState);
    }
  }
}