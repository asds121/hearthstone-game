/**
 * 武器实体类
 */

import type { EntityID, PlayerID } from '../../types/base.types';
import type { IWeaponEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 武器实体
 */
export class WeaponEntity extends Entity implements IWeaponEntity {
  cardId: string;
  attack: number;
  durability: number;
  maxDurability: number;
  damage: number;
  cost: number;
  isExhausted: boolean;

  // card lifecycle fields required by ICardEntity
  NUM_TURNS_IN_HAND: number;
  NUM_TURNS_IN_DECK: number;
  EXHAUSTED: boolean;
  CANT_PLAY: boolean;

  constructor(
    id: EntityID,
    cardId: string,
    controller: PlayerID,
    attack: number,
    durability: number,
    cost: number
  ) {
    super(id, cardId, controller);
    this.cardId = cardId;
    this.attack = attack;
    this.durability = durability;
    this.maxDurability = durability;
    this.damage = 0;
    this.cost = cost;
    this.isExhausted = false;

    this.NUM_TURNS_IN_HAND = 0;
    this.NUM_TURNS_IN_DECK = 0;
    this.EXHAUSTED = false;
    this.CANT_PLAY = false;
  }

  get currentDurability(): number {
    return this.durability - this.damage;
  }

  get effectiveAttack(): number {
    return Math.max(0, this.attack);
  }
}