/**
 * 《炉石传说》主程序 - 新版规则集兼容实现
 * 
 * 本文件展示了如何使用新的游戏引擎
 */

import { GameApplication } from './application';
import { GameState } from './domain';

/**
 * 创建测试卡组
 */
function createTestDecks() {
  // 玩家1的卡组 - 快攻卡组
  const player1Deck = [
    'MINION_LIGHTWARDEN', 'MINION_LIGHTWARDEN', 'MINION_LIGHTWARDEN',
    'MINION_NORTHSHIRE', 'MINION_NORTHSHIRE', 'MINION_NORTHSHIRE',
    'MINION_DIRE_WOLF', 'MINION_DIRE_WOLF', 'MINION_DIRE_WOLF',
    'MINION_DARK_IRON_DWARF', 'MINION_DARK_IRON_DWARF', 'MINION_DARK_IRON_DWARF',
    'MINION_DEFENDER_OF_ARGUS', 'MINION_DEFENDER_OF_ARGUS',
    'MINION_LEEROY', 'MINION_LEEROY',
    'SPELL_POWER_WORD_SHIELD', 'SPELL_POWER_WORD_SHIELD', 'SPELL_POWER_WORD_SHIELD',
    'SPELL_DIVINE_SPIRIT', 'SPELL_DIVINE_SPIRIT',
    'SPELL_INNER_FIRE', 'SPELL_INNER_FIRE', 'SPELL_INNER_FIRE',
    'SPELL_HOLY_NOVA', 'SPELL_HOLY_NOVA',
    'WEAPON_SHADOW_WORD_PAIN'
  ];

  // 玩家2的卡组 - 控制卡组
  const player2Deck = [
    'MINION_ACOLYTE_OF_PAIN', 'MINION_ACOLYTE_OF_PAIN', 'MINION_ACOLYTE_OF_PAIN',
    'MINION_CULT_MASTER', 'MINION_CULT_MASTER',
    'MINION_SLUDGE_BELCHER', 'MINION_SLUDGE_BELCHER',
    'MINION_SUNWALKER', 'MINION_SUNWALKER',
    'MINION_RAGNAROS', 'MINION_RAGNAROS',
    'MINION_YSERAWAKENED', 'MINION_YSERAWAKENED',
    'SPELL_POLYMORPH', 'SPELL_POLYMORPH', 'SPELL_POLYMORPH',
    'SPELL_FIREBALL', 'SPELL_FIREBALL', 'SPELL_FIREBALL',
    'SPELL_FLAMESTRIKE', 'SPELL_FLAMESTRIKE',
    'SPELL_PYROBLAST',
    'SECRET_COUNTERSPELL', 'SECRET_ICE_BARRIER', 'SECRET_MIRROR_ENTITY'
  ];

  return { player1Deck, player2Deck };
}

/**
 * 主游戏类
 */
class HearthstoneGame {
  private gameApplication: GameApplication;
  private gameState: GameState;

  constructor() {
    this.gameApplication = new GameApplication();
    this.gameState = this.gameApplication.getGameState() as GameState;
  }

  /**
   * 开始新游戏
   */
  startNewGame(): void {
    console.log('🎮 开始新的炉石传说游戏！\n');

    const { player1Deck, player2Deck } = createTestDecks();
    this.gameApplication.initializeGame(player1Deck, player2Deck);

    console.log('\n✅ 游戏初始化完成！');
    this.displayInitialState();
  }

  /**
   * 显示初始状态
   */
  private displayInitialState(): void {
    console.log('\n📊 初始游戏状态：');
    this.gameApplication.displayGameState();
  }

  public displayGameState(): void {
    this.gameApplication.displayGameState();
  }

  /**
   * 模拟一个完整的回合
   */
  simulateFullTurn(): void {
    console.log('\n🎲 模拟完整回合...\n');

    // 开始回合
    this.gameApplication.startGame();
    this.gameApplication.displayGameState();

    // 模拟一些操作
    const t1 = setTimeout(() => this.simulatePlayerActions(), 2000);
    if (typeof (t1 as any).unref === 'function') (t1 as any).unref();
  }

  /**
   * 模拟玩家操作
   */
  private simulatePlayerActions(): void {
    const currentPlayer = this.gameApplication.getCurrentPlayer()!;
    const handCards = this.gameApplication.getHandCards(currentPlayer.controller);
    const battlefieldMinions = this.gameApplication.getBattlefieldMinions(currentPlayer.controller);

    console.log('\n🎯 模拟玩家操作...');

    // 尝试打出一张手牌
    if (handCards.length > 0) {
      const cardToPlay = handCards[0];
      console.log(`尝试打出卡牌: ${cardToPlay.cardId}`);
      
      const success = this.gameApplication.playCard(0);
      if (success) {
        console.log('✅ 卡牌使用成功');
      } else {
        console.log('❌ 卡牌使用失败');
      }
    }

    // 尝试攻击
    const readyMinions = battlefieldMinions.filter(m => m.canAttackNow);
    if (readyMinions.length > 0) {
      const attacker = readyMinions[0];
      const opponentMinions = this.gameApplication.getBattlefieldMinions(currentPlayer.controller === 1 ? 2 : 1);
      
      if (opponentMinions.length > 0) {
        const target = opponentMinions[0];
        console.log(`${attacker.cardId} 攻击 ${target.cardId}`);
        
        const attackSuccess = this.gameApplication.attack(attacker.id, target.id);
        if (attackSuccess) {
          console.log('✅ 攻击成功');
        } else {
          console.log('❌ 攻击失败');
        }
      }
    }

    // 结束回合
    const t2 = setTimeout(() => {
      this.gameApplication.endTurn();
      this.gameApplication.displayGameState();
    }, 3000);
    if (typeof (t2 as any).unref === 'function') (t2 as any).unref();
  }

