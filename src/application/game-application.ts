/**
 * 游戏应用层主类
 * 整合所有管理器，提供完整的游戏API
 */

import type {
  IGameState,
  IPlayerEntity,
  IHeroEntity,
  IMinionEntity,
  ICardEntity,
  ISequence,
  PlayerID,
  EntityID,
  GameConfig,
  SequenceType
} from '../types/index';
import { DEFAULT_GAME_CONFIG } from '../types/game.types';

import {
  GameEngine,
  TurnManager,
  CardManager,
  CombatManager,
  TriggerManager
} from './engine';

import {
  GameState,
  GameEntity,
  GameSequence,
  PlayerEntity,
  HeroEntity,
  HandZone,
  DeckZone,
  GraveyardZone,
  BattlefieldZone
} from '@domain/index';

/**
 * 游戏应用层主类
 * 提供完整的游戏API，整合所有子系统
 */
export class GameApplication {
  private gameState: IGameState;
  private gameEngine: GameEngine;
  private turnManager: TurnManager;
  private cardManager: CardManager;
  private combatManager: CombatManager;
  private triggerManager: TriggerManager;
  private config: GameConfig;

  constructor(config: GameConfig = DEFAULT_GAME_CONFIG) {
    this.config = config;
    this.gameState = new GameState(config);
    this.gameEngine = new GameEngine(config, this.gameState);
    this.triggerManager = new TriggerManager(this.gameState);
    this.turnManager = new TurnManager(this.gameState, this.triggerManager);
    this.cardManager = new CardManager(this.gameState, this.triggerManager);
    this.combatManager = new CombatManager(this.gameState, this.triggerManager);
  }

  // ===== 游戏生命周期 =====

  /**
   * 初始化新游戏
   */
  initializeGame(player1Deck: string[], player2Deck: string[]): void {
    this.gameEngine.initializeGame(player1Deck, player2Deck);
    console.log('✅ 游戏初始化完成');
  }

  /**
   * 开始游戏
   */
  startGame(): void {
    console.log('\n🎮 游戏开始！');
    if (process.env.JEST_WORKER_ID !== undefined) {
      // 在测试环境下立即执行，以避免异步定时器导致测试竞争或泄露
      this.turnManager.startTurn();
    } else {
      const t = setTimeout(() => this.turnManager.startTurn(), 1000);
      if (typeof (t as any).unref === 'function') (t as any).unref();
    }
  }

  /**
   * 结束游戏
   */
  endGame(): void {
    console.log('\n🏁 游戏结束');
    // 清理资源
  }

  // ===== 玩家操作 =====

  /**
   * 结束当前回合
   */
  endTurn(): void {
    this.turnManager.endTurn();
    
    // 检查游戏结束
    if (this.checkGameEnd()) {
      return;
    }

    // 开始下一回合（使用 unref 防止阻止测试进程退出）
    const t = setTimeout(() => this.turnManager.startTurn(), 1000);
    if (typeof (t as any).unref === 'function') (t as any).unref();
  }

  /**
   * 使用手牌中的卡牌
   */
  playCard(handIndex: number, targetId?: EntityID): boolean {
    return this.cardManager.playCard(handIndex, targetId);
  }

  /**
   * 随从攻击
   */
  attack(attackerId: EntityID, targetId: EntityID): boolean {
    const attacker = this.gameState.getEntity(attackerId) as IMinionEntity;
    const target = this.gameState.getEntity(targetId);

    if (!attacker || !target) {
      console.log('❌ 攻击者或目标不存在');
      return false;
    }

    if (!attacker.canAttackNow) {
      console.log('❌ 该随从无法攻击');
      return false;
    }

    // 检查嘲讽
    if (!this.combatManager.canAttackTarget(attacker, target)) {
      console.log('❌ 必须先攻击嘲讽随从');
      return false;
    }

    try {
      // 执行攻击
      this.combatManager.executeAttack(attacker, target);
      return true;
    } catch (error) {
      console.error('攻击失败:', error);
      return false;
    }
  }

  /**
   * 使用英雄技能
   */
  useHeroPower(targetId?: EntityID): boolean {
    const currentPlayer = this.gameState.getCurrentPlayer()!;
    const heroPower = this.gameState.getEntity((currentPlayer as PlayerEntity).HERO_POWER_ENTITY) as import('@domain/index').HeroPowerEntity;

    if (!heroPower) {
      console.log('❌ 英雄技能不存在');
      return false;
    }

    if (heroPower.isExhausted) {
      console.log('❌ 英雄技能已使用');
      return false;
    }

    if (currentPlayer.currentMana < heroPower.cost) {
      console.log('❌ 法力不足');
      return false;
    }

    try {
      // 消耗法力
      (currentPlayer as PlayerEntity).RESOURCES_USED += heroPower.cost;
      
      // 标记为已使用
      heroPower.isExhausted = true;
      heroPower.NUM_USES_THIS_TURN++;

      console.log(`使用英雄技能: ${heroPower.cardId}`);
      
      // 触发英雄技能使用事件
      this.triggerManager.processTriggers('HERO_POWER', heroPower.id, currentPlayer.controller);

      return true;
    } catch (error) {
      console.error('英雄技能使用失败:', error);
      return false;
    }
  }

  // ===== 游戏状态查询 =====

  /**
   * 获取当前玩家
   */
  getCurrentPlayer(): IPlayerEntity | null {
    return this.gameState.getCurrentPlayer();
  }

  /**
   * 获取对手玩家
   */
  getOpponentPlayer(): IPlayerEntity | null {
    return this.gameState.getOpponentPlayer();
  }

  /**
   * 获取游戏状态
   */
  getGameState(): IGameState {
    return this.gameState;
  }

  /**
   * 获取当前回合数
   */
  getCurrentTurn(): number {
    return (this.gameState.gameEntity as GameEntity).TURN;
  }

  /**
   * 获取当前玩家ID
   */
  getCurrentPlayerId(): PlayerID {
    return (this.gameState.gameEntity as GameEntity).CURRENT_PLAYER;
  }

  /**
   * 获取手牌
   */
  getHandCards(playerId: PlayerID): ICardEntity[] {
    const handZone = this.gameState.zones.get('HAND') as HandZone;
    return handZone.getCards().filter(card => card.controller === playerId);
  }

  /**
   * 获取战场随从
   */
  getBattlefieldMinions(playerId?: PlayerID): IMinionEntity[] {
    const battlefieldZone = this.gameState.zones.get('PLAY') as BattlefieldZone;
    const minions = battlefieldZone.getMinions();
    
    if (playerId !== undefined) {
      return minions.filter(minion => minion.controller === playerId);
    }
    
    return minions;
  }

  /**
   * 获取英雄
   */
  getHero(playerId: PlayerID): IHeroEntity | null {
    const player = this.gameState.getPlayer(playerId);
    if (!player) return null;
    
    return this.gameState.getEntity((player as PlayerEntity).HERO_ENTITY) as IHeroEntity;
  }

  /**
   * 显示游戏状态
   */
  displayGameState(): void {
    const gameEntity = this.gameState.gameEntity as GameEntity;
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`第 ${gameEntity.TURN} 回合 - 玩家${gameEntity.CURRENT_PLAYER}的回合`);

    this.gameState.players.forEach(player => {
      const hero = this.gameState.getEntity((player as PlayerEntity).HERO_ENTITY) as IHeroEntity;
      console.log(`\n玩家 ${player.controller}:`);
      console.log(`生命值: ${hero.currentHealth}/${hero.maxHealth} (${hero.armor} 护甲)`);
      console.log(`法力: ${player.currentMana}/${player.MAXRESOURCES}`);
      
      const handCards = this.getHandCards(player.controller);
      console.log(`手牌: ${handCards.length} 张`);
      
      const battlefieldMinions = this.getBattlefieldMinions(player.controller);
      console.log(`战场: ${battlefieldMinions.length} 个随从`);
      
      const deckZone = this.gameState.zones.get('DECK') as DeckZone;
      const playerDeckCards = deckZone.getCards().filter(card => card.controller === player.controller);
      console.log(`牌库: ${playerDeckCards.length} 张`);
      
      const graveyardZone = this.gameState.zones.get('GRAVEYARD') as GraveyardZone;
      const playerGraveyardCards = graveyardZone.getAll().filter(card => card.controller === player.controller);
      console.log(`墓地: ${playerGraveyardCards.length} 张`);
    });

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  }

  // ===== 内部方法 =====

  /**
   * 检查游戏结束
   */
  public checkGameEnd(): boolean {
    const players = Array.from(this.gameState.players.values());
    let losingPlayers: PlayerID[] = [];

    players.forEach(player => {
      const hero = this.gameState.getEntity((player as PlayerEntity).HERO_ENTITY) as IHeroEntity;
      if (hero.currentHealth <= 0) {
        losingPlayers.push(player.controller);
      }
    });

    if (losingPlayers.length === 0) {
      return false;
    }

    // 设置游戏状态
    if (losingPlayers.length === 1) {
      const loserId = losingPlayers[0];
      const winnerId = loserId === 1 ? 2 : 1;
      
      (this.gameState.players.get(loserId) as PlayerEntity).PLAYSTATE = 'LOSING';
      (this.gameState.players.get(winnerId) as PlayerEntity).PLAYSTATE = 'WON';

      console.log(`\n🎉 游戏结束！玩家${winnerId}获胜！`);
    } else {
      // 平局
      players.forEach(player => {
        (player as PlayerEntity).PLAYSTATE = 'TIED';
      });
      console.log('\n🤝 游戏结束！平局！');
    }

    return true;
  }

  /**
   * 创建序列
   */
  private createSequence(type: SequenceType, player: PlayerID): ISequence {
    return new GameSequence(type, player);
  }
}