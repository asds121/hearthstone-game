/**
 * 《炉石传说》游戏状态类型定义
 */

import { EntityID, PlayerID, ZoneType } from './base.types';
import { IEntity, IGameEntity, IPlayerEntity } from './entities.types';
import { ITrigger, ISequence, IPhase } from './events.types';

/**
 * 游戏状态接口
 */
export interface IGameState {
  gameEntity: IGameEntity;
  players: Map<PlayerID, IPlayerEntity>;
  entities: Map<EntityID, IEntity>;
  zones: Map<ZoneType, import('./zones.types').IZone>;
  triggers: ITrigger[];
  sequences: ISequence[];
  currentSequence?: ISequence;
  deathRecords: IDeathRecord[];

  // 游戏元数据
  metadata: {
    version: string;
    timestamp: number;
    turnLimit: number;
    timeLimit: number;
  };

  // 基本操作方法
  addEntity(entity: import('./entities.types').IEntity): void;
  removeEntity(entityId: EntityID): boolean;
  getEntity(entityId: EntityID): import('./entities.types').IEntity | null;

  addPlayer(player: import('./entities.types').IPlayerEntity): void;
  getPlayer(playerId: PlayerID): import('./entities.types').IPlayerEntity | null;
  getCurrentPlayer(): import('./entities.types').IPlayerEntity | null;
  getOpponentPlayer(): import('./entities.types').IPlayerEntity | null;

  addTrigger(trigger: import('./events.types').ITrigger): void;
  removeTrigger(triggerId: EntityID): boolean;
  getTriggers(eventType: import('./events.types').EventType): import('./events.types').ITrigger[];

  addDeathRecord(record: IDeathRecord): void;
  getDeathRecords(controller?: PlayerID): IDeathRecord[];

  // 实体ID生成
  getNextEntityId(): EntityID;
}

/**
 * 死亡记录
 */
export interface IDeathRecord {
  entityId: EntityID;
  cardId: string;
  controller: PlayerID;
  turn: number;
  timestamp: number;
}

/**
 * 游戏配置
 */
export interface GameConfig {
  maxTurns: number;
  maxHandSize: number;
  maxBattlefieldSize: number;
  maxSecrets: number;
  turnTimeLimit: number;
  firstTurnTimeLimit: number;
  enableFatigue: boolean;
  enableAdvancedRules: boolean;
}

export const DEFAULT_GAME_CONFIG: GameConfig = {
  maxTurns: 90,
  maxHandSize: 10,
  maxBattlefieldSize: 7,
  maxSecrets: 5,
  turnTimeLimit: 75,
  firstTurnTimeLimit: 45,
  enableFatigue: true,
  enableAdvancedRules: true
};