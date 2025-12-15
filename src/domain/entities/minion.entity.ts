/**
 * 随从实体类
 */

import type { EntityID, PlayerID } from '../../types/base.types';
import type { IMinionEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 随从实体
 */
export class MinionEntity extends Entity implements IMinionEntity {
  cardId: string;
  attack: number;
  health: number;
  maxHealth: number;
  damage: number;
  cost: number;
  TAUNT: boolean;
  DIVINE_SHIELD: boolean;
  WINDFURY: boolean;
  CHARGE: boolean;
  RUSH: boolean;
  LIFESTEAL: boolean;
  POISONOUS: boolean;
  STEALTH: boolean;
  IMMUNE: boolean;
  FROZEN: boolean;
  CANT_BE_TARGETED_BY_SPELLS: boolean;
  CANT_BE_TARGETED_BY_HERO_POWERS: boolean;
  NUM_TURNS_IN_PLAY: number;
  JUST_PLAYED: boolean;
  TO_BE_DESTROYED: boolean;
  hasAttackedThisTurn: boolean;
  attackCount: number;
  canAttack: boolean;
  isDormant: boolean;
  MEGA_WINDFURY: boolean;
  REBORN: boolean;
  SPELLBURST: boolean;
  CORRUPT: boolean;
  CORRUPTED: boolean;
  FRENZY: boolean;
  TRADEABLE: boolean;
  HONORABLE_KILL: boolean;
  COLOSSAL: boolean;
  DREDGE: boolean;

  // card lifecycle fields required by ICardEntity
  NUM_TURNS_IN_HAND: number;
  NUM_TURNS_IN_DECK: number;
  EXHAUSTED: boolean;
  CANT_PLAY: boolean;

  // computed properties and helpers are implemented below (getters/setters)

  constructor(
    id: EntityID,
    cardId: string,
    controller: PlayerID,
    attack: number,
    health: number,
    cost: number
  ) {
    super(id, cardId, controller);
    this.cardId = cardId;
    this.attack = attack;
    this.health = health;
    this.maxHealth = health;
    this.damage = 0;
    this.cost = cost;
    this.TAUNT = false;
    this.DIVINE_SHIELD = false;
    this.WINDFURY = false;
    this.CHARGE = false;
    this.RUSH = false;
    this.LIFESTEAL = false;
    this.POISONOUS = false;
    this.STEALTH = false;
    this.IMMUNE = false;
    this.FROZEN = false;
    this.CANT_BE_TARGETED_BY_SPELLS = false;
    this.CANT_BE_TARGETED_BY_HERO_POWERS = false;
    this.NUM_TURNS_IN_PLAY = 0;
    this.JUST_PLAYED = false;
    this.TO_BE_DESTROYED = false;
    this.hasAttackedThisTurn = false;
    this.attackCount = 0;
    this.canAttack = false;
    this.isDormant = false;
    this.MEGA_WINDFURY = false;
    this.REBORN = false;
    this.SPELLBURST = false;
    this.CORRUPT = false;
    this.CORRUPTED = false;
    this.FRENZY = false;
    this.TRADEABLE = false;
    this.HONORABLE_KILL = false;
    this.COLOSSAL = false;
    this.DREDGE = false;

    // initialize card lifecycle fields
    this.NUM_TURNS_IN_HAND = 0;
    this.NUM_TURNS_IN_DECK = 0;
    this.EXHAUSTED = false;
    this.CANT_PLAY = false;
  }

  get currentHealth(): number {
    return this.health - this.damage;
  }

  get effectiveAttack(): number {
    return Math.max(0, this.attack);
  }

  get isDead(): boolean {
    return this.currentHealth <= 0 || this.TO_BE_DESTROYED;
  }

  get canAttackNow(): boolean {
    if (this.isDormant) return false;
    if (this.FROZEN) return false;
    if (this.effectiveAttack <= 0) return false;
    if (this.hasAttackedThisTurn) {
      if (this.CHARGE && this.NUM_TURNS_IN_PLAY === 0) return true;
      if (this.RUSH && this.NUM_TURNS_IN_PLAY === 0) return true;
      if (this.WINDFURY && this.attackCount < 2) return true;
      if (this.MEGA_WINDFURY && this.attackCount < 4) return true;
      return false;
    }
    return this.canAttack;
  }

  get isDying(): boolean {
    return this.currentHealth <= 0;
  }

  setCurrentHealth(value: number): void {
    this.damage = this.health - Math.max(0, Math.min(value, this.health));
  }
}