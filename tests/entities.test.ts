/**
 * 实体类测试
 */

import {
  Entity,
  GameEntity,
  PlayerEntity,
  HeroEntity,
  MinionEntity,
  SpellEntity,
  WeaponEntity
} from '../src/domain/entities';

describe('Entities', () => {
  describe('基础实体 (Entity)', () => {
    class TestEntity extends Entity {
      constructor(id: number, cardId: string, controller: 1 | 2) {
        super(id, cardId, controller);
      }
    }

    test('应该正确创建基础实体', () => {
      const entity = new TestEntity(1, 'TEST_CARD', 1);
      
      expect(entity.id).toBe(1);
      expect(entity.cardId).toBe('TEST_CARD');
      expect(entity.controller).toBe(1);
      expect(entity.zone).toBe('PLAY');
    });

    test('应该正确处理标签', () => {
      const entity = new TestEntity(1, 'TEST_CARD', 1);
      
      entity.setTag('TEST_TAG', 'test_value');
      expect(entity.getTag('TEST_TAG')).toBe('test_value');
      expect(entity.hasTag('TEST_TAG')).toBe(true);
      
      entity.removeTag('TEST_TAG');
      expect(entity.hasTag('TEST_TAG')).toBe(false);
    });
  });

  describe('游戏实体 (GameEntity)', () => {
    test('应该正确创建游戏实体', () => {
      const gameEntity = new GameEntity(1);
      
      expect(gameEntity.id).toBe(1);
      expect(gameEntity.cardId).toBe('GAME');
      expect(gameEntity.controller).toBe(1);
      expect(gameEntity.TURN).toBe(0);
      expect(gameEntity.CURRENT_PLAYER).toBe(1);
      expect(gameEntity.STEP).toBe('MAIN_READY');
    });
  });

  describe('玩家实体 (PlayerEntity)', () => {
    test('应该正确创建玩家实体', () => {
      const player = new PlayerEntity(1, 1);
      
      expect(player.id).toBe(1);
      expect(player.cardId).toBe('PLAYER');
      expect(player.controller).toBe(1);
      expect(player.MAXRESOURCES).toBe(0);
      expect(player.RESOURCES_USED).toBe(0);
    });

    test('应该正确计算当前法力值', () => {
      const player = new PlayerEntity(1, 1);
      
      player.MAXRESOURCES = 5;
      player.RESOURCES_USED = 2;
      
      expect(player.currentMana).toBe(3);
    });

    test('应该正确检测失败状态', () => {
      const player = new PlayerEntity(1, 1);
      
      expect(player.isLosing).toBe(false);
      
      player.PLAYSTATE = 'LOSING';
      expect(player.isLosing).toBe(true);
    });
  });

  describe('英雄实体 (HeroEntity)', () => {
    test('应该正确创建英雄实体', () => {
      const hero = new HeroEntity(1, 'HERO_TEST', 1);
      
      expect(hero.id).toBe(1);
      expect(hero.cardId).toBe('HERO_TEST');
      expect(hero.controller).toBe(1);
      expect(hero.health).toBe(30);
      expect(hero.maxHealth).toBe(30);
      expect(hero.damage).toBe(0);
      expect(hero.armor).toBe(0);
      expect(hero.attack).toBe(0);
    });

    test('应该正确计算当前生命值', () => {
      const hero = new HeroEntity(1, 'HERO_TEST', 1);
      
      hero.damage = 5;
      expect(hero.currentHealth).toBe(25);
      
      hero.setCurrentHealth(20);
      expect(hero.currentHealth).toBe(20);
    });

    test('应该正确计算有效攻击力', () => {
      const hero = new HeroEntity(1, 'HERO_TEST', 1);
      
      hero.attack = 5;
      expect(hero.effectiveAttack).toBe(5);
      
      hero.attack = -2;
      expect(hero.effectiveAttack).toBe(0);
    });
  });

  describe('随从实体 (MinionEntity)', () => {
    test('应该正确创建随从实体', () => {
      const minion = new MinionEntity(1, 'MINION_TEST', 1, 3, 3, 2);
      
      expect(minion.id).toBe(1);
      expect(minion.cardId).toBe('MINION_TEST');
      expect(minion.controller).toBe(1);
      expect(minion.attack).toBe(3);
      expect(minion.health).toBe(3);
      expect(minion.maxHealth).toBe(3);
      expect(minion.cost).toBe(2);
    });

    test('应该正确计算当前生命值', () => {
      const minion = new MinionEntity(1, 'MINION_TEST', 1, 3, 3, 2);
      
      minion.damage = 1;
      expect(minion.currentHealth).toBe(2);
      
      minion.setCurrentHealth(1);
      expect(minion.currentHealth).toBe(1);
    });

    test('应该正确检测死亡状态', () => {
      const minion = new MinionEntity(1, 'MINION_TEST', 1, 3, 3, 2);
      
      expect(minion.isDead).toBe(false);
      
      minion.damage = 3;
      expect(minion.isDead).toBe(true);
      
      minion.damage = 0;
      minion.TO_BE_DESTROYED = true;
      expect(minion.isDead).toBe(true);
    });

    test('应该正确检测攻击能力', () => {
      const minion = new MinionEntity(1, 'MINION_TEST', 1, 3, 3, 2);
      
      // 基础状态应该可以攻击
      expect(minion.canAttackNow).toBe(false); // 默认canAttack为false
      
      minion.canAttack = true;
      expect(minion.canAttackNow).toBe(true);
      
      // 冻结状态不能攻击
      minion.FROZEN = true;
      expect(minion.canAttackNow).toBe(false);
      minion.FROZEN = false;
      
      // 休眠状态不能攻击
      minion.isDormant = true;
      expect(minion.canAttackNow).toBe(false);
      minion.isDormant = false;
      
      // 攻击力为0不能攻击
      minion.attack = 0;
      expect(minion.canAttackNow).toBe(false);
    });

    test('应该正确处理风怒机制', () => {
      const minion = new MinionEntity(1, 'MINION_TEST', 1, 3, 3, 2);
      minion.canAttack = true;
      
      // 普通随从只能攻击一次
      minion.hasAttackedThisTurn = true;
      expect(minion.canAttackNow).toBe(false);
      
      // 风怒随从可以攻击两次
      minion.WINDFURY = true;
      minion.attackCount = 1;
      expect(minion.canAttackNow).toBe(true);
      
      minion.attackCount = 2;
      expect(minion.canAttackNow).toBe(false);
      
      // 超级风怒可以攻击四次
      minion.MEGA_WINDFURY = true;
      minion.attackCount = 3;
      expect(minion.canAttackNow).toBe(true);
      
      minion.attackCount = 4;
      expect(minion.canAttackNow).toBe(false);
    });
  });

  describe('法术实体 (SpellEntity)', () => {
    test('应该正确创建法术实体', () => {
      const spell = new SpellEntity(1, 'SPELL_TEST', 1, 3, 'FIRE');
      
      expect(spell.id).toBe(1);
      expect(spell.cardId).toBe('SPELL_TEST');
      expect(spell.controller).toBe(1);
      expect(spell.cost).toBe(3);
      expect(spell.spellSchool).toBe('FIRE');
    });
  });

  describe('武器实体 (WeaponEntity)', () => {
    test('应该正确创建武器实体', () => {
      const weapon = new WeaponEntity(1, 'WEAPON_TEST', 1, 3, 2, 3);
      
      expect(weapon.id).toBe(1);
      expect(weapon.cardId).toBe('WEAPON_TEST');
      expect(weapon.controller).toBe(1);
      expect(weapon.attack).toBe(3);
      expect(weapon.durability).toBe(2);
      expect(weapon.maxDurability).toBe(2);
      expect(weapon.cost).toBe(3);
    });

    test('应该正确计算当前耐久度', () => {
      const weapon = new WeaponEntity(1, 'WEAPON_TEST', 1, 3, 2, 3);
      
      weapon.damage = 1;
      expect(weapon.currentDurability).toBe(1);
    });

    test('应该正确计算有效攻击力', () => {
      const weapon = new WeaponEntity(1, 'WEAPON_TEST', 1, 3, 2, 3);
      
      expect(weapon.effectiveAttack).toBe(3);
      
      weapon.attack = -1;
      expect(weapon.effectiveAttack).toBe(0);
    });
  });
});