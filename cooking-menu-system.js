/**
 * 烹饪模块菜单系统
 * 基于经验等级模型设计的菜单解锁与奖励系统
 * 分为10个阶段，菜单复杂度逐渐提高
 */

const { calculateLevelExp } = require('./cooking-level-exp.js');

// 菜单基础数据结构
const { cookingMenus } = require('./cooking-menu-data.js');
// 获取指定等级可解锁的菜单
function getAvailableMenus(level) {
  let availableMenus = [];

  for (let stage = 1; stage <= 10; stage++) {
    const stageMenus = cookingMenus[`stage${stage}`];

    for (let menu of stageMenus) {
      if (menu.level <= level) {
        availableMenus.push(menu);
      }
    }
  }

  return availableMenus;
}

// 获取指定等级新解锁的菜单
function getNewlyUnlockedMenus(level) {
  let newMenus = [];

  for (let stage = 1; stage <= 10; stage++) {
    const stageMenus = cookingMenus[`stage${stage}`];

    for (let menu of stageMenus) {
      if (menu.level === level) {
        newMenus.push(menu);
      }
    }
  }

  return newMenus;
}

// 烹饪指定菜单
function cookDish(menuName, playerSkill) {
  // 查找菜单
  let targetMenu = null;

  for (let stage = 1; stage <= 10; stage++) {
    const stageMenus = cookingMenus[`stage${stage}`];

    for (let menu of stageMenus) {
      if (menu.name === menuName) {
        targetMenu = menu;
        break;
      }
    }

    if (targetMenu) break;
  }

  if (!targetMenu) {
    return {
      success: false,
      message: "未找到该菜单"
    };
  }

  // 计算烹饪成功率
  // playerSkill是玩家当前的烹饪技能等级
  const successRate = Math.min(95, Math.max(30, 100 - (targetMenu.difficulty * 10) + (playerSkill * 0.8)));
  const roll = Math.random() * 100;

  if (roll <= successRate) {
    // 烹饪成功
    return {
      success: true,
      expGained: targetMenu.expReward(),
      coinsGained: targetMenu.coinReward,
      message: `成功烹饪了${targetMenu.name}！获得${targetMenu.expReward()}经验和${targetMenu.coinReward}金币。`
    };
  } else {
    // 烹饪失败
    return {
      success: false,
      expGained: Math.round(targetMenu.expReward() * 0.1),
      coinsGained: 0,
      message: `烹饪${targetMenu.name}失败了...获得${Math.round(targetMenu.expReward() * 0.1)}经验。`
    };
  }
}

// 导出函数以便其他模块使用
module.exports = {
  cookingMenus,
  getAvailableMenus,
  getNewlyUnlockedMenus,
  cookDish
};