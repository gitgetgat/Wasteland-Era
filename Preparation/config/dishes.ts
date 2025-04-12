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

// 物品——菜肴
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
  level: number; // 解锁等级
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
    this.level = args[11];
    this.formula_id = args[12];
    this.is_unlock_formula = args[13];
    this.effect_limit = args[14];
    this.effect_type = args[15];
    this.target = args[16];
    this.value = args[17].map((e) => {
      const ele = {
        property_type: e[0], // 属性类型
        type: e[1], // 正面或者负面效果
        unit: e[2], // 根据不同单位参与不统计算
        val: e[3], // 效果数值
      } as PropertyValueInterface;
      if (e[4]) ele.duration = e[4];
      return ele;
    });
    if (args[18]) this.set_need_num = args[18];
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
    1,
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
  console.log('菜肴列表详情:');
  DISHES_LIST.forEach(dish => {
    console.log('\n----------------------------------------');
    console.log(`ID(全局ID): ${dish.id}`);
    console.log(`名称: ${dish.label}`);
    console.log(`描述: ${dish.desc}`);
    console.log(`价值: ${dish.price}`);
    console.log(`类型: ${Array.isArray(dish.type) ? dish.type.join(', ') : dish.type}`);
    console.log(`图标: ${dish.icon}`);
    console.log(`数量: ${dish.count}`);
    console.log(`可堆叠: ${dish.stackable}`);
    console.log(`可堆叠最大数值: ${dish.stackMax}`);
    console.log(`品质(1-5星): ${dish.quality}`);
    console.log(`品质增值: ${dish.quality_price}`);
    console.log(`解锁等级: ${dish.level}`);
    console.log(`配方ID: ${dish.formula_id.join(', ')}`);
    console.log(`是否解锁配方: ${dish.is_unlock_formula}`);
    console.log(`效果限制范围: ${dish.effect_limit.join(', ')}`);
    console.log(`效果类型: ${dish.effect_type}`);
    console.log(`作用目标: ${dish.target}`);
    console.log('效果数值:');
    dish.value.forEach(val => {
      console.log(`  - 属性类型: ${val.property_type}`);
      console.log(`    效果类型: ${val.type}`);
      console.log(`    单位: ${val.unit}`);
      console.log(`    数值: ${val.val}`);
      if (val.duration) console.log(`    持续时间: ${val.duration}`);
    });
    if (dish.set_need_num) {
      console.log(`套装效果所需数量: ${dish.set_need_num}`);
    }
    console.log('----------------------------------------');
  });
  return DISHES_LIST;
};

createDishes();
