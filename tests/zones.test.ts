/**
 * 区域系统测试
 */

import {
  BattlefieldZone,
  HandZone,
  DeckZone,
  GraveyardZone,
  SecretZone
} from '../src/domain/zones';

import {
  MinionEntity,
  HeroEntity,
  WeaponEntity,
  SpellEntity
} from '../src/domain/entities';

describe('Zones', () => {
  describe('战场区域 (BattlefieldZone)', () => {
    let battlefield: BattlefieldZone;

    beforeEach(() => {
      battlefield = new BattlefieldZone();
    });

    test('应该正确创建战场区域', () => {
      expect(battlefield.type).toBe('PLAY');
      expect(battlefield.maxSize).toBe(7);
      expect(battlefield.isEmpty()).toBe(true);
    });

    test('应该能够添加随从', () => {
      const minion = new MinionEntity(1, 'MINION_TEST', 1, 3, 3, 2);
      
      const result = battlefield.add(minion);
      
      expect(result).toBe(true);
      expect(battlefield.getCount()).toBe(1);
      expect(battlefield.contains(minion)).toBe(true);
    });

    test('应该能够获取随从列表', () => {
      const minion1 = new MinionEntity(1, 'MINION_TEST1', 1, 3, 3, 2);
      const minion2 = new MinionEntity(2, 'MINION_TEST2', 1, 2, 2, 1);
      
      battlefield.add(minion1);
      battlefield.add(minion2);
      
      const minions = battlefield.getMinions();
      expect(minions).toHaveLength(2);
      expect(minions[0]).toBe(minion1);
      expect(minions[1]).toBe(minion2);
    });

    test('应该能够获取英雄', () => {
      const hero = new HeroEntity(1, 'HERO_TEST', 1);
      
      battlefield.add(hero);
      
      const foundHero = battlefield.getHero();
      expect(foundHero).toBe(hero);
    });

    test('应该能够获取武器', () => {
      const weapon = new WeaponEntity(1, 'WEAPON_TEST', 1, 3, 2, 3);
      
      battlefield.add(weapon);
      
      const foundWeapon = battlefield.getWeapon();
      expect(foundWeapon).toBe(weapon);
    });

    test('应该能够获取嘲讽随从', () => {
      const minion1 = new MinionEntity(1, 'MINION_TEST1', 1, 3, 3, 2);
      const minion2 = new MinionEntity(2, 'MINION_TEST2', 1, 2, 2, 1);
      
      (minion2 as any).TAUNT = true;
      
      battlefield.add(minion1);
      battlefield.add(minion2);
      
      const tauntMinions = battlefield.getTauntMinions();
      expect(tauntMinions).toHaveLength(1);
      expect(tauntMinions[0]).toBe(minion2);
    });

    test('应该检测是否有嘲讽随从', () => {
      const minion1 = new MinionEntity(1, 'MINION_TEST1', 1, 3, 3, 2);
      const minion2 = new MinionEntity(2, 'MINION_TEST2', 1, 2, 2, 1);
      
      battlefield.add(minion1);
      expect(battlefield.hasTauntMinions()).toBe(false);
      
      (minion2 as any).TAUNT = true;
      battlefield.add(minion2);
      expect(battlefield.hasTauntMinions()).toBe(true);
    });

    test('不应该超过最大容量', () => {
      // 添加7个随从（最大容量）
      for (let i = 1; i <= 7; i++) {
        const minion = new MinionEntity(i, `MINION_TEST${i}`, 1, 1, 1, 1);
        battlefield.add(minion);
      }
      
      expect(battlefield.isFull()).toBe(true);
      expect(battlefield.getCount()).toBe(7);
      
      // 尝试添加第8个随从
      const extraMinion = new MinionEntity(8, 'MINION_EXTRA', 1, 1, 1, 1);
      expect(() => battlefield.add(extraMinion)).toThrow();
    });
  });

  describe('手牌区域 (HandZone)', () => {
    let hand: HandZone;

    beforeEach(() => {
      hand = new HandZone();
    });

    test('应该正确创建手牌区域', () => {
      expect(hand.type).toBe('HAND');
      expect(hand.maxSize).toBe(10);
      expect(hand.isEmpty()).toBe(true);
    });

    test('应该能够获取卡牌列表', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      
      hand.add(card1);
      hand.add(card2);
      
      const cards = hand.getCards();
      expect(cards).toHaveLength(2);
      expect(cards[0]).toBe(card1);
      expect(cards[1]).toBe(card2);
    });

    test('不应该超过最大容量', () => {
      // 添加10张卡牌（最大容量）
      for (let i = 1; i <= 10; i++) {
        const card = new SpellEntity(i, `SPELL_TEST${i}`, 1, 1);
        hand.add(card);
      }
      
      expect(hand.isFull()).toBe(true);
      expect(hand.getCount()).toBe(10);
      
      // 尝试添加第11张卡牌
      const extraCard = new SpellEntity(11, 'SPELL_EXTRA', 1, 1);
      expect(() => hand.add(extraCard)).toThrow();
    });
  });

  describe('牌库区域 (DeckZone)', () => {
    let deck: DeckZone;

    beforeEach(() => {
      deck = new DeckZone();
    });

    test('应该正确创建牌库区域', () => {
      expect(deck.type).toBe('DECK');
      expect(deck.maxSize).toBe(60);
      expect(deck.isEmpty()).toBe(true);
    });

    test('应该能够抽取卡牌', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      
      deck.add(card1);
      deck.add(card2);
      
      const drawnCard = deck.draw();
      expect(drawnCard).toBe(card2); // 最后添加的卡牌
      expect(deck.getCount()).toBe(1);
    });

    test('空牌库抽取应该返回null', () => {
      const drawnCard = deck.draw();
      expect(drawnCard).toBeNull();
    });

    test('应该能够洗牌', () => {
      const cards = [];
      for (let i = 1; i <= 10; i++) {
        const card = new SpellEntity(i, `SPELL_TEST${i}`, 1, 1);
        cards.push(card);
        deck.add(card);
      }
      
      const originalOrder = deck.toArray().map(card => card.id);
      
      deck.shuffle();
      
      const shuffledOrder = deck.toArray().map(card => card.id);
      
      // 洗牌后顺序应该不同（极大概率）
      expect(shuffledOrder).not.toEqual(originalOrder);
      
      // 但卡牌数量应该相同
      expect(deck.getCount()).toBe(10);
    });

    test('应该能够获取顶部卡牌', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      deck.add(card1);
      deck.add(card2);
      deck.add(card3);
      
      const topCards = deck.getTop(2);
      expect(topCards).toHaveLength(2);
      expect(topCards[0]).toBe(card2);
      expect(topCards[1]).toBe(card3);
    });

    test('应该能够获取底部卡牌', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      deck.add(card1);
      deck.add(card2);
      deck.add(card3);
      
      const bottomCards = deck.getBottom(2);
      expect(bottomCards).toHaveLength(2);
      expect(bottomCards[0]).toBe(card1);
      expect(bottomCards[1]).toBe(card2);
    });
  });

  describe('墓地区域 (GraveyardZone)', () => {
    let graveyard: GraveyardZone;

    beforeEach(() => {
      graveyard = new GraveyardZone();
    });

    test('应该正确创建墓地区域', () => {
      expect(graveyard.type).toBe('GRAVEYARD');
      expect(graveyard.maxSize).toBe(Infinity);
      expect(graveyard.isEmpty()).toBe(true);
    });

    test('应该能够添加任意数量的卡牌', () => {
      for (let i = 1; i <= 100; i++) {
        const card = new SpellEntity(i, `SPELL_TEST${i}`, 1, 1);
        graveyard.add(card);
      }
      
      expect(graveyard.getCount()).toBe(100);
      expect(graveyard.isFull()).toBe(false); // 无限容量
    });
  });

  describe('奥秘区域 (SecretZone)', () => {
    let secretZone: SecretZone;

    beforeEach(() => {
      secretZone = new SecretZone();
    });

    test('应该正确创建奥秘区域', () => {
      expect(secretZone.type).toBe('SECRET');
      expect(secretZone.maxSize).toBe(5);
      expect(secretZone.isEmpty()).toBe(true);
    });

    test('应该能够获取奥秘列表', () => {
      const secret1 = new SpellEntity(1, 'SECRET_TEST1', 1, 2);
      const secret2 = new SpellEntity(2, 'SECRET_TEST2', 1, 3);
      
      (secret1 as any).isSecret = true;
      (secret2 as any).isSecret = true;
      
      secretZone.add(secret1);
      secretZone.add(secret2);
      
      const secrets = secretZone.getSecrets();
      expect(secrets).toHaveLength(2);
      expect(secrets[0]).toBe(secret1);
      expect(secrets[1]).toBe(secret2);
    });

    test('应该能够获取任务列表', () => {
      const quest = new SpellEntity(1, 'QUEST_TEST', 1, 2);
      const secret = new SpellEntity(2, 'SECRET_TEST', 1, 3);
      
      (quest as any).isQuest = true;
      (secret as any).isSecret = true;
      
      secretZone.add(quest);
      secretZone.add(secret);
      
      const quests = secretZone.getQuests();
      expect(quests).toHaveLength(1);
      expect(quests[0]).toBe(quest);
    });

    test('不应该超过最大奥秘数量', () => {
      // 添加5个奥秘（最大容量）
      for (let i = 1; i <= 5; i++) {
        const secret = new SpellEntity(i, `SECRET_TEST${i}`, 1, 1);
        (secret as any).isSecret = true;
        secretZone.add(secret);
      }
      
      expect(secretZone.isFull()).toBe(true);
      expect(secretZone.getCount()).toBe(5);
      
      // 尝试添加第6个奥秘
      const extraSecret = new SpellEntity(6, 'SECRET_EXTRA', 1, 1);
      (extraSecret as any).isSecret = true;
      expect(() => secretZone.add(extraSecret)).toThrow();
    });
  });

  describe('区域基础功能', () => {
    let zone: DeckZone;

    beforeEach(() => {
      zone = new DeckZone();
    });

    test('应该正确管理实体位置', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      zone.add(card1);
      zone.add(card2, 0); // 插入到位置0
      zone.add(card3);
      
      expect(zone.get(0)).toBe(card2);
      expect(zone.get(1)).toBe(card1);
      expect(zone.get(2)).toBe(card3);
    });

    test('应该正确移除实体', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      zone.add(card1);
      zone.add(card2);
      zone.add(card3);
      
      const removedCard = zone.remove(card2);
      expect(removedCard).toBe(true);
      expect(zone.getCount()).toBe(2);
      expect(zone.contains(card2)).toBe(false);
    });

    test('应该正确按位置移除实体', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      zone.add(card1);
      zone.add(card2);
      zone.add(card3);
      
      const removedCard = zone.removeAt(1);
      expect(removedCard).toBe(card2);
      expect(zone.getCount()).toBe(2);
      expect(zone.get(0)).toBe(card1);
      expect(zone.get(1)).toBe(card3);
    });

    test('应该正确查找实体', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      zone.add(card1);
      zone.add(card2);
      zone.add(card3);
      
      const foundCard = zone.find(card => card.cost === 3);
      expect(foundCard).toBe(card2);
    });

    test('应该正确过滤实体', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 2);
      
      zone.add(card1);
      zone.add(card2);
      zone.add(card3);
      
      const filteredCards = zone.filter(card => card.cost === 2);
      expect(filteredCards).toHaveLength(2);
      expect(filteredCards).toContain(card1);
      expect(filteredCards).toContain(card3);
    });

    test('应该正确按入场顺序获取实体', () => {
      const card1 = new SpellEntity(1, 'SPELL_TEST1', 1, 2);
      const card2 = new SpellEntity(2, 'SPELL_TEST2', 1, 3);
      const card3 = new SpellEntity(3, 'SPELL_TEST3', 1, 4);
      
      // 设置不同的入场回合
      card1.setTag('NUM_TURNS_IN_PLAY', 1);
      card2.setTag('NUM_TURNS_IN_PLAY', 2);
      card3.setTag('NUM_TURNS_IN_PLAY', 1);
      
      zone.add(card1);
      zone.add(card2);
      zone.add(card3);
      
      const orderedCards = zone.getByPlayOrder();
      expect(orderedCards[0]).toBe(card1); // 相同回合，ID较小
      expect(orderedCards[1]).toBe(card3); // 相同回合，ID较大
      expect(orderedCards[2]).toBe(card2); // 较晚回合
    });
  });
});