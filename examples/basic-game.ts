/**
 * 基础游戏示例
 * 展示如何使用游戏引擎创建一个简单的游戏
 */

import { GameApplication } from '../src/application';

/**
 * 创建示例卡组
 */
function createSampleDecks() {
  // 玩家1的卡组 - 以随从为主
  const player1Deck = [
    'MINION_LIGHTWARDEN', 'MINION_LIGHTWARDEN',
    'MINION_NORTHSHIRE', 'MINION_NORTHSHIRE',
    'MINION_DIRE_WOLF', 'MINION_DIRE_WOLF',
    'MINION_DARK_IRON_DWARF', 'MINION_DARK_IRON_DWARF',
    'MINION_DEFENDER_OF_ARGUS', 'MINION_DEFENDER_OF_ARGUS',
    'SPELL_POWER_WORD_SHIELD', 'SPELL_POWER_WORD_SHIELD',
    'SPELL_DIVINE_SPIRIT', 'SPELL_HOLY_NOVA'
  ];

  // 玩家2的卡组 - 以法术为主
  const player2Deck = [
    'MINION_ACOLYTE_OF_PAIN', 'MINION_ACOLYTE_OF_PAIN',
    'MINION_CULT_MASTER', 'MINION_CULT_MASTER',
    'MINION_SLUDGE_BELCHER', 'MINION_SLUDGE_BELCHER',
    'SPELL_POLYMORPH', 'SPELL_POLYMORPH',
    'SPELL_FIREBALL', 'SPELL_FIREBALL',
    'SPELL_FLAMESTRIKE', 'SPELL_FLAMESTRIKE',
    'SECRET_COUNTERSPELL', 'SECRET_ICE_BARRIER'
  ];

  return { player1Deck, player2Deck };
}

/**
 * 运行基础游戏示例
 */
export function runBasicGameExample() {
  console.log('🎮 基础游戏示例\n');
  console.log('=====================================\n');

  // 创建游戏应用
  const game = new GameApplication();

  // 创建卡组
  const { player1Deck, player2Deck } = createSampleDecks();

  // 初始化游戏
  console.log('初始化游戏...');
  game.initializeGame(player1Deck, player2Deck);
  console.log('✅ 游戏初始化完成\n');

  // 显示初始状态
  console.log('初始游戏状态:');
  game.displayGameState();

  // 开始游戏
  console.log('\n开始游戏...');
  game.startGame();

  // 模拟几个回合
  simulateTurns(game, 3);

  // 显示最终统计
  setTimeout(() => {
    console.log('\n📈 游戏统计:');
    displayGameStats(game);
  }, 20000);
}

/**
 * 模拟几个回合
 */
function simulateTurns(game: GameApplication, numTurns: number) {
  let currentTurn = 0;

  function playNextTurn() {
    if (currentTurn >= numTurns) {
      console.log('\n⏰ 达到指定回合数，模拟结束！');
      return;
    }

    if (game.checkGameEnd()) {
      return;
    }

    console.log(`\n🎲 第 ${currentTurn + 1} 回合模拟...`);

    // 显示当前状态
    game.displayGameState();

    // 模拟玩家操作
    simulatePlayerTurn(game);

    currentTurn++;

    // 继续下一回合
    setTimeout(playNextTurn, 6000);
  }

  playNextTurn();
}

/**
 * 模拟玩家回合
 */
function simulatePlayerTurn(game: GameApplication) {
  const currentPlayer = game.getCurrentPlayer()!;
  const handCards = game.getHandCards(currentPlayer.controller);
  const battlefieldMinions = game.getBattlefieldMinions(currentPlayer.controller);

  console.log(`\n🎯 玩家 ${currentPlayer.controller} 的回合:`);

  // 1. 尝试使用手牌
  if (handCards.length > 0) {
    const cardToPlay = handCards[0];
    console.log(`尝试使用卡牌: ${cardToPlay.cardId}`);

    const success = game.playCard(0);
    if (success) {
      console.log('✅ 卡牌使用成功');
    } else {
      console.log('❌ 卡牌使用失败（可能是法力不足或其他限制）');
    }
  }

  // 2. 尝试攻击
  const readyMinions = battlefieldMinions.filter(m => m.canAttackNow);
  if (readyMinions.length > 0) {
    const attacker = readyMinions[0];
    const opponentMinions = game.getBattlefieldMinions(currentPlayer.controller === 1 ? 2 : 1);

    if (opponentMinions.length > 0) {
      const target = opponentMinions[0];
      console.log(`${attacker.cardId} 攻击 ${target.cardId}`);

      const attackSuccess = game.attack(attacker.id, target.id);
      if (attackSuccess) {
        console.log('✅ 攻击成功');
      } else {
        console.log('❌ 攻击失败（可能是嘲讽限制或其他原因）');
      }
    } else {
      // 没有对手随从，尝试攻击英雄
      const opponentHero = game.getHero(currentPlayer.controller === 1 ? 2 : 1);
      if (opponentHero) {
        console.log(`${attacker.cardId} 攻击对手英雄`);

        const attackSuccess = game.attack(attacker.id, opponentHero.id);
        if (attackSuccess) {
          console.log('✅ 攻击成功');
        } else {
          console.log('❌ 攻击失败');
        }
      }
    }
  }

  // 3. 尝试使用英雄技能
  console.log('尝试使用英雄技能');
  const heroPowerSuccess = game.useHeroPower();
  if (heroPowerSuccess) {
    console.log('✅ 英雄技能使用成功');
  } else {
    console.log('❌ 英雄技能使用失败');
  }

  // 4. 结束回合
  setTimeout(() => {
    console.log('结束回合...');
    game.endTurn();
    game.displayGameState();
  }, 2000);
}

/**
 * 显示游戏统计
 */
function displayGameStats(game: GameApplication) {
  const gameState = game.getGameState();
  const players = Array.from(gameState.players.values());

  players.forEach(player => {
    console.log(`\n玩家 ${player.controller}:`);
    console.log(`- 总回合数: ${game.getCurrentTurn()}`);
    console.log(`- 手牌数量: ${game.getHandCards(player.controller).length}`);
    console.log(`- 战场随从: ${game.getBattlefieldMinions(player.controller).length}`);
    console.log(`- 墓地卡牌: ${gameState.zones.get('GRAVEYARD')?.getCount() || 0}`);
    
    const hero = game.getHero(player.controller);
    if (hero) {
      console.log(`- 英雄生命值: ${hero.currentHealth}/${hero.maxHealth}`);
      console.log(`- 英雄护甲: ${hero.armor}`);
    }
  });

  console.log('\n🎉 游戏示例完成！');
}

/**
 * 运行高级游戏示例（带特殊机制）
 */
export function runAdvancedGameExample() {
  console.log('🧪 高级游戏示例（特殊机制）\n');
  console.log('=====================================\n');

  const game = new GameApplication();
  const { player1Deck, player2Deck } = createSampleDecks();

  game.initializeGame(player1Deck, player2Deck);
  game.startGame();

  // 模拟带有特殊机制的回合
  simulateAdvancedTurns(game, 2);
}

/**
 * 模拟带有特殊机制的回合
 */
function simulateAdvancedTurns(game: GameApplication, numTurns: number) {
  let currentTurn = 0;

  function playAdvancedTurn() {
    if (currentTurn >= numTurns) {
      console.log('\n⏰ 高级示例完成！');
      return;
    }

    console.log(`\n🔥 第 ${currentTurn + 1} 回合（高级机制演示）`);

    // 显示当前状态
    game.displayGameState();

    // 模拟特殊机制
    simulateSpecialMechanics(game);

    currentTurn++;
    setTimeout(playAdvancedTurn, 8000);
  }

  playAdvancedTurn();
}

/**
 * 模拟特殊机制
 */
function simulateSpecialMechanics(game: GameApplication) {
  const currentPlayer = game.getCurrentPlayer()!;
  
  console.log('\n🎯 特殊机制演示:');

  // 1. 演示嘲讽机制
  console.log('1. 嘲讽机制演示');
  simulateTauntMechanic(game);

  // 2. 演示圣盾机制
  console.log('\n2. 圣盾机制演示');
  simulateDivineShieldMechanic(game);

  // 3. 演示剧毒机制
  console.log('\n3. 剧毒机制演示');
  simulatePoisonousMechanic(game);

  // 结束回合
  setTimeout(() => {
    console.log('\n结束回合...');
    game.endTurn();
  }, 5000);
}

/**
 * 模拟嘲讽机制
 */
function simulateTauntMechanic(game: GameApplication) {
  const currentPlayer = game.getCurrentPlayer()!;
  const opponentMinions = game.getBattlefieldMinions(currentPlayer.controller === 1 ? 2 : 1);
  
  if (opponentMinions.length > 0) {
    // 假设第一个随从有嘲讽
    const tauntMinion = opponentMinions[0];
    console.log(`对手有嘲讽随从: ${tauntMinion.cardId}`);
    console.log('必须先攻击嘲讽随从才能攻击其他目标');
  } else {
    console.log('对手没有嘲讽随从，可以自由选择攻击目标');
  }
}

/**
 * 模拟圣盾机制
 */
function simulateDivineShieldMechanic(game: GameApplication) {
  const currentPlayer = game.getCurrentPlayer()!;
  const battlefieldMinions = game.getBattlefieldMinions(currentPlayer.controller);
  
  const divineShieldMinion = battlefieldMinions.find(m => m.getTag('DIVINE_SHIELD'));
  
  if (divineShieldMinion) {
    console.log(`你的随从 ${divineShieldMinion.cardId} 有圣盾`);
    console.log('圣盾可以抵挡第一次伤害');
  } else {
    console.log('当前没有圣盾随从');
  }
}

/**
 * 模拟剧毒机制
 */
function simulatePoisonousMechanic(game: GameApplication) {
  const currentPlayer = game.getCurrentPlayer()!;
  const battlefieldMinions = game.getBattlefieldMinions(currentPlayer.controller);
  
  const poisonousMinion = battlefieldMinions.find(m => m.getTag('POISONOUS'));
  
  if (poisonousMinion) {
    console.log(`你的随从 ${poisonousMinion.cardId} 有剧毒`);
    console.log('剧毒随从的攻击会立即消灭目标');
  } else {
    console.log('当前没有剧毒随从');
  }
}

// 如果直接运行此文件，执行基础示例
if (require.main === module) {
  console.log('运行基础游戏示例...\n');
  runBasicGameExample();
}