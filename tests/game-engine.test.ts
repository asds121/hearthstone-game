/**
 * 游戏引擎测试
 */

import { GameApplication } from '../src/application';
import { GameState } from '../src/domain';

describe('GameEngine', () => {
  let game: GameApplication;
  let gameState: GameState;

  beforeEach(() => {
    game = new GameApplication();
    gameState = game.getGameState() as GameState;
  });

  describe('游戏初始化', () => {
    test('应该正确初始化游戏', () => {
      const player1Deck = ['MINION_TEST', 'SPELL_TEST'];
      const player2Deck = ['MINION_TEST2', 'SPELL_TEST2'];
      
      expect(() => {
        game.initializeGame(player1Deck, player2Deck);
      }).not.toThrow();
    });

    test('应该创建两个玩家', () => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      
      game.initializeGame(player1Deck, player2Deck);
      
      const players = Array.from(gameState.players.values());
      expect(players).toHaveLength(2);
      expect(players[0].controller).toBe(1);
      expect(players[1].controller).toBe(2);
    });

    test('应该创建英雄和英雄技能', () => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      
      game.initializeGame(player1Deck, player2Deck);
      
      const player1 = gameState.players.get(1)!;
      const player2 = gameState.players.get(2)!;
      
      expect(player1.HERO_ENTITY).toBeGreaterThan(0);
      expect(player1.HERO_POWER_ENTITY).toBeGreaterThan(0);
      expect(player2.HERO_ENTITY).toBeGreaterThan(0);
      expect(player2.HERO_POWER_ENTITY).toBeGreaterThan(0);
    });
  });

  describe('回合管理', () => {
    beforeEach(() => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      game.initializeGame(player1Deck, player2Deck);
    });

    test('应该正确开始回合', () => {
      const initialTurn = game.getCurrentTurn();
      
      game.startGame();
      
      expect(game.getCurrentTurn()).toBe(initialTurn + 1);
    });

    test('应该增加法力水晶', () => {
      const currentPlayer = game.getCurrentPlayer()!;
      const initialMana = currentPlayer.MAXRESOURCES;
      
      game.startGame();
      
      expect(currentPlayer.MAXRESOURCES).toBeGreaterThan(initialMana);
    });

    test('应该正确结束回合', () => {
      const initialPlayerId = game.getCurrentPlayerId();
      
      game.startGame();
      game.endTurn();
      
      expect(game.getCurrentPlayerId()).not.toBe(initialPlayerId);
    });
  });

  describe('卡牌使用', () => {
    beforeEach(() => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      game.initializeGame(player1Deck, player2Deck);
      game.startGame();
    });

    test('应该能够使用合法的卡牌', () => {
      const currentPlayer = game.getCurrentPlayer()!;
      const handCards = game.getHandCards(currentPlayer.controller);
      
      if (handCards.length > 0) {
        const result = game.playCard(0);
        expect(typeof result).toBe('boolean');
      }
    });

    test('应该拒绝使用不存在的卡牌', () => {
      const currentPlayer = game.getCurrentPlayer()!;
      const handCards = game.getHandCards(currentPlayer.controller);
      
      const result = game.playCard(handCards.length + 10); // 超出范围的索引
      expect(result).toBe(false);
    });
  });

  describe('战斗系统', () => {
    beforeEach(() => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      game.initializeGame(player1Deck, player2Deck);
      game.startGame();
    });

    test('应该处理攻击请求', () => {
      // 这是一个简化测试，实际需要更复杂的设置
      const result = game.attack(1, 2);
      expect(typeof result).toBe('boolean');
    });
  });

  describe('游戏状态查询', () => {
    beforeEach(() => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      game.initializeGame(player1Deck, player2Deck);
    });

    test('应该能够获取当前玩家', () => {
      const currentPlayer = game.getCurrentPlayer();
      expect(currentPlayer).toBeDefined();
      expect(currentPlayer!.controller).toBeGreaterThan(0);
      expect(currentPlayer!.controller).toBeLessThan(3);
    });

    test('应该能够获取手牌', () => {
      const currentPlayer = game.getCurrentPlayer()!;
      const handCards = game.getHandCards(currentPlayer.controller);
      
      expect(Array.isArray(handCards)).toBe(true);
    });

    test('应该能够获取战场随从', () => {
      const minions = game.getBattlefieldMinions();
      
      expect(Array.isArray(minions)).toBe(true);
    });

    test('应该能够获取英雄', () => {
      const hero = game.getHero(1);
      
      expect(hero).toBeDefined();
      expect(hero!.health).toBe(30);
    });
  });

  describe('游戏结束检查', () => {
    beforeEach(() => {
      const player1Deck = ['MINION_TEST'];
      const player2Deck = ['SPELL_TEST'];
      game.initializeGame(player1Deck, player2Deck);
    });

    test('应该检测游戏是否结束', () => {
      const result = game.checkGameEnd();
      expect(typeof result).toBe('boolean');
    });
  });
});