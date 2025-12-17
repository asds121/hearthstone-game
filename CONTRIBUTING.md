CONTRIBUTING.md
 
贡献原则
 
- 聚焦核心：优先完善「游戏引擎核心逻辑」「基础卡牌效果」「测试覆盖」，暂不接受非核心功能（如可视化、国际化）的大额PR
- 轻量化迭代：单个PR聚焦1个小功能/1类Bug，代码量控制在200行内，便于快速评审
- 规范先行：遵循项目现有TypeScript风格、目录结构，不引入额外依赖
 
贡献方式
 
1.代码贡献：修复Bug、补充核心功能、完善测试用例
2.文档贡献：补充注释、优化API文档、完善使用示例
3.反馈贡献：通过Issue提交Bug报告、功能建议
 
开发流程
 
1. 仓库操作
 
- Fork本仓库到个人账号
- 基于main分支创建新分支，命名规范：
- Bug修复：fix/问题描述（例：fix/card-effect-loop）
- 功能开发：feat/功能名称（例：feat/taunt-mechanic）
- 文档优化：docs/优化内容（例：docs/core-flow-chart）
 
2. 本地开发步骤
 
bash
  
git clone https://github.com/你的用户名/hearthstone-game.git
cd hearthstone-game
npm install
npm run dev
npm run lint
npm run test
# 文档修改后执行
npm run docs


 
3. 提交规范
 
- 提交信息格式：类型(模块): 具体描述
- 示例：feat(card): 实现嘲讽随从战斗逻辑、fix(battle): 修复随从血量计算错误、docs(guide): 补充核心流程说明
- 类型可选：feat（新功能）、fix（Bug修复）、docs（文档修改）、test（测试相关）、refactor（代码重构）
 
4. 提交PR
 
- 目标分支：main（仅main分支接受PR）
- PR描述需包含：修改核心内容（1-2句）、实现思路（简要说明）、测试情况（是否通过所有测试）
 
注意事项
 
- 不修改项目基础工具链配置（ESLint、Jest、tsconfig.json）
- 新增核心逻辑必须配套测试用例，核心模块测试覆盖率≥80%
- 禁止提交冗余文件（如node_modules、IDE配置文件）
- 关键逻辑需添加清晰注释，复杂函数标注参数/返回值