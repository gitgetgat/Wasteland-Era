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
  // 新增普通物品
  [
    "ITEM_NORMAL_0001",       // id: 物品唯一标识
    "废旧的纸张",             // label: 物品名称
    "这些纸张上有些模糊的文字，或许曾经记录过重要信息。", // desc: 描述文本
    10,                      // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0002",       // id: 物品唯一标识
    "黏菌体碎片",             // label: 物品名称
    "这些碎片来自废土中的黏菌，可能有些特殊用途。", // desc: 描述文本
    15,                      // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0003",       // id: 物品唯一标识
    "生锈的螺丝",             // label: 物品名称
    "这些螺丝虽然生锈，但在废土中仍有修理价值。", // desc: 描述文本
    5,                       // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0004",       // id: 物品唯一标识
    "破旧的电池",             // label: 物品名称
    "电量不足，但可能在紧急时刻派上用场。", // desc: 描述文本
    8,                       // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0005",       // id: 物品唯一标识
    "破损的齿轮",             // label: 物品名称
    "这些齿轮可能在某些机械中仍有用处。", // desc: 描述文本
    12,                      // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0006",       // id: 物品唯一标识
    "旧电线",                 // label: 物品名称
    "这些电线可能用于修复电力系统。", // desc: 描述文本
    7,                       // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0007",       // id: 物品唯一标识
    "废弃的塑料瓶",           // label: 物品名称
    "可以用来储存液体或制作简易工具。", // desc: 描述文本
    3,                       // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0008",       // id: 物品唯一标识
    "生锈的铁钉",             // label: 物品名称
    "这些铁钉在废土中仍有建筑用途。", // desc: 描述文本
    4,                       // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
  ],
  [
    "ITEM_NORMAL_0009",       // id: 物品唯一标识
    "旧报纸",                 // label: 物品名称
    "这些报纸可能包含有用的信息或历史。", // desc: 描述文本
    2,                       // price: 基础价格
    "props",                 // type: 物品类型
    "token--props",          // icon: 图标名称
    1,                       // count: 初始数量
    true,                    // stackable: 是否可堆叠
    9999999999,              // stackMax: 最大堆叠数量
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
  // 新增具有效果的物品
  [
    "ITEM-HAS-EFFECT_0001", // id: 物品唯一标识
    "绷带",                // label: 物品名称
    "用于包扎伤口，快速止血，恢复少量生命值。", // desc: 描述文本
    10,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, "%", 10], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 5, "00-00-30"], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0002", // id: 物品唯一标识
    "止血凝胶",            // label: 物品名称
    "涂抹后可迅速止血，适合战斗中使用。", // desc: 描述文本
    10,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [[PropertyType.HP, PropertyEffectCategory.BUFF, "%", 2.5, "00-00-10"]], // value: 效果数值
  ],
  [
    "ITEM-HAS-EFFECT_0003", // id: 物品唯一标识
    "能量饮料",            // label: 物品名称
    "迅速恢复体力，提升短时间内的行动速度。", // desc: 描述文本
    120,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.ATKSPD, PropertyEffectCategory.BUFF, "%", 15, "00-01-00"], // value: 效果数值
      [PropertyType.VAMP, PropertyEffectCategory.BUFF, "%", 10, "00-01-00"], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0004", // id: 物品唯一标识
    "抗辐射药剂",          // label: 物品名称
    "减少体内辐射积累，适合废土探险者。", // desc: 描述文本
    30,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 20, "00-01-00"], // value: 效果数值
      [PropertyType.HP, PropertyEffectCategory.BUFF, "%", 1, "00-01-00"], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0005", // id: 物品唯一标识
    "急救包",              // label: 物品名称
    "包含基本医疗用品，快速恢复生命值。", // desc: 描述文本
    50,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, "%", 25], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0006", // id: 物品唯一标识
    "防毒面具",            // label: 物品名称
    "提供短时间的毒气防护，适合危险环境。", // desc: 描述文本
    80,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 25, "00-02-00"], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0007", // id: 物品唯一标识
    "夜视仪",              // label: 物品名称
    "在黑暗中提供视野，适合夜间行动。", // desc: 描述文本
    100,                   // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.DODGE, PropertyEffectCategory.BUFF, "%", 20, "00-03-00"], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0008", // id: 物品唯一标识
    "兴奋剂",              // label: 物品名称
    "短时间内提升攻击力和速度，适合战斗。", // desc: 描述文本
    60,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.ATKSPD, PropertyEffectCategory.BUFF, "%", 20, "00-02-00"], // value: 效果数值
      [PropertyType.DODGE, PropertyEffectCategory.BUFF, "%", 15, "00-02-00"], // value: 效果数值
    ],
  ],
  [
    "ITEM-HAS-EFFECT_0009", // id: 物品唯一标识
    "冷却剂",              // label: 物品名称
    "降低体温，适合高温环境使用。", // desc: 描述文本
    40,                    // price: 基础价格
    "props",               // type: 物品类型
    "token--props",        // icon: 图标名称
    1,                     // count: 初始数量
    true,                  // stackable: 是否可堆叠
    9999999999,            // stackMax: 最大堆叠数量
    [EffectScenario.COMBAT, EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE,  // effect_type: 效果类型
    EffectTarget.PLAYER,   // target: 作用目标
    [
      [PropertyType.DODGE, PropertyEffectCategory.BUFF, "%", 25, "00-03-00"], // value: 效果数值
    ],
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
