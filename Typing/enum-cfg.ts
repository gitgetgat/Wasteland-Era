// 类型type
export enum PropertyType {
  HP = "hp", // 生命值
  ATK = "atk", // 攻击
  DEF = "def", // 防御
  ATKSPD = "atkSpd", // 攻击速度
  VAMP = "vamp", // 吸血
  CRITRATE = "critRate", // 暴击率
  CRITDMG = "critDmg", // 暴击伤害
  DODGE = "dodge", // 闪避
  COLLECTION_VOLUME = "collectionVolume", // 收集量
}

// 效果场景type
export enum EffectScenario {
  NORMAL = "normal", // 平时
  COMBAT = "combat", // 战斗
  HUNT = "hunt", // 打猎
  COLLECT = "collect", // 采集
  RESEARCH = "research", // 研究
}
// 效果场景type
export enum Season {
  SPRING = "spring",
  SUMMER = "summer",
  FALL = "fall",
  WINTER = "winter",
}

// 装备部位type
export enum EquipmentCategory {
  WEAPON = "Weapon", // 武器
  ARMOR = "Armor", // 盔甲
  SHIELD = "Shield", // 盾
  HELMET = "Helmet", // 头盔
  BOOT = "boot", // 脚部
  BELT = "belt", // 腰带
  CLOAK = "cloak", // 披风
  RING_1 = "ring_1", // 戒指1
  RING_2 = "ring_2", // 戒指2
}

// 属性效果类别type
export enum PropertyEffectCategory {
  BUFF = "buff", // 正面
  DEBUFF = "debuff", // 负面
  NORMAL = "normal", // 普通
}

// 效果类别type
export enum EffectType {
  IMMEDIATE = "immediate", // 即时效果
  CONTINUED = "continued", // 、持续效果
}

// 效果目标type
export enum EffectTarget {
  PLAYER = "player", // 玩家
  ENEMY = "enemy", // 敌人
  BUILDING = "building", // 建筑物
  TEAM = "team", // 、持续效果
}

// 配方类型
export enum FormulaType {
  EQUIPMENT = "equipment", // 装备配方
  DRUGS = "drugs", // 装备配方
  ITEM = "item", // 物品配方
  SKILL = "skill", // 技能配方
  BLUEPRINT = "blueprint", // 蓝图配方
  DISHES = "dishes", // 技能配方
}
