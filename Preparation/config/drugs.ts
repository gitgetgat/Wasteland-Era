import { DrugsArgs } from "../../Typing/item-args";
import {
  DrugsInterface,
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
class Drugs implements DrugsInterface {
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
  constructor(args: DrugsArgs) {
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

export const drugs_list: DrugsArgs[] = [
  [
    "DRUGS_0001",
    "止血散",
    "",
    70,
    ["drugs"],
    "game-icons--pill",
    1,
    true,
    40,
    0.5,
    45,
    1,
    ["FORMULA_0501"],
    false,
    [EffectScenario.NORMAL, EffectScenario.COMBAT, EffectScenario.HUNT],
    EffectType.IMMEDIATE,
    EffectTarget.PLAYER,
    [[PropertyType.HP, PropertyEffectCategory.BUFF, null, 30, "00-00-10"]],
    null,
  ],
];

export const createDrugs = (): DrugsInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`种子`) + " 信息");
  const DRUGS_LIST: DrugsInterface[] = drugs_list.map(
    (drug) => new Drugs(drug)
  );
  DRUGS_LIST.forEach(drug => {
    console.log('\n药品详细信息:');
    console.log(`id (全局ID): ${drug.id}`);
    console.log(`label (名称): ${drug.label}`);
    console.log(`desc (描述): ${drug.desc}`);
    console.log(`price (价值): ${drug.price}`);
    console.log(`type (类型): ${drug.type}`);
    console.log(`icon (图标): ${drug.icon}`);
    console.log(`count (数量): ${drug.count}`);
    console.log(`stackable (可堆叠): ${drug.stackable}`);
    console.log(`stackMax (可堆叠最大数值): ${drug.stackMax}`);
    console.log(`quality (品质1-5星): ${drug.quality}`);
    console.log(`quality_price (品质增值): ${drug.quality_price}`);
    console.log(`level (解锁等级): ${drug.level}`);
    console.log(`formula_id (配方ID): ${drug.formula_id}`);
    console.log(`is_unlock_formula (是否解锁配方): ${drug.is_unlock_formula}`);
    console.log(`effect_limit (效果限制范围): ${drug.effect_limit}`);
    console.log(`effect_type (效果类型): ${drug.effect_type}`);
    console.log(`target (作用目标): ${drug.target}`);
    console.log('value (效果数值):');
    drug.value.forEach((val, index) => {
      console.log(`  效果 ${index + 1}:`);
      console.log(`    property_type (属性类型): ${val.property_type}`);
      console.log(`    type (效果类型): ${val.type}`);
      console.log(`    unit (计算单位): ${val.unit}`);
      console.log(`    val (效果数值): ${val.val}`);
      if (val.duration) console.log(`    duration (持续时间): ${val.duration}`);
    });
    if (drug.set_need_num !== undefined) {
      console.log(`set_need_num (套装需求数量): ${drug.set_need_num}`);
    }
    console.log('------------------------');
  });
  return DRUGS_LIST;
};

createDrugs();
