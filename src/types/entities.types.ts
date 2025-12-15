/**
 * 《炉石传说》实体接口定义
 */

import { EntityID, PlayerID, ZoneType, ZonePosition } from './base.types';
import { IGameState } from './game.types';

/**
 * 基础实体接口
 * 所有游戏实体（包括游戏本身、玩家、卡牌、状态等）都继承此接口
 */
export interface IEntity {
  id: EntityID;
  cardId: string;
  zone: ZoneType;
  zonePosition: ZonePosition;
  controller: PlayerID;
  creator: EntityID;
  tags: Map<string, any>;

  // 标签操作（实体实现中提供）
  getTag(key: string): any;
  setTag(key: string, value: any): void;
  hasTag(key: string): boolean;
  removeTag(key: string): boolean;
}

/**
 * 游戏实体
 * 对应规则集中的 Game 实体
 */
export interface IGameEntity extends IEntity {
  cardId: 'GAME';
  TURN: number;
  NUM_MINIONS_KILLED_THIS_TURN: number;
  CURRENT_PLAYER: PlayerID;
  STEP: import('./base.types').GameStep;
  MAX_TURNS: number; // 通常最大90回合
}

/**
 * 玩家实体
 * 对应规则集中的 Player 实体
 */
export interface IPlayerEntity extends IEntity {
  cardId: 'PLAYER';
  HERO_ENTITY: EntityID;
  HERO_POWER_ENTITY: EntityID;
  NUM_CARDS_PLAYED_THIS_TURN: number;
  NUM_MINIONS_PLAYED_THIS_TURN: number;
  CURRENT_PLAYER: 0 | 1;
  PLAYSTATE: import('./base.types').PlayState;
  
  // 法力水晶相关
  MAXRESOURCES: number;      // 最大法力上限
  RESOURCES_USED: number;    // 已消耗法力值
  TEMP_RESOURCES: number;    // 临时法力值
  OVERLOAD_OWED: number;     // 下回合过载
  OVERLOAD_LOCKED: number;   // 本回合过载

  // 计算属性
  currentMana: number;
  
  // 战斗相关
  NUM_ATTACKS_THIS_TURN: number;
  NUM_HERO_ATTACKS_THIS_TURN: number;
}

/**
 * 英雄实体
 */
export interface IHeroEntity extends IEntity {
  cardId: string;
  health: number;
  maxHealth: number;
  damage: number;
  armor: number;
  attack: number;
  isFrozen: boolean;
  hasAttackedThisTurn: boolean;
  canAttack: boolean;

  // 计算属性
  currentHealth: number;
} 

/**
 * 英雄技能实体
 */
export interface IHeroPowerEntity extends IEntity {
  cardId: string;
  cost: number;
  isExhausted: boolean;
  NUM_USES_THIS_TURN: number;
}

/**
 * 卡牌实体（手牌、牌库中的牌）
 */
export interface ICardEntity extends IEntity {
  cardId: string;
  cost: number;
  NUM_TURNS_IN_HAND: number;
  NUM_TURNS_IN_DECK: number;
  EXHAUSTED: boolean; // 是否使用过
  CANT_PLAY: boolean; // 是否无法使用
}

/**
 * 随从实体
 */
export interface IMinionEntity extends ICardEntity {
  cardId: string;
  attack: number;
  health: number;
  maxHealth: number;
  damage: number;
  cost: number;
  
  // 关键词
  TAUNT: boolean;
  DIVINE_SHIELD: boolean;
  WINDFURY: boolean;
  CHARGE: boolean;
  RUSH: boolean;
  LIFESTEAL: boolean;
  POISONOUS: boolean;
  STEALTH: boolean;
  IMMUNE: boolean;
  FROZEN: boolean;
  CANT_BE_TARGETED_BY_SPELLS: boolean;
  CANT_BE_TARGETED_BY_HERO_POWERS: boolean;
  
  // 状态
  NUM_TURNS_IN_PLAY: number;
  JUST_PLAYED: boolean;
  TO_BE_DESTROYED: boolean;
  hasAttackedThisTurn: boolean;
  attackCount: number;
  canAttack: boolean;
  isDormant: boolean;
  
  // 便捷属性
  canAttackNow?: boolean;

  // 计算与辅助属性
  currentHealth: number;
  effectiveAttack: number;
  isDead: boolean;
  isDying: boolean;
  setCurrentHealth(value: number): void;
  
  // 特殊关键词
  MEGA_WINDFURY: boolean;
  REBORN: boolean;
  SPELLBURST: boolean;
  CORRUPT: boolean;
  CORRUPTED: boolean;
  FRENZY: boolean;
  TRADEABLE: boolean;
  HONORABLE_KILL: boolean;
  COLOSSAL: boolean;
  DREDGE: boolean;
}

/**
 * 法术实体
 */
export interface ISpellEntity extends IEntity {
  cardId: string;
  cost: number;
  spellSchool: string | undefined;
  isSecret?: boolean;
  isQuest?: boolean;
  isSidequest?: boolean;
  isQuestline?: boolean;
  isSigil?: boolean;
  isLocation?: boolean;
}

/**
 * 武器实体
 */
export interface IWeaponEntity extends IEntity {
  cardId: string;
  attack: number;
  durability: number;
  maxDurability: number;
  damage: number;
  cost: number;
  isExhausted: boolean;
}

/**
 * 状态实体
 */
export interface IStateEntity extends IEntity {
  cardId: 'STATE';
  attachedTo: EntityID;
  source: EntityID;
  isEnchant: boolean;
  isOneTurnEffect: boolean;
  isAura: boolean;
  enchantmentType: 'ATTACK' | 'HEALTH' | 'COST' | 'KEYWORD' | 'ABILITY';
  value: number;
}

/**
 * 奥秘实体
 */
export interface ISecretEntity extends IEntity {
  isTriggered: boolean;
  revealed: boolean;
  isSecret: boolean;
  isQuest: boolean;
  questProgress: number;
  questTarget: number;
}

// ===== 实体类型映射 =====

export type EntityTypeMap = {
  'game': IGameEntity;
  'player': IPlayerEntity;
  'hero': IHeroEntity;
  'minion': IMinionEntity;
  'spell': ISpellEntity;
  'weapon': IWeaponEntity;
  'hero_power': IHeroPowerEntity;
  'state': IStateEntity;
  'secret': ISecretEntity;
};

export type EntityOfType<T extends keyof EntityTypeMap> = EntityTypeMap[T];