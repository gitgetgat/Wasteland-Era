import { DishesArgs } from "../../Typing/item-args";
import {
  DishesInterface,
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

// 物品——合成药
class Dishes implements DishesInterface {
  id: string; // 全局ID
  label: string; // 名称
  desc: string | null; // 描述
  price: number; // 价值
  type: string | string[]; // 类型
  icon: string; // 图标
  count: number; // 数量
  stackable: boolean; // 可堆叠
  stackMax: number; // 可堆叠最大数值
  quality: number; // 品质 1-5星，先限制在种植里或者烹饪里
  quality_price: number; // 品质的增值，每半颗心增值多少钱
  formula_id: string[]; // 配方ID,
  is_unlock_formula: Boolean; // 是否解锁了配方
  effect_limit: EffectScenario[]; // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType; // 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget; // 作用目标 玩家player、建筑building，队伍team、等等
  value: PropertyValueInterface[]; // 效果数值，最终效果受品质的影响，品质有加成
  set_need_num?: number | null; // 套装效果生效需要的套装数
  constructor(args: DishesArgs) {
    this.id = args[0];
    this.label = args[1];
    this.desc = args[2];
    this.price = args[3];
    this.type = args[4];
    this.icon = args[5];
    this.count = args[6];
    this.stackable = args[7];
    this.stackMax = args[8];
    this.quality = args[9];
    this.quality_price = args[10];
    this.formula_id = args[11];
    this.is_unlock_formula = args[12];
    this.effect_limit = args[13];
    this.effect_type = args[14];
    this.target = args[15];
    this.value = args[16].map((e) => {
      const ele = {
        property_type: e[0], // 属性类型
        type: e[1], // 正面或者负面效果
        unit: e[2], // 根据不同单位参与不统计算
        val: e[3], // 效果数值
      } as PropertyValueInterface;
      if (e[4]) ele.duration = e[4];
      return ele;
    });
    if (args[17]) this.set_need_num = args[17];
  }

  // 获取综合物品价格
  getQualityPrice(): number {
    // 以0.5星为基准，每多0.5星，多0.2倍品质价+物品价
    return Math.floor(
      this.price +
        (this.quality / 0.5 - 1) * 0.2 * (this.quality_price + this.price)
    );
  }
}

export const dishes_list: DishesArgs[] = [
  [
    "DISHES_0001",
    "土豆泥",
    "",
    75,
    ["dishes"],
    "mingcute--dish-cover-line",
    1,
    true,
    70,
    0.5,
    145,
    ["FORMULA_0001"],
    false,
    [EffectScenario.NORMAL, EffectScenario.COMBAT, EffectScenario.HUNT],
    EffectType.IMMEDIATE,
    EffectTarget.PLAYER,
    [[PropertyType.HP, PropertyEffectCategory.BUFF, null, 30, "00-00-15"]],
    null,
  ],
];

export const createDishes = (): DishesInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`菜肴`) + " 信息");
  const DISHES_LIST: DishesInterface[] = dishes_list.map(
    (dishes) => new Dishes(dishes)
  );
  console.dir(DISHES_LIST, { depth: null });
  return DISHES_LIST;
};

createDishes();
