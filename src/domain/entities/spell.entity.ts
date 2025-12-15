/**
 * 法术实体类
 */

import type { EntityID, PlayerID } from '../../types/base.types';
import type { ISpellEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 法术实体
 */
export class SpellEntity extends Entity implements ISpellEntity {
  cardId: string;
  cost: number;
  spellSchool: string | undefined;
  isSecret?: boolean;
  isQuest?: boolean;
  isSidequest?: boolean;
  isQuestline?: boolean;
  isSigil?: boolean;
  isLocation?: boolean;

  // card lifecycle fields (ICardEntity compatibility)
  NUM_TURNS_IN_HAND: number;
  NUM_TURNS_IN_DECK: number;
  EXHAUSTED: boolean;
  CANT_PLAY: boolean;

  constructor(
    id: EntityID,
    cardId: string,
    controller: PlayerID,
    cost: number,
    spellSchool?: string
  ) {
    super(id, cardId, controller);
    this.cardId = cardId;
    this.cost = cost;
    this.spellSchool = spellSchool;
    this.isSecret = false;
    this.isQuest = false;
    this.isSidequest = false;
    this.isQuestline = false;
    this.isSigil = false;
    this.isLocation = false;

    this.NUM_TURNS_IN_HAND = 0;
    this.NUM_TURNS_IN_DECK = 0;
    this.EXHAUSTED = false;
    this.CANT_PLAY = false;
  }
}