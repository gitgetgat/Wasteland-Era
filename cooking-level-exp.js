/**
 * 烹饪模块升级经验模型
 * 从0级到100级，分为10个阶段
 * 每升一级所需经验逐渐增加
 */

// 基础经验值（1级所需经验）
const baseExp = 150;

// 阶段系数（每个阶段的经验增长倍率）
const stageMultipliers = [
  1.0,    // 第1阶段 (0-10级)
  2.5,    // 第2阶段 (11-20级)
  6.0,    // 第3阶段 (21-30级)
  15.0,   // 第4阶段 (31-40级)
  40.0,   // 第5阶段 (41-50级)
  100.0,  // 第6阶段 (51-60级)
  250.0,  // 第7阶段 (61-70级)
  600.0,  // 第8阶段 (71-80级)
  1500.0, // 第9阶段 (81-90级)
  4000.0  // 第10阶段 (91-100级)
];

// 阶段内经验增长系数
const inStageGrowthRate = 1.25;

// 计算特定等级所需的升级经验
function calculateLevelExp(level) {
  if (level <= 0 || level > 100) {
    return "等级必须在1-100之间";
  }

  // 确定当前等级所在阶段
  const stage = Math.floor((level - 1) / 10);
  // 确定当前等级在阶段内的位置 (0-9)
  const levelInStage = (level - 1) % 10;

  // 计算基础阶段经验
  const stageBaseExp = baseExp * stageMultipliers[stage];

  // 计算阶段内经验增长
  const expNeeded = Math.round(stageBaseExp * Math.pow(inStageGrowthRate, levelInStage));

  return expNeeded;
}

// 输出所有等级的升级经验
function printAllLevelExp() {
  console.log("烹饪模块升级经验表：");
  console.log("====================");

  for (let stage = 0; stage < 10; stage++) {
    const startLevel = stage * 10 + 1;
    const endLevel = (stage + 1) * 10;

    console.log(`\n第${stage + 1}阶段 (${startLevel}-${endLevel}级)：`);
    console.log("--------------------");

    for (let level = startLevel; level <= endLevel; level++) {
      const expNeeded = calculateLevelExp(level);
      console.log(`${level - 1}级 → ${level}级：需要 ${expNeeded} 经验`);
    }
  }
}

// 输出每个阶段的经验区间概览
function printStageOverview() {
  console.log("\n烹饪模块升级经验阶段概览：");
  console.log("==========================");

  for (let stage = 0; stage < 10; stage++) {
    const startLevel = stage * 10 + 1;
    const endLevel = (stage + 1) * 10;

    const startExp = calculateLevelExp(startLevel);
    const endExp = calculateLevelExp(endLevel);

    console.log(`第${stage + 1}阶段 (${startLevel - 1}级 → ${endLevel}级)：${startExp} - ${endExp} 经验`);
  }
}

// 执行输出
printAllLevelExp();
printStageOverview();

// 导出函数以便其他模块使用
module.exports = {
  calculateLevelExp,
  printAllLevelExp,
  printStageOverview
};