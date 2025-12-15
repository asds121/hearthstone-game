/**
 * 游戏实体类
 */

import type { EntityID, GameStep, PlayerID } from '../../types/base.types';
import type { IGameEntity } from '../../types/entities.types';
import { Entity } from './base.entity';

/**
 * 游戏实体
 * 对应规则集中的 Game 实体
 */
export class GameEntity extends Entity implements IGameEntity {
  cardId: 'GAME';
  TURN: number;
  NUM_MINIONS_KILLED_THIS_TURN: number;
  CURRENT_PLAYER: PlayerID;
  STEP: GameStep;
  MAX_TURNS: number;

  constructor(id: EntityID = 1) {
    super(id, 'GAME', 1);
    this.cardId = 'GAME';
    this.TURN = 0;
    this.NUM_MINIONS_KILLED_THIS_TURN = 0;
    this.CURRENT_PLAYER = 1;
    this.STEP = 'MAIN_READY';
    this.MAX_TURNS = 90;
  }
}