/**
 * 游戏状态实现类
 */

import type { EntityID, PlayerID, ZoneType } from '../types/base.types';
import type { IGameState, IGameEntity, IPlayerEntity, IEntity, ITrigger, ISequence, IDeathRecord } from '../types/index';
import { GameConfig, DEFAULT_GAME_CONFIG } from '../types/game.types';
import { GameEntity } from './entities/game.entity';
import { PlayerEntity } from './entities/player.entity';
import { BattlefieldZone, HandZone, DeckZone, GraveyardZone, SecretZone, SetasideZone } from './zones';

/**
 * 游戏状态实现
 */
export class GameState implements IGameState {
  gameEntity: IGameEntity;
  players: Map<PlayerID, IPlayerEntity>;
  entities: Map<EntityID, IEntity>;
  zones: Map<ZoneType, import('../types/zones.types').IZone>;
  triggers: ITrigger[];
  sequences: ISequence[];
  currentSequence?: ISequence;
  deathRecords: IDeathRecord[];
  metadata: {
    version: string;
    timestamp: number;
    turnLimit: number;
    timeLimit: number;
  };

  constructor(config: GameConfig = DEFAULT_GAME_CONFIG) {
    this.gameEntity = new GameEntity();
    this.players = new Map();
    this.entities = new Map();
    this.zones = new Map();
    this.triggers = [];
    this.sequences = [];
    this.deathRecords = [];
    this.metadata = {
      version: '1.0.0',
      timestamp: Date.now(),
      turnLimit: config.maxTurns,
      timeLimit: config.turnTimeLimit
    };

    // 初始化区域
    this.initializeZones();
  }

  private initializeZones(): void {
    this.zones.set('PLAY', new BattlefieldZone());
    this.zones.set('HAND', new HandZone());
    this.zones.set('DECK', new DeckZone());
    this.zones.set('GRAVEYARD', new GraveyardZone());
    this.zones.set('SECRET', new SecretZone());
    this.zones.set('SETASIDE', new SetasideZone());
    this.zones.set('REMOVEDFROMGAME', new GraveyardZone());
  }

  addEntity(entity: IEntity): void {
    this.entities.set(entity.id, entity);
  }

  removeEntity(entityId: EntityID): boolean {
    return this.entities.delete(entityId);
  }

  getEntity(entityId: EntityID): IEntity | null {
    return this.entities.get(entityId) || null;
  }

  addPlayer(player: IPlayerEntity): void {
    this.players.set(player.controller, player);
    this.addEntity(player);
  }

  getPlayer(playerId: PlayerID): IPlayerEntity | null {
    return this.players.get(playerId) || null;
  }

  getCurrentPlayer(): IPlayerEntity | null {
    const currentPlayerId = (this.gameEntity as GameEntity).CURRENT_PLAYER;
    return this.getPlayer(currentPlayerId);
  }

  getOpponentPlayer(): IPlayerEntity | null {
    const currentPlayerId = (this.gameEntity as GameEntity).CURRENT_PLAYER;
    const opponentId = currentPlayerId === 1 ? 2 : 1;
    return this.getPlayer(opponentId);
  }

  addTrigger(trigger: ITrigger): void {
    this.triggers.push(trigger);
    this.triggers.sort((a, b) => a.priority - b.priority);
  }

  removeTrigger(triggerId: EntityID): boolean {
    const index = this.triggers.findIndex(t => t.id === triggerId);
    if (index !== -1) {
      this.triggers.splice(index, 1);
      return true;
    }
    return false;
  }

  getTriggers(eventType: import('../types/events.types').EventType): ITrigger[] {
    return this.triggers.filter(t => t.eventType === eventType && t.isActive);
  }

  addDeathRecord(record: IDeathRecord): void {
    this.deathRecords.push(record);
  }

  getDeathRecords(controller?: PlayerID): IDeathRecord[] {
    if (!controller) return [...this.deathRecords];
    return this.deathRecords.filter(r => {
      const entity = this.getEntity(r.entityId);
      return entity && entity.controller === controller;
    });
  }

  /**
   * 获取下一个实体ID
   */
  getNextEntityId(): EntityID {
    return Math.max(...Array.from(this.entities.keys())) + 1;
  }
}