/**
 * 扳机管理器
 * 处理事件和扳机的触发
 */

import type { PlayerID, EntityID, EventType, ZoneType, SequenceType, IGameState, IEvent, ITrigger, ISequence, IEntity, IMinionEntity } from '../../types/index';
import { GameEvent, GameSequence, MinionEntity, BattlefieldZone } from '@domain/index';

/**
 * 扳机管理器
 */
export class TriggerManager {
  private gameState: IGameState;

  constructor(gameState: IGameState) {
    this.gameState = gameState;
  }

  /**
   * 处理扳机
   */
  processTriggers(eventType: EventType, sourceId: EntityID, controller?: PlayerID): void {
    const event = new GameEvent(eventType, sourceId, undefined, 0, {}, this.getNextSequenceNumber());
    
    // 获取相关扳机
    const triggers = this.gameState.getTriggers(eventType);
    
    // 按优先级和入场顺序排序
    const sortedTriggers = triggers
      .filter(t => (t.canTrigger ? t.canTrigger(event, this.gameState) : true))
      .sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        const aEntity = this.gameState.getEntity(a.source);
        const bEntity = this.gameState.getEntity(b.source);
        return (aEntity?.id || 0) - (bEntity?.id || 0);
      });

    // 执行扳机
    sortedTriggers.forEach(trigger => {
      try {
        if (trigger.trigger) trigger.trigger(event, this.gameState);
      } catch (error) {
        console.error(`扳机执行失败:`, error);
      }
    });
  }

  /**
   * 处理预伤害扳机
   */
  processPredamageTriggers(sourceId: EntityID, targetId: EntityID, amount: number): number {
    const event = new GameEvent('PREDAMAGE', sourceId, targetId, amount, {}, this.getNextSequenceNumber());
    
    // 获取预伤害扳机
    const triggers = this.gameState.getTriggers('PREDAMAGE');
    
    let modifiedAmount = amount;
    
    // 按优先级排序
    const sortedTriggers = triggers
      .filter(t => (t.canTrigger ? t.canTrigger(event, this.gameState) : true))
      .sort((a, b) => a.priority - b.priority);

    // 执行扳机，可能会修改伤害值
    sortedTriggers.forEach(trigger => {
      try {
        // 这里假设扳机效果会返回修改后的伤害值
        // 实际实现可能需要更复杂的机制
        if (trigger.trigger) trigger.trigger(event, this.gameState);
      } catch (error) {
        console.error(`预伤害扳机执行失败:`, error);
      }
    });

    return modifiedAmount;
  }

  /**
   * 处理回合开始扳机
   */
  processTurnStartTriggers(): void {
    // 处理腐蚀、梦魇、百变泽鲁斯等
    this.processTriggers('TURN_START', this.gameState.gameEntity.id);
    
    // 处理特定实体的回合开始效果
    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;
    if (battlefield) {
      battlefield.getAll().forEach(entity => {
        // 处理冻结状态
        if (entity instanceof MinionEntity && (entity as MinionEntity).FROZEN) {
          (entity as MinionEntity).FROZEN = false;
        }
        
        // 处理其他回合开始效果
        this.processTriggers('TURN_START', entity.id, entity.controller);
      });
    }
  }

  /**
   * 处理回合结束扳机
   */
  processTurnEndTriggers(): void {
    // 处理各种回合结束效果
    this.processTriggers('TURN_END', this.gameState.gameEntity.id);
    
    // 处理特定实体的回合结束效果
    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;
    if (battlefield) {
      battlefield.getAll().forEach(entity => {
        this.processTriggers('TURN_END', entity.id, entity.controller);
      });
    }
  }

  /**
   * 处理战吼
   */
  processBattlecry(minion: IMinionEntity, targetId?: EntityID): void {
    console.log(`触发 ${minion.cardId} 的战吼`);
    
    // 创建战吼事件
    const event = new GameEvent('BATTLECRY', minion.id, targetId, 0, {}, this.getNextSequenceNumber());
    
    // 处理战吼扳机
    this.processTriggers('BATTLECRY', minion.id, minion.controller);
    
    // 这里应该根据具体的卡牌ID来执行不同的战吼效果
    // 实际实现中，这里会调用效果系统来处理具体的战吼逻辑
  }

  /**
   * 处理亡语
   */
  processDeathrattle(minion: IMinionEntity): void {
    console.log(`触发 ${minion.cardId} 的亡语`);
    
    // 创建亡语事件
    const event = new GameEvent('DEATHRATTLE', minion.id, undefined, 0, {}, this.getNextSequenceNumber());
    
    // 处理亡语扳机
    this.processTriggers('DEATHRATTLE', minion.id, minion.controller);
    
    // 这里应该根据具体的卡牌ID来执行不同的亡语效果
  }

  /**
   * 创建事件
   */
  createEvent(
    type: EventType, 
    source: EntityID, 
    target?: EntityID, 
    value?: number, 
    data?: any
  ): IEvent {
    return new GameEvent(type, source, target, value, data, this.getNextSequenceNumber());
  }

  /**
   * 创建序列
   */
  createSequence(type: SequenceType, player: PlayerID, isNested: boolean = false): ISequence {
    return new GameSequence(type, player, isNested);
  }

  /**
   * 获取下一个序列号
   */
  private getNextSequenceNumber(): number {
    // 这里应该实现一个序列号生成器
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  /**
   * 添加扳机
   */
  addTrigger(trigger: ITrigger): void {
    this.gameState.addTrigger(trigger);
  }

  /**
   * 移除扳机
   */
  removeTrigger(triggerId: EntityID): boolean {
    return this.gameState.removeTrigger(triggerId);
  }

  /**
   * 获取特定类型的扳机
   */
  getTriggers(eventType: EventType): ITrigger[] {
    return this.gameState.getTriggers(eventType);
  }
}