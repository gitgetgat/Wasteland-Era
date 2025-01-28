import { HerbsArgs } from "../../Typing/item-args";
import {
  HerbsInterface,
  PropertyValueInterface,
} from "../../Typing/item-class";
import {
  Season,
  PropertyType,
  EffectScenario,
  PropertyEffectCategory,
  EffectType,
  EffectTarget,
} from "../../Typing/enum-cfg";
import chalk from "chalk";

// 物品——作物
class Herbs implements HerbsInterface {
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
  effect_limit: EffectScenario[]; // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType; // 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget; // 作用目标 玩家player、建筑building，队伍team、等等
  value: PropertyValueInterface[]; // 效果数值
  set_need_num?: number | null; // 套装效果生效需要的套装数

  constructor(args: HerbsArgs) {
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
    this.effect_limit = args[11];
    this.effect_type = args[12];
    this.target = args[13];
    this.value = args[14].map((e) => {
      const ele = {
        property_type: e[0], // 属性类型
        type: e[1], // 正面或者负面效果
        unit: e[2], // 根据不同单位参与不统计算
        val: e[3], // 效果数值
      } as PropertyValueInterface;
      if (e[4]) ele.duration = e[4];
      return ele;
    });
    if (args[15]) this.set_need_num = args[15];
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

export const herbs_list: HerbsArgs[] = [
  [
    "HERBS_0001",
    "止血草",
    "生长于阴湿森林，以红色花朵著称。它能迅速止血并加速伤口愈合，常被视为战士的救命草。在紧急时刻，轻压伤口便能止血并缓解疼痛，是珍贵的疗伤草药。",
    320,
    "herbs",
    "emojione-monotone--herb",
    1,
    true,
    15,
    0.5,
    20,
    [EffectScenario.NORMAL],
    EffectType.IMMEDIATE,
    EffectTarget.PLAYER,
    [[PropertyType.HP, PropertyEffectCategory.BUFF, "%", 2]],
  ],
];
export const createHerbs = (): HerbsInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`草药`) + " 信息");
  const Herbs_LIST = herbs_list.map((herbs) => new Herbs(herbs));
  console.dir(Herbs_LIST, { depth: null });
  return Herbs_LIST;
};

createHerbs();
