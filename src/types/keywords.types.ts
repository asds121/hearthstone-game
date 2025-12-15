/**
 * 《炉石传说》关键词和枚举定义
 */

/**
 * 关键词枚举
 */
export enum Keyword {
  TAUNT = 'TAUNT',
  DIVINE_SHIELD = 'DIVINE_SHIELD',
  WINDFURY = 'WINDFURY',
  CHARGE = 'CHARGE',
  RUSH = 'RUSH',
  LIFESTEAL = 'LIFESTEAL',
  POISONOUS = 'POISONOUS',
  STEALTH = 'STEALTH',
  IMMUNE = 'IMMUNE',
  FROZEN = 'FROZEN',
  MEGA_WINDFURY = 'MEGA_WINDFURY',
  REBORN = 'REBORN',
  SPELLBURST = 'SPELLBURST',
  CORRUPT = 'CORRUPT',
  CORRUPTED = 'CORRUPTED',
  FRENZY = 'FRENZY',
  TRADEABLE = 'TRADEABLE',
  HONORABLE_KILL = 'HONORABLE_KILL',
  COLOSSAL = 'COLOSSAL',
  DREDGE = 'DREDGE',
  BATTLECRY = 'BATTLECRY',
  DEATHRATTLE = 'DEATHRATTLE',
  INSPIRE = 'INSPIRE',
  OUTCAST = 'OUTCAST',
  OVERLOAD = 'OVERLOAD',
  SPELL_DAMAGE = 'SPELL_DAMAGE',
  AURA = 'AURA',
  CHOOSE_ONE = 'CHOOSE_ONE',
  COMBO = 'COMBO',
  DISCOVER = 'DISCOVER',
  JOUST = 'JOUST',
  RECRUIT = 'RECRUIT',
  ECHO = 'ECHO',
  RUSH_CHARGE = 'RUSH_CHARGE',
  START_OF_GAME = 'START_OF_GAME',
  QUEST = 'QUEST',
  SIDEQUEST = 'SIDEQUEST',
  QUESTLINE = 'QUESTLINE',
  SIGIL = 'SIGIL',
  LOCATION = 'LOCATION'
}

/**
 * 扳机优先级
 */
export enum TriggerPriority {
  // 最高优先级
  IMMEDIATE = 0,
  
  // 关键词扳机
  AURA_UPDATE = 10,
  PRE_DAMAGE = 20,
  DIVINE_SHIELD = 30,
  IMMUNE = 40,
  
  // 一般扳机
  NORMAL = 50,
  
  // 低优先级
  LIFESTEAL = 60,
  POISONOUS = 70,
  OVERKILL = 80,
  HONORABLE_KILL = 90,
  
  // 最低优先级
  REBORN = 100,
  REDEMPTION = 110,
  
  // 特殊优先级
  SECRET_PASSIVE = 1000,
  QUEST_REWARD = 1001
}

/**
 * 效果类型
 */
export interface IEffect {
  type: 'DAMAGE' | 'HEALING' | 'DRAW' | 'DISCARD' | 'DESTROY' | 'TRANSFORM' | 'SUMMON' | 'BUFF' | 'DEBUFF' | 'MANA_CHANGE' | 'ARMOR' | 'FREEZE' | 'SILENCE';
  source: import('./base.types').EntityID;
  target?: import('./base.types').EntityID;
  value: number;
  school?: string;
  isSpellDamage?: boolean;
  isAura?: boolean;
  conditions?: ICondition[];
}

/**
 * 条件接口
 */
export interface ICondition {
  type: 'HAS_KEYWORD' | 'HAS_TAG' | 'ZONE_CHECK' | 'HEALTH_CHECK' | 'ATTACK_CHECK' | 'COST_CHECK' | 'CONTROLLER_CHECK';
  target?: import('./base.types').EntityID;
  value?: any;
  operator?: 'EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'CONTAINS' | 'NOT_CONTAINS';
}

/**
 * 错误代码枚举
 */
export enum GameErrorCode {
  INVALID_OPERATION = 'INVALID_OPERATION',
  INSUFFICIENT_MANA = 'INSUFFICIENT_MANA',
  INVALID_TARGET = 'INVALID_TARGET',
  ZONE_FULL = 'ZONE_FULL',
  CARD_NOT_FOUND = 'CARD_NOT_FOUND',
  ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
  SEQUENCE_INTERRUPTED = 'SEQUENCE_INTERRUPTED',
  TRIGGER_ERROR = 'TRIGGER_ERROR',
  DEATH_PHASE_ERROR = 'DEATH_PHASE_ERROR'
}

/**
 * 游戏错误类
 */
export class GameError extends Error {
  constructor(
    public code: GameErrorCode,
    public message: string,
    public entityId?: import('./base.types').EntityID,
    public context?: any
  ) {
    super(message);
    this.name = 'GameError';
  }
}