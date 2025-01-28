import {
  ItemPropsNormalArgs,
  ItemPropsHasEffectArgs,
} from "../../Typing/item-args";
import {
  ItemPropsNormalInterface,
  ItemPropsHasEffectInterface,
  PropertyValueInterface,
} from "../../Typing/item-class";
import {
  EffectScenario,
  EffectType,
  EffectTarget,
  PropertyType,
  PropertyEffectCategory,
} from "../../Typing/enum-cfg";
import chalk from "chalk";

// 物品——普通（无效果）
class ItemPropsNormal implements ItemPropsNormalInterface {
  id: string; // 全局ID
  label: string; // 名称
  desc: string | null; // 描述
  price: number; // 价值
  type: string | string[]; // 类型
  icon: string; // 图标
  count: number; // 数量
  stackable: boolean; // 可堆叠
  stackMax: number; // 可堆叠最大数值
  quality?: number; // 品质 1-5星，先限制在种植里或者烹饪里
  quality_price?: number; // 品质的增值，每半颗心增值多少钱

  constructor(args: ItemPropsNormalArgs) {
    this.id = args[0];
    this.label = args[1];
    this.desc = args[2];
    this.price = args[3];
    this.type = args[4];
    this.icon = args[5];
    this.count = args[6];
    this.stackable = args[7];
    this.stackMax = args[8];
    if (args[9]) this.quality = args[9];
    if (args[10]) this.quality_price = args[10];
  }
  // 获取综合物品价格
  getQualityPrice(): number | void {
    // 以0.5星为基准，每多0.5星，多0.2倍品质价+物品价
    if (this.quality && this.quality_price) {
      return Math.floor(
        this.price +
          (this.quality / 0.5 - 1) * 0.2 * (this.quality_price + this.price)
      );
    }
  }
}
// 物品——普通（有效果）
class ItemPropsHasEffect implements ItemPropsHasEffectInterface {
  id: string; // 全局ID
  label: string; // 名称
  desc: string | null; // 描述
  price: number; // 价值
  type: string | string[]; // 类型
  icon: string; // 图标
  count: number; // 数量
  stackable: boolean; // 可堆叠
  stackMax: number; // 可堆叠最大数值
  effect_limit: EffectScenario[]; // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType; // 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget; // 作用目标 玩家player、建筑building，队伍team、等等
  value: PropertyValueInterface[]; // 效果数值，最终效果受品质的影响，品质有加成
  set_need_num?: number | null; // 套装效果生效需要的套装数
  quality?: number; // 品质 1-5星，先限制在种植里或者烹饪里
  quality_price?: number; // 品质的增值，每半颗心增值多少钱

  constructor(args: ItemPropsHasEffectArgs) {
    this.id = args[0];
    this.label = args[1];
    this.desc = args[2];
    this.price = args[3];
    this.type = args[4];
    this.icon = args[5];
    this.count = args[6];
    this.stackable = args[7];
    this.stackMax = args[8];
    this.effect_limit = args[9];
    this.effect_type = args[10];
    this.target = args[11];
    this.value = args[12].map((e) => {
      const ele = {
        property_type: e[0], // 属性类型
        type: e[1], // 正面或者负面效果
        unit: e[2], // 根据不同单位参与不统计算
        val: e[3], // 效果数值
      } as PropertyValueInterface;
      if (e[4]) ele.duration = e[4];
      return ele;
    });
    if (args[13]) this.quality = args[13];
    if (args[14]) this.quality_price = args[14];
  }
  // 获取综合物品价格
  getQualityPrice(): number | void {
    // 以0.5星为基准，每多0.5星，多0.2倍品质价+物品价
    if (this.quality && this.quality_price) {
      return Math.floor(
        this.price +
          (this.quality / 0.5 - 1) * 0.2 * (this.quality_price + this.price)
      );
    }
  }
}

export const item_props_normal_list: ItemPropsNormalArgs[] = [
  [
    "ITEM_NORMAL_0001",
    "废旧的纸张",
    "",
    10,
    "props",
    "token--props",
    1,
    true,
    30,
  ],
  [
    "ITEM_NORMAL_0002",
    "黏菌体碎片",
    "",
    15,
    "props",
    "token--props",
    1,
    true,
    30,
  ],
];

export const createItemPropsNormal = (): ItemPropsNormalInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`普通-无效果`) + " 信息");
  const ITEM_PROPS_NORMAL_LIST: ItemPropsNormalInterface[] =
    item_props_normal_list.map(
      (item_props_normal) => new ItemPropsNormal(item_props_normal)
    );
  console.dir(ITEM_PROPS_NORMAL_LIST, { depth: null });
  return ITEM_PROPS_NORMAL_LIST;
};

createItemPropsNormal();

export const item_props_has_effect_list: ItemPropsHasEffectArgs[] = [
  [
    "ITEM-HAS-EFFECT_0001",
    "绷带",
    "",
    10,
    "props",
    "token--props",
    1,
    true,
    30,
    [EffectScenario.COMBAT, EffectScenario.NORMAL],
    EffectType.IMMEDIATE,
    EffectTarget.PLAYER,
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, "%", 10],
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 5, "00-00-30"],
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0002",
    "止血凝胶",
    "",
    10,
    "props",
    "token--props",
    1,
    true,
    30,
    [EffectScenario.COMBAT, EffectScenario.NORMAL],
    EffectType.IMMEDIATE,
    EffectTarget.PLAYER,
    [[PropertyType.HP, PropertyEffectCategory.BUFF, "%", 2.5, "00-00-10"]],
  ],
];

export const createItemPropsHasEffect = (): ItemPropsHasEffectInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`普通-有效果`) + " 信息");
  const ITEM_PROPS_HAS_EFFECT_LIST: ItemPropsHasEffectInterface[] =
    item_props_has_effect_list.map(
      (item_props_has_effect) => new ItemPropsHasEffect(item_props_has_effect)
    );
  console.dir(ITEM_PROPS_HAS_EFFECT_LIST, { depth: null });
  return ITEM_PROPS_HAS_EFFECT_LIST;
};

createItemPropsHasEffect();