  /**
   * 运行游戏循环
   */
  runGameLoop(maxTurns: number = 10): void {
    console.log('\n🔄 开始游戏循环...\n');

    let currentTurn = 0;
    const gameLoop = () => {
      if (currentTurn >= maxTurns) {
        console.log('\n⏰ 达到最大回合数，游戏结束！');
        return;
      }

      if (this.checkGameEnd()) {
        return;
      }

      this.simulateFullTurn();
      currentTurn++;

      // 继续下一回合
      const t3 = setTimeout(gameLoop, 8000);
      if (typeof (t3 as any).unref === 'function') (t3 as any).unref();
    };

    gameLoop();
  }

  /**
   * 检查游戏结束
   */
  private checkGameEnd(): boolean {
    // 简化版本，实际应该调用游戏引擎的检查方法
    const players = Array.from(this.gameState.players.values());
    
    for (const player of players) {
      const hero = this.gameApplication.getHero(player.controller);
      if (hero && hero.currentHealth <= 0) {
        const winnerId = player.controller === 1 ? 2 : 1;
        console.log(`\n🎉 游戏结束！玩家${winnerId}获胜！`);
        return true;
      }
    }
    
    return false;
  }

  /**
   * 显示详细的游戏统计
   */
  displayGameStats(): void {
    console.log('\n📈 游戏统计：');
    
    const players = Array.from(this.gameState.players.values());
    players.forEach(player => {
      console.log(`\n玩家 ${player.controller}:`);
      console.log(`- 总回合数: ${this.gameApplication.getCurrentTurn()}`);
      console.log(`- 墓地中的卡牌: ${this.gameState.zones.get('GRAVEYARD')?.getCount() || 0}`);
      console.log(`- 死亡记录: ${this.gameState.deathRecords.filter(r => r.controller === player.controller).length}`);
    });
  }
}

/**
 * 运行示例游戏
 */
function runExampleGame(): void {
  console.log('🔥 炉石传说 - 新版规则集演示\n');
  console.log('=====================================\n');

  const game = new HearthstoneGame();

  // 开始新游戏
  game.startNewGame();

  // 运行几个回合
  const t4 = setTimeout(() => {
    game.runGameLoop(3);
  }, 3000);
  if (typeof (t4 as any).unref === 'function') (t4 as any).unref();

  // 显示最终统计
  const t5 = setTimeout(() => {
    game.displayGameStats();
  }, 25000);
  if (typeof (t5 as any).unref === 'function') (t5 as any).unref();
}

/**
 * 运行特定测试
 */
function runSpecificTests(): void {
  console.log('🧪 炉石传说 - 特定机制测试\n');
  console.log('=====================================\n');

  const game = new HearthstoneGame();

  // 开始新游戏
  game.startNewGame();

  // 显示游戏状态
  const t6 = setTimeout(() => {
    game.displayGameState();
  }, 2000);
  if (typeof (t6 as any).unref === 'function') (t6 as any).unref();
}

/**
 * 运行交互式演示
 */
function runInteractiveDemo(): void {
  console.log('🎮 炉石传说 - 交互式演示\n');
  console.log('=====================================\n');
  console.log('可用的命令：');
  console.log('- start: 开始新游戏');
  console.log('- turn: 执行一个完整回合');
  console.log('- status: 显示游戏状态');
  console.log('- test: 运行特定测试');
  console.log('- quit: 退出游戏\n');

  const game = new HearthstoneGame();
  let gameStarted = false;

  // 简化的命令行接口
  const commands = {
    start: () => {
      if (!gameStarted) {
        game.startNewGame();
        gameStarted = true;
      } else {
        console.log('游戏已经开始！');
      }
    },
    turn: () => {
      if (gameStarted) {
        game.simulateFullTurn();
      } else {
        console.log('请先开始游戏！');
      }
    },
    status: () => {
      if (gameStarted) {
        game.displayGameState();
      } else {
        console.log('请先开始游戏！');
      }
    },
    test: () => {
      if (gameStarted) {
        console.log('运行特定测试...');
      } else {
        console.log('请先开始游戏！');
      }
    },
    quit: () => {
      console.log('👋 感谢游戏！再见！');
      process.exit(0);
    }
  };

  // 自动演示
  console.log('\n🎬 开始自动演示...\n');
  
  const t7 = setTimeout(() => commands.start(), 1000);
  if (typeof (t7 as any).unref === 'function') (t7 as any).unref();
  const t8 = setTimeout(() => commands.turn(), 4000);
  if (typeof (t8 as any).unref === 'function') (t8 as any).unref();
  const t9 = setTimeout(() => commands.status(), 8000);
  if (typeof (t9 as any).unref === 'function') (t9 as any).unref();
  const t10 = setTimeout(() => commands.quit(), 15000);
  if (typeof (t10 as any).unref === 'function') (t10 as any).unref();
}

// ===== 主程序 =====

// 根据命令行参数选择运行模式
const mode = process.argv[2] || 'example';

switch (mode) {
  case 'test':
    runSpecificTests();
    break;
  case 'interactive':
    runInteractiveDemo();
    break;
  case 'example':
  default:
    runExampleGame();
    break;
}