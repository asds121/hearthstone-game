/**
 * 《炉石传说》事件系统类型定义
 */

import { EntityID } from './base.types';
import { IGameState } from './game.types';

/**
 * 事件类型
 */
export type EventType =
  // 游戏事件
  | 'GAME_START'
  | 'TURN_START'
  | 'TURN_END'
  | 'STEP_CHANGED'
  
  // 卡牌使用事件
  | 'CARD_PLAYED'
  | 'CARD_DRAWN'
  | 'CARD_DISCARDED'
  | 'CARD_BURNED'
  | 'CARD_MULLIGANED'
  
  // 随从事件
  | 'MINION_SUMMONED'
  | 'MINION_SUMMONED_FROM_DECK'
  | 'MINION_DIED'
  | 'MINION_DESTROYED'
  | 'MINION_TRANSFORMED'
  | 'MINION_DORMANT'
  | 'MINION_AWAKENED'
  | 'MINION_ATTACKED'
  | 'MINION_DEFENDED'
  
  // 伤害与治疗事件
  | 'DAMAGE_DEALT'
  | 'DAMAGE_RECEIVED'
  | 'HEALING_DEALT'
  | 'HEALING_RECEIVED'
  | 'PREDAMAGE'
  | 'PREDAMAGE_TRIGGERED'
  
  // 法术事件
  | 'SPELL_CAST'
  | 'SPELL_TARGETED'
  | 'SPELL_RESOLVED'
  
  // 奥秘事件
  | 'SECRET_REVEALED'
  | 'SECRET_TRIGGERED'
  | 'QUEST_COMPLETED'
  
  // 区域移动事件
  | 'ZONE_MOVEMENT'
  | 'ENTITY_CREATED'
  | 'ENTITY_DESTROYED'
  
  // 关键词事件
  | 'BATTLECRY'
  | 'DEATHRATTLE'
  | 'INSPIRE'
  | 'OUTCAST'
  | 'TRADEABLE'
  | 'HONORABLE_KILL'
  | 'FRENZY'
  | 'OVERKILL'
  | 'SPELLBURST'
  | 'CORRUPT'
  | 'REBORN'
  | 'DISCOVER'
  | 'CHOICE'
  | 'ADAPT'
  | 'EVOLVE'
  | 'HERO_POWER';

/**
 * 事件接口
 */
export interface IEvent {
  type: EventType;
  source: EntityID;
  target?: EntityID;
  value?: number;
  data?: any;
  timestamp: number;
  sequence: number;
}

/**
 * 扳机接口
 */
export interface ITrigger {
  id: EntityID;
  source: EntityID;
  eventType: EventType;
  condition: ((event: IEvent, gameState: IGameState) => boolean) | undefined;
  effect: (event: IEvent, gameState: IGameState) => void;
  priority: number;
  isSecret?: boolean;
  isQuest?: boolean;
  isActive: boolean;

  // 扳机时机
  timing: 'BEFORE' | 'AFTER' | 'INSTEAD_OF';

  // 扳机区域
  zone: import('./base.types').ZoneType;

  // 特殊属性
  isAura?: boolean;
  isEnchantment?: boolean;
  isOneTurnEffect?: boolean;

  // 运行时方法（实现中提供）
  canTrigger?(event: IEvent, gameState: IGameState): boolean;
  trigger(event: IEvent, gameState: IGameState): void;
}

/**
 * 序列类型
 */
export type SequenceType =
  | 'PLAY_CARD'
  | 'ATTACK'
  | 'HERO_POWER'
  | 'END_TURN'
  | 'TURN_START'
  | 'TURN_END'
  | 'DEATH_PHASE'
  | 'FORCED_DEATH';

/**
 * 序列接口
 */
export interface ISequence {
  id: string;
  type: SequenceType;
  player: import('./base.types').PlayerID;
  phases: IPhase[];
  currentPhase: number;
  isNested: boolean;
  isDegenerate: boolean; // 退化序列
  events: IEvent[];
  
  start(): void;
  nextPhase(): boolean;
  end(): void;
  addEvent(event: IEvent): void;
}

/**
 * 阶段类型
 */
export type PhaseType =
  // 使用卡牌阶段
  | 'PLAY_CARD_USAGE'
  | 'PLAY_CARD_RESOLUTION'
  | 'PLAY_CARD_COMPLETION'
  
  // 攻击阶段
  | 'ATTACK_PRE_ATTACK'
  | 'ATTACK_ATTACK'
  | 'ATTACK_DAMAGE'
  | 'ATTACK_POST_ATTACK'
  
  // 死亡阶段
  | 'DEATH_CHECK'
  | 'DEATH_TRIGGER'
  | 'DEATH_RESOLVE'
  
  // 通用阶段
  | 'BETWEEN_PHASES'
  | 'AURA_UPDATE'
  | 'DEATH_CREATION'
  | 'FORCED_DEATH_RESOLUTION';

/**
 * 阶段接口
 */
export interface IPhase {
  type: PhaseType;
  sequence: ISequence;
  events: IEvent[];
  triggers: ITrigger[];
  
  execute(): void;
  addTrigger(trigger: ITrigger): void;
  removeTrigger(trigger: ITrigger): void;
}