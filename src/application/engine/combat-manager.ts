/**
 * 战斗管理器
 * 处理攻击、伤害、治疗、死亡等
 */

import type { PlayerID, EntityID, EventType, Keyword, TriggerPriority, IGameState, IPlayerEntity, IMinionEntity, IHeroEntity, IEntity, IEvent, IDeathRecord } from '../../types/index';
import { 
  MinionEntity, 
  HeroEntity, 
  BattlefieldZone,
  GraveyardZone 
} from '@domain/index';
import { TriggerManager } from './trigger-manager';

/**
 * 战斗管理器
 */
export class CombatManager {
  private gameState: IGameState;
  private triggerManager: TriggerManager;

  constructor(gameState: IGameState, triggerManager: TriggerManager) {
    this.gameState = gameState;
    this.triggerManager = triggerManager;
  }

  /**
   * 执行攻击
   */
  executeAttack(attacker: IMinionEntity, target: IEntity): void {
    console.log(`${attacker.cardId} 攻击 ${target.cardId}`);

    // 处理伤害
    const attackerDamage = (attacker as MinionEntity).effectiveAttack;
    let targetDamage = 0;

    if (target instanceof MinionEntity) {
      targetDamage = (target as MinionEntity).effectiveAttack;
    }

    // 造成伤害
    this.dealDamage(attacker.id, target.id, attackerDamage);
    if (targetDamage > 0) {
      this.dealDamage(target.id, attacker.id, targetDamage);
    }

    // 更新攻击状态
    (attacker as MinionEntity).hasAttackedThisTurn = true;
    (attacker as MinionEntity).attackCount++;

    // 触发攻击事件
    this.triggerManager.processTriggers('MINION_ATTACKED', attacker.id, attacker.controller);

    // 检查死亡
    this.checkDeaths();
  }

  /**
   * 检查是否可以攻击目标
   */
  canAttackTarget(attacker: IMinionEntity, target: IEntity): boolean {
    // 如果有嘲讽，必须攻击嘲讽随从
    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;
    const opponentTaunts = battlefield.getTauntMinions().filter(m => m.controller !== attacker.controller);
    
    if (opponentTaunts.length > 0 && !((target as MinionEntity)?.TAUNT)) {
      return false;
    }

    // 检查潜行
    if (target instanceof MinionEntity && (target as MinionEntity).STEALTH) {
      return false;
    }

    // 检查免疫
    if (target instanceof MinionEntity && (target as MinionEntity).IMMUNE) {
      return false;
    }

    return true;
  }

  /**
   * 造成伤害
   */
  dealDamage(sourceId: EntityID, targetId: EntityID, amount: number): void {
    const target = this.gameState.getEntity(targetId);
    if (!target) return;

    console.log(`${this.gameState.getEntity(sourceId)?.cardId} 对 ${target.cardId} 造成 ${amount} 点伤害`);

    // 触发预伤害扳机
    const modifiedAmount = this.processPredamageTriggers(sourceId, targetId, amount);

    // 处理圣盾
    if (target instanceof MinionEntity && (target as MinionEntity).DIVINE_SHIELD) {
      (target as MinionEntity).DIVINE_SHIELD = false;
      console.log(`${target.cardId} 的圣盾被击破`);
      return; // 圣盾完全抵消伤害
    }

    // 造成伤害
    if (modifiedAmount > 0) {
      if (target instanceof MinionEntity) {
        (target as MinionEntity).damage += modifiedAmount;
      } else if (target instanceof HeroEntity) {
        const armor = (target as HeroEntity).armor;
        if (armor > 0) {
          const armorDamage = Math.min(armor, modifiedAmount);
          (target as HeroEntity).armor -= armorDamage;
          const remainingDamage = modifiedAmount - armorDamage;
          if (remainingDamage > 0) {
            (target as HeroEntity).damage += remainingDamage;
          }
        } else {
          (target as HeroEntity).damage += modifiedAmount;
        }
      }
    }

    // 触发伤害事件
    this.triggerManager.processTriggers('DAMAGE_DEALT', sourceId, this.gameState.getEntity(sourceId)?.controller);
    this.triggerManager.processTriggers('DAMAGE_RECEIVED', targetId, target.controller);

    // 处理特殊效果
    this.processSpecialDamageEffects(sourceId, targetId, modifiedAmount);
  }

  /**
   * 治疗
   */
  heal(targetId: EntityID, amount: number): void {
    const target = this.gameState.getEntity(targetId);
    if (!target) return;

    let actualHeal = amount;

    if (target instanceof MinionEntity) {
      const maxHealth = (target as MinionEntity).maxHealth;
      const currentHealth = (target as MinionEntity).currentHealth;
      actualHeal = Math.min(amount, maxHealth - currentHealth);
      (target as MinionEntity).damage = Math.max(0, (target as MinionEntity).damage - actualHeal);
    } else if (target instanceof HeroEntity) {
      const maxHealth = (target as HeroEntity).maxHealth;
      const currentHealth = (target as HeroEntity).currentHealth;
      actualHeal = Math.min(amount, maxHealth - currentHealth);
      (target as HeroEntity).damage = Math.max(0, (target as HeroEntity).damage - actualHeal);
    }

    if (actualHeal > 0) {
      console.log(`${target.cardId} 恢复了 ${actualHeal} 点生命值`);
      this.triggerManager.processTriggers('HEALING_RECEIVED', targetId, target.controller);
    }
  }

  /**
   * 消灭实体
   */
  destroyEntity(entityId: EntityID): void {
    const entity = this.gameState.getEntity(entityId);
    if (!entity) return;

    if (entity instanceof MinionEntity) {
      (entity as MinionEntity).TO_BE_DESTROYED = true;
    }

    console.log(`${entity.cardId} 被标记为消灭`);
  }

  /**
   * 检查死亡
   */
  checkDeaths(): void {
    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;
    const dyingEntities: IMinionEntity[] = [];

    // 检查所有随从
    battlefield.getMinions().forEach(minion => {
      if (minion.isDying || (minion as MinionEntity).TO_BE_DESTROYED) {
        dyingEntities.push(minion);
      }
    });

    if (dyingEntities.length > 0) {
      this.processDeaths(dyingEntities);
    }
  }

  /**
   * 处理死亡
   */
  private processDeaths(dyingEntities: IMinionEntity[]): void {
    console.log(`处理 ${dyingEntities.length} 个随从的死亡`);

    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;
    const graveyard = this.gameState.zones.get('GRAVEYARD') as GraveyardZone;

    // 按入场顺序处理
    const sortedEntities = dyingEntities.sort((a, b) => a.id - b.id);

    sortedEntities.forEach(entity => {
      // 从战场移除
      battlefield.remove(entity);

      // 添加到墓地
      graveyard.add(entity);

      // 添加到死亡记录
      const deathRecord: IDeathRecord = {
        entityId: entity.id,
        cardId: entity.cardId,
        controller: entity.controller,
        turn: this.gameState.gameEntity.TURN,
        timestamp: Date.now()
      };
      this.gameState.addDeathRecord(deathRecord);

      console.log(`${entity.cardId} 死亡`);
    });

    // 触发死亡扳机
    this.triggerManager.processTriggers('MINION_DIED', 0);
  }

  /**
   * 处理亡语
   */
  private processDeathrattle(minion: IMinionEntity): void {
    console.log(`触发 ${minion.cardId} 的亡语`);
    // 实现亡语效果
    // 这里应该根据具体的卡牌ID来执行不同的亡语效果
  }

  /**
   * 处理预伤害扳机
   */
  private processPredamageTriggers(sourceId: EntityID, targetId: EntityID, amount: number): number {
    // 实现预伤害扳机逻辑
    // 返回可能被修改的伤害值
    return amount;
  }

  /**
   * 处理特殊伤害效果
   */
  private processSpecialDamageEffects(sourceId: EntityID, targetId: EntityID, amount: number): void {
    const source = this.gameState.getEntity(sourceId);
    const target = this.gameState.getEntity(targetId);
    
    if (!source || !target) return;

    // 处理剧毒
    if (amount > 0 && sourceId !== targetId && source instanceof MinionEntity && (source as MinionEntity).POISONOUS) {
      this.destroyEntity(targetId);
    }

    // 处理吸血
    if (amount > 0 && sourceId !== targetId && source instanceof MinionEntity && (source as MinionEntity).LIFESTEAL) {
      const hero = this.gameState.getEntity(source.controller === 1 ? 
        (this.gameState.players.get(1) as IPlayerEntity).HERO_ENTITY : 
        (this.gameState.players.get(2) as IPlayerEntity).HERO_ENTITY) as HeroEntity;
      this.heal(hero.id, amount);
    }

    // 处理荣誉消灭
    if (amount > 0 && target instanceof MinionEntity && (target as MinionEntity).currentHealth === amount) {
      if (source instanceof MinionEntity && (source as MinionEntity).getTag('HONORABLE_KILL')) {
        this.triggerManager.processTriggers('HONORABLE_KILL', sourceId, source.controller);
      }
    }

    // 处理超杀
    if (amount > 0 && target instanceof MinionEntity && amount > (target as MinionEntity).currentHealth) {
      if (source instanceof MinionEntity && (source as MinionEntity).getTag('OVERKILL')) {
        const overkillAmount = amount - (target as MinionEntity).currentHealth;
        this.triggerManager.processTriggers('OVERKILL', sourceId, source.controller);
      }
    }
  }
}