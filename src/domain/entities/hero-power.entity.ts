/**
 * 英雄技能实体类
 */

import type { EntityID, PlayerID } from '../../types/base.types';
import type { IHeroPowerEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 英雄技能实体
 */
export class HeroPowerEntity extends Entity implements IHeroPowerEntity {
  cardId: string;
  cost: number;
  isExhausted: boolean;
  NUM_USES_THIS_TURN: number;

  constructor(id: EntityID, cardId: string, controller: PlayerID, cost: number = 2) {
    super(id, cardId, controller);
    this.cardId = cardId;
    this.cost = cost;
    this.isExhausted = false;
    this.NUM_USES_THIS_TURN = 0;
  }
}