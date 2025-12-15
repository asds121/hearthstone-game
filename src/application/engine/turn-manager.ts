/**
 * 回合管理器
 * 处理回合开始、结束、阶段转换等
 */

import type { PlayerID, GameStep, EventType, IGameState, IPlayerEntity } from '../../types/index';
import { PlayerEntity, HeroEntity, GameEntity, MinionEntity, BattlefieldZone, HeroPowerEntity } from '@domain/index';
import { TriggerManager } from './trigger-manager';

/**
 * 回合管理器
 */
export class TurnManager {
  private gameState: IGameState;
  private triggerManager: TriggerManager;

  constructor(gameState: IGameState, triggerManager: TriggerManager) {
    this.gameState = gameState;
    this.triggerManager = triggerManager;
  }

  /**
   * 开始新回合
   */
  startTurn(): void {
    const currentPlayer = this.gameState.getCurrentPlayer()!;
    const gameEntity = this.gameState.gameEntity as GameEntity;

    console.log(`\n=== 第 ${gameEntity.TURN + 1} 回合 - 玩家${currentPlayer.controller} ===`);

    // 更新游戏状态
    gameEntity.TURN++;
    gameEntity.STEP = 'MAIN_START';
    gameEntity.NUM_MINIONS_KILLED_THIS_TURN = 0;

    // 更新玩家状态
    (currentPlayer as PlayerEntity).NUM_CARDS_PLAYED_THIS_TURN = 0;
    (currentPlayer as PlayerEntity).NUM_MINIONS_PLAYED_THIS_TURN = 0;
    (currentPlayer as PlayerEntity).NUM_ATTACKS_THIS_TURN = 0;
    (currentPlayer as PlayerEntity).NUM_HERO_ATTACKS_THIS_TURN = 0;

    // 增加法力水晶
    if (!(currentPlayer.controller === 1 && gameEntity.TURN === 1)) {
      (currentPlayer as PlayerEntity).MAXRESOURCES = Math.min(10, (currentPlayer as PlayerEntity).MAXRESOURCES + 1);
    }

    // 重置过载
    (currentPlayer as PlayerEntity).OVERLOAD_LOCKED = (currentPlayer as PlayerEntity).OVERLOAD_OWED;
    (currentPlayer as PlayerEntity).OVERLOAD_OWED = 0;

    // 创建回合开始序列
    // this.createSequence('TURN_START', currentPlayer.controller);

    // 处理回合开始扳机
    this.triggerManager.processTurnStartTriggers();

    // 更新游戏步骤
    gameEntity.STEP = 'MAIN_ACTION';
  }

  /**
   * 结束回合
   */
  endTurn(): void {
    const currentPlayer = this.gameState.getCurrentPlayer()!;
    const gameEntity = this.gameState.gameEntity as GameEntity;

    console.log('\n--- 结束回合 ---');

    // 创建回合结束序列
    // this.createSequence('TURN_END', currentPlayer.controller);

    // 处理回合结束扳机
    this.triggerManager.processTurnEndTriggers();

    // 清除临时效果
    this.cleanupTurnEffects();

    // 切换玩家
    const nextPlayerId = currentPlayer.controller === 1 ? 2 : 1;
    gameEntity.CURRENT_PLAYER = nextPlayerId;
    gameEntity.STEP = 'MAIN_READY';
  }

  /**
   * 清除回合效果
   */
  cleanupTurnEffects(): void {
    const battlefield = this.gameState.zones.get('PLAY') as import('@domain/index').BattlefieldZone;
    const currentPlayer = this.gameState.getCurrentPlayer()!;

    // 清除"本回合"效果
    battlefield.getAll().forEach(entity => {
      if (entity instanceof MinionEntity) {
        (entity as MinionEntity).JUST_PLAYED = false;
        (entity as MinionEntity).hasAttackedThisTurn = false;
        (entity as MinionEntity).attackCount = 0;
        (entity as MinionEntity).canAttack = true;
      }
    });

    // 清除临时法力
    (currentPlayer as PlayerEntity).TEMP_RESOURCES = 0;

    // 重置英雄技能
    const heroPower = this.gameState.getEntity((currentPlayer as PlayerEntity).HERO_POWER_ENTITY) as import('@domain/index').HeroPowerEntity;
    if (heroPower) {
      heroPower.isExhausted = false;
      heroPower.NUM_USES_THIS_TURN = 0;
    }
  }

  /**
   * 获取当前游戏步骤
   */
  getCurrentStep(): GameStep {
    return (this.gameState.gameEntity as GameEntity).STEP;
  }

  /**
   * 设置游戏步骤
   */
  setStep(step: GameStep): void {
    (this.gameState.gameEntity as GameEntity).STEP = step;
  }
}