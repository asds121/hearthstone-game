/**
 * 英雄实体类
 */

import type { EntityID, PlayerID } from '../../types/base.types';
import type { IHeroEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 英雄实体
 */
export class HeroEntity extends Entity implements IHeroEntity {
  health: number;
  maxHealth: number;
  damage: number;
  armor: number;
  attack: number;
  isFrozen: boolean;
  hasAttackedThisTurn: boolean;
  canAttack: boolean;

  constructor(id: EntityID, cardId: string, controller: PlayerID) {
    super(id, cardId, controller);
    this.health = 30;
    this.maxHealth = 30;
    this.damage = 0;
    this.armor = 0;
    this.attack = 0;
    this.isFrozen = false;
    this.hasAttackedThisTurn = false;
    this.canAttack = false;
  }

  get currentHealth(): number {
    return this.health - this.damage;
  }

  setCurrentHealth(value: number): void {
    this.damage = this.health - Math.max(0, Math.min(value, this.health));
  }

  get effectiveAttack(): number {
    return Math.max(0, this.attack);
  }
}