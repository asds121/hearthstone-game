/**
 * 玩家实体类
 */

import type { EntityID, PlayerID, PlayState } from '../../types/base.types';
import type { IPlayerEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 玩家实体
 * 对应规则集中的 Player 实体
 */
export class PlayerEntity extends Entity implements IPlayerEntity {
  cardId: 'PLAYER';
  HERO_ENTITY: EntityID;
  HERO_POWER_ENTITY: EntityID;
  NUM_CARDS_PLAYED_THIS_TURN: number;
  NUM_MINIONS_PLAYED_THIS_TURN: number;
  CURRENT_PLAYER: 0 | 1;
  PLAYSTATE: PlayState;
  MAXRESOURCES: number;
  RESOURCES_USED: number;
  TEMP_RESOURCES: number;
  OVERLOAD_OWED: number;
  OVERLOAD_LOCKED: number;
  NUM_ATTACKS_THIS_TURN: number;
  NUM_HERO_ATTACKS_THIS_TURN: number;

  constructor(id: EntityID, playerId: PlayerID) {
    super(id, 'PLAYER', playerId);
    this.cardId = 'PLAYER';
    this.HERO_ENTITY = 0;
    this.HERO_POWER_ENTITY = 0;
    this.NUM_CARDS_PLAYED_THIS_TURN = 0;
    this.NUM_MINIONS_PLAYED_THIS_TURN = 0;
    this.CURRENT_PLAYER = playerId === 1 ? 1 : 0;
    this.PLAYSTATE = 'PLAYING';
    this.MAXRESOURCES = 0;
    this.RESOURCES_USED = 0;
    this.TEMP_RESOURCES = 0;
    this.OVERLOAD_OWED = 0;
    this.OVERLOAD_LOCKED = 0;
    this.NUM_ATTACKS_THIS_TURN = 0;
    this.NUM_HERO_ATTACKS_THIS_TURN = 0;
  }

  get currentMana(): number {
    return this.MAXRESOURCES + this.TEMP_RESOURCES - this.RESOURCES_USED;
  }

  get isLosing(): boolean {
    return this.PLAYSTATE === 'LOSING';
  }
}