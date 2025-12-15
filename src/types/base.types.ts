/**
 * 《炉石传说》基础类型定义
 * 基于 2022年12月15日版本规则集
 */

// ===== 基础类型定义 =====

export type EntityID = number;
export type PlayerID = 1 | 2;
export type ZonePosition = number;

export type GameStep = 
  | 'MAIN_READY'      // 准备步骤
  | 'MAIN_START_TRIGGERS'  // 回合开始阶段
  | 'MAIN_START'      // 抽牌阶段
  | 'MAIN_ACTION'     // 主时段
  | 'MAIN_END'        // 回合结束阶段
  | 'MAIN_CLEANUP';   // 清除步骤

export type ZoneType = 
  | 'PLAY'           // 战场
  | 'SECRET'         // 奥秘区
  | 'HAND'           // 手牌
  | 'DECK'           // 牌库
  | 'GRAVEYARD'      // 墓地
  | 'SETASIDE'       // 除外区
  | 'REMOVEDFROMGAME' // 失效区
  | 'LETTUCE_ABILITY'; // 佣兵技能区

export type CardType = 
  | 'game'
  | 'player'
  | 'hero'
  | 'minion'
  | 'spell'
  | 'weapon'
  | 'hero_power'
  | 'state';

export type PlayState = 'PLAYING' | 'LOSING' | 'WON' | 'TIED';

// ===== 工具类型 =====

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};