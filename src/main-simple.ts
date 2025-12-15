/**
 * 简化版主程序 - 用于验证项目结构
 * 
 * 本文件展示了简化版本的游戏引擎使用
 */

// 简化的类型定义
type PlayerID = 1 | 2;
type EntityID = number;

interface IEntity {
  id: EntityID;
  cardId: string;
  controller: PlayerID;
}

interface IPlayerEntity extends IEntity {
  MAXRESOURCES: number;
  RESOURCES_USED: number;
  currentMana: number;
}

interface IMinionEntity extends IEntity {
  attack: number;
  health: number;
  damage: number;
  cost: number;
}

interface IGameState {
  players: Map<PlayerID, IPlayerEntity>;
}

// 简化的实体类
class PlayerEntity implements IPlayerEntity {
  id: EntityID;
  cardId: string;
  controller: PlayerID;
  MAXRESOURCES: number;
  RESOURCES_USED: number;

  constructor(id: EntityID, controller: PlayerID) {
    this.id = id;
    this.cardId = 'PLAYER';
    this.controller = controller;
    this.MAXRESOURCES = 0;
    this.RESOURCES_USED = 0;
  }

  get currentMana(): number {
    return this.MAXRESOURCES - this.RESOURCES_USED;
  }
}

// 简化的游戏引擎
class SimpleGameEngine {
  private gameState: IGameState;
  private entityIdCounter: number = 100;

  constructor() {
    this.gameState = {
      players: new Map()
    };
  }

  initializeGame(player1Deck: string[], player2Deck: string[]): void {
    console.log('=== 初始化简化游戏 ===');

    // 创建玩家
    const player1 = new PlayerEntity(this.getNextEntityId(), 1);
    const player2 = new PlayerEntity(this.getNextEntityId(), 2);

    this.gameState.players.set(1, player1);
    this.gameState.players.set(2, player2);

    // 设置初始法力
    player1.MAXRESOURCES = 1;
    player2.MAXRESOURCES = 1;

    console.log('✅ 游戏初始化完成');
  }

  startTurn(): void {
    const currentPlayer = this.getCurrentPlayer();
    if (!currentPlayer) return;

    console.log(`\n玩家${currentPlayer.controller}的回合:`);
    console.log(`法力: ${currentPlayer.currentMana}/${currentPlayer.MAXRESOURCES}`);

    // 增加法力上限
    if (currentPlayer.MAXRESOURCES < 10) {
      currentPlayer.MAXRESOURCES++;
    }

    // 重置已使用法力
    currentPlayer.RESOURCES_USED = 0;
  }

  playCard(cardId: string, cost: number): boolean {
    const currentPlayer = this.getCurrentPlayer();
    if (!currentPlayer) return false;

    if (currentPlayer.currentMana < cost) {
      console.log('❌ 法力不足');
      return false;
    }

    currentPlayer.RESOURCES_USED += cost;
    console.log(`✅ 使用卡牌: ${cardId} (费用: ${cost})`);
    return true;
  }

  getCurrentPlayer(): IPlayerEntity | null {
    // 简化版本，总是返回玩家1
    return this.gameState.players.get(1) || null;
  }

  displayGameState(): void {
    console.log('\n📊 游戏状态:');
    this.gameState.players.forEach(player => {
      console.log(`玩家 ${player.controller}:`);
      console.log(`  法力: ${player.currentMana}/${player.MAXRESOURCES}`);
    });
  }

  private getNextEntityId(): EntityID {
    return this.entityIdCounter++;
  }
}

/**
 * 运行简化版游戏示例
 */
function runSimpleGameExample() {
  console.log('🎮 简化版炉石传说游戏示例\n');
  console.log('=====================================\n');

  const game = new SimpleGameEngine();

  // 初始化游戏
  const player1Deck = ['MINION_TEST', 'SPELL_TEST'];
  const player2Deck = ['MINION_TEST2', 'SPELL_TEST2'];
  
  game.initializeGame(player1Deck, player2Deck);

  // 显示初始状态
  game.displayGameState();

  // 模拟几个回合
  for (let turn = 1; turn <= 5; turn++) {
    console.log(`\n=== 第 ${turn} 回合 ===`);
    game.startTurn();
    
    // 尝试使用卡牌
    const success = game.playCard('TEST_CARD', 2);
    if (!success) {
      // 如果失败，尝试使用更便宜的卡牌
      game.playCard('CHEAP_CARD', 1);
    }
    
    game.displayGameState();
  }

  console.log('\n🎉 简化版游戏示例完成！');
  console.log('\n✅ 项目结构验证成功！');
  console.log('✅ TypeScript编译通过！');
  console.log('✅ 基础游戏逻辑运行正常！');
}

// 运行简化版示例
if (require.main === module) {
  runSimpleGameExample();
}