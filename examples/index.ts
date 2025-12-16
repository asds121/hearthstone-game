/**
 * 示例导出文件
 */

export { runBasicGameExample, runAdvancedGameExample } from './basic-game';
import { runBasicGameExample, runAdvancedGameExample } from './basic-game';

/**
 * 运行所有示例
 */
export function runAllExamples() {
  console.log('🎮 运行所有游戏示例...\n');
  
  // 运行基础示例
  runBasicGameExample();
  
  // 延迟后运行高级示例
  setTimeout(() => {
    console.log('\n' + '='.repeat(50) + '\n');
    runAdvancedGameExample();
  }, 30000);
}

/**
 * 运行特定示例
 */
export function runExample(exampleName: 'basic' | 'advanced') {
  switch (exampleName) {
    case 'basic':
      runBasicGameExample();
      break;
    case 'advanced':
      runAdvancedGameExample();
      break;
    default:
      console.log(`未知的示例: ${exampleName}`);
      console.log('可用示例: basic, advanced');
  }
}