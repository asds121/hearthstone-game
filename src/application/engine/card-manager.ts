/**
 * 卡牌管理器
 * 处理卡牌使用、效果、战吼、亡语等
 */

import type { PlayerID, EntityID, EventType, SequenceType, IGameState, IPlayerEntity, IMinionEntity, ISpellEntity, IWeaponEntity, ICardEntity, ISequence } from '../../types/index';
import { 
  PlayerEntity, 
  MinionEntity, 
  SpellEntity, 
  WeaponEntity, 
  HeroEntity,
  HandZone,
  DeckZone,
  GraveyardZone,
  BattlefieldZone 
} from '@domain/index';
import { TriggerManager } from './trigger-manager';

/**
 * 卡牌管理器
 */
export class CardManager {
  private gameState: IGameState;
  private triggerManager: TriggerManager;

  constructor(gameState: IGameState, triggerManager: TriggerManager) {
    this.gameState = gameState;
    this.triggerManager = triggerManager;
  }

  /**
   * 使用手牌中的卡牌
   */
  playCard(handIndex: number, targetId?: EntityID): boolean {
    const currentPlayer = this.gameState.getCurrentPlayer()!;
    const handZone = this.gameState.zones.get('HAND') as HandZone;
    const card = handZone.get(handIndex) as ICardEntity;

    if (!card) {
      console.log('❌ 无效的卡牌索引');
      return false;
    }

    // 检查法力值
    if (currentPlayer.currentMana < card.cost) {
      console.log('❌ 法力不足');
      return false;
    }

    // 创建使用卡牌序列
    const sequence = this.createSequence('PLAY_CARD', currentPlayer.controller);

    try {
      // 消耗法力
      (currentPlayer as PlayerEntity).RESOURCES_USED += card.cost;

      // 从手牌移除
      handZone.removeAt(handIndex);

      // 根据卡牌类型处理
      if (card instanceof MinionEntity) {
        return this.playMinion(card, sequence, targetId);
      } else if (card instanceof SpellEntity) {
        return this.playSpell(card, sequence, targetId);
      } else if (card instanceof WeaponEntity) {
        return this.playWeapon(card, sequence);
      }

      return true;
    } catch (error) {
      console.error('使用卡牌失败:', error);
      return false;
    }
  }

  /**
   * 使用随从
   */
  private playMinion(minion: IMinionEntity, sequence: ISequence, targetId?: EntityID): boolean {
    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;
    
    if (battlefield.isFull()) {
      console.log('❌ 战场已满');
      return false;
    }

    // 设置随从状态
    (minion as MinionEntity).JUST_PLAYED = true;
    (minion as MinionEntity).NUM_TURNS_IN_PLAY = 0;

    // 添加到战场
    battlefield.add(minion);

    // 触发召唤时扳机
    this.triggerManager.processTriggers('MINION_SUMMONED', minion.id, minion.controller);

    // 处理战吼
    if ((minion as MinionEntity).getTag('BATTLECRY')) {
      this.processBattlecry(minion, targetId);
    }

    // 触发召唤后扳机
    this.triggerManager.processTriggers('MINION_SUMMONED', minion.id, minion.controller);

    console.log(`✅ 召唤 ${minion.cardId}`);
    return true;
  }

  /**
   * 使用法术
   */
  private playSpell(spell: ISpellEntity, sequence: ISequence, targetId?: EntityID): boolean {
    // 处理法术效果
    console.log(`✅ 施放 ${spell.cardId}`);

    // 触发法术使用时扳机
    this.triggerManager.processTriggers('SPELL_CAST', spell.id, spell.controller);

    // 将法术送入墓地
    const graveyard = this.gameState.zones.get('GRAVEYARD') as GraveyardZone;
    graveyard.add(spell);

    return true;
  }

  /**
   * 使用武器
   */
  private playWeapon(weapon: IWeaponEntity, sequence: ISequence): boolean {
    const currentPlayer = this.gameState.getCurrentPlayer()!;
    const battlefield = this.gameState.zones.get('PLAY') as BattlefieldZone;

    // 移除旧武器
    const oldWeapon = battlefield.getWeapon();
    if (oldWeapon) {
      const graveyard = this.gameState.zones.get('GRAVEYARD') as GraveyardZone;
      battlefield.remove(oldWeapon);
      graveyard.add(oldWeapon);
    }

    // 装备新武器
    battlefield.add(weapon);

    console.log(`✅ 装备 ${weapon.cardId}`);
    return true;
  }

  /**
   * 处理战吼
   */
  private processBattlecry(minion: IMinionEntity, targetId?: EntityID): void {
    console.log(`触发 ${minion.cardId} 的战吼`);
    // 实现战吼效果
    // 这里应该根据具体的卡牌ID来执行不同的战吼效果
  }

  /**
   * 抽牌
   */
  drawCard(playerId: PlayerID): ICardEntity | null {
    const deck = this.gameState.zones.get('DECK') as DeckZone;
    const hand = this.gameState.zones.get('HAND') as HandZone;
    const player = this.gameState.getPlayer(playerId)!;

    const card = deck.draw();
    if (!card) {
      // 疲劳
      const fatigueDamage = this.calculateFatigueDamage(playerId);
      const hero = this.gameState.getEntity((player as PlayerEntity).HERO_ENTITY) as HeroEntity;
      // 这里应该调用伤害系统来处理疲劳伤害
      console.log(`疲劳伤害 ${fatigueDamage} 点！`);
      return null;
    }

    if (hand.isFull()) {
      // 烧毁卡牌
      const graveyard = this.gameState.zones.get('GRAVEYARD') as GraveyardZone;
      graveyard.add(card);
      console.log(`手牌已满，${card.cardId} 被烧毁`);
      return null;
    }

    hand.add(card);
    console.log(`抽到 ${card.cardId}`);

    // 触发抽牌扳机
    this.triggerManager.processTriggers('CARD_DRAWN', card.id, playerId);

    return card as ICardEntity;
  }

  /**
   * 计算疲劳伤害
   */
  private calculateFatigueDamage(playerId: PlayerID): number {
    // 简化实现，应该根据玩家的疲劳计数来计算
    return 1;
  }

  /**
   * 创建序列
   */
  private createSequence(type: SequenceType, player: PlayerID): ISequence {
    // 这里应该创建和管理序列
    // 简化实现
    const { GameSequence } = require('@domain/index');
    return new GameSequence(type, player);
  }
}