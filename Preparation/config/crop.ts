import { CropArgs } from "../../Typing/item-args";
import { CropInterface, PropertyValueInterface } from "../../Typing/item-class";
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
class Crop implements CropInterface {
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

  constructor(args: CropArgs) {
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

export const crop_list: CropArgs[] = [
  [
    "CROP_0001", // id: 作物唯一标识
    "土豆", // label: 作物名称
    "土豆，又称马铃薯，是一种富含淀粉的根茎作物，营养丰富，用途广泛，可蒸、煮、炒、炸，是全球重要的粮食作物。", // desc: 描述文本
    320, // price: 基础价格
    "crop", // type: 物品类型
    "fluent-emoji-high-contrast:potato", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    30, // stackMax: 最大堆叠数量
    0.5, // quality: 品质等级(0.5-5星)
    110, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [[PropertyType.HP, PropertyEffectCategory.BUFF, "%", 5]], // value: 效果数值
  ],
  [
    "CROP_0002", // id: 作物唯一标识
    "羊角薯", // label: 作物名称
    "羊角薯是一种形似羊角的红薯品种，因其独特的外形得名。它肉质细腻、甜度高，富含膳食纤维和多种维生素，既可蒸煮食用，也适合做甜品或烘焙。", // desc: 描述文本
    235, // price: 基础价格
    "crop", // type: 物品类型
    "fluent-emoji-high-contrast:potato", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    30, // stackMax: 最大堆叠数量
    0.5, // quality: 品质等级(0.5-5星)
    85, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, "%", 1], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, null, 10], // value: 效果数值
    ],
  ],
  [
    "CROP_0003", // id: 作物唯一标识
    "辐照小麦", // label: 作物名称
    "这种小麦较为矮小但穗粒饱满，具有淡淡的金属光泽。经过烘焙后的面包带有微苦的坚果味，但能提供持久的饱腹感和轻微的辐射耐受性，是废土环境中的主要粮食作物。", // desc: 描述文本
    260, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:wheat", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    40, // stackMax: 最大堆叠数量
    1.0, // quality: 品质等级(0.5-5星)
    100, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_scenario: 效果场景
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // effect_target: 效果目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 50], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 5], // value: 效果数值
    ],
  ],
  [
    "CROP_0004", // id: 作物唯一标识
    "变种南瓜", // label: 作物名称
    "这种南瓜比普通南瓜略小，但外皮更为坚硬。果肉橙黄，质地细腻，含有丰富的胡萝卜素和维生素，食用后能够提供长效的体力恢复，是废土居民冬季储备的重要食物。", // desc: 描述文本
    310, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:pumpkin", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    35, // stackMax: 最大堆叠数量
    1.0, // quality: 品质等级(0.5-5星)
    120, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 150], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 10], // value: 效果数值
    ],
  ],
  [
    "CROP_0005", // id: 作物唯一标识
    "夜光浆果", // label: 作物名称
    "这种奇特的浆果在黑暗中会发出淡蓝色的微光，果皮略带金属质感，但果肉酸甜可口。它能够吸收少量环境中的辐射，食用后可以短时间内加速体内辐射物质的排出。", // desc: 描述文本
    420, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:berries-bowl", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    25, // stackMax: 最大堆叠数量
    1.5, // quality: 品质等级(0.5-5星)
    150, // quality_price: 品质加成价格
    [EffectScenario.NORMAL, EffectScenario.COMBAT], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.ATK, PropertyEffectCategory.BUFF, "%", 10], // value: 效果数值
      [PropertyType.VAMP, PropertyEffectCategory.BUFF, "%", 5], // value: 效果数值
    ],
  ],
  [
    "CROP_0006", // id: 作物唯一标识
    "紫心玉米", // label: 作物名称
    "这种玉米外观与普通玉米相似，但剥开外皮后可见籽粒带有明显的紫色纹理。富含花青素和特殊蛋白质，食用后能暂时提升思维能力和记忆力，深受科研人员和脑机战士喜爱。", // desc: 描述文本
    350, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:corn", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    35, // stackMax: 最大堆叠数量
    1.5, // quality: 品质等级(0.5-5星)
    130, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 120], // value: 效果数值
      [PropertyType.DODGE, PropertyEffectCategory.BUFF, "%", 2], // value: 效果数值
    ],
  ],
  [
    "CROP_0007", // id: 作物唯一标识
    "火焰辣椒", // label: 作物名称
    "这种辣椒呈深红色，表面有着火焰般的纹路。辣度极高，含有丰富的辣椒素，食用后会使人体温升高，加速血液循环，在寒冷环境中尤为实用，也能有效驱散疲劳感。", // desc: 描述文本
    290, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:hot-spices", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    30, // stackMax: 最大堆叠数量
    1.0, // quality: 品质等级(0.5-5星)
    110, // quality_price: 品质加成价格
    [EffectScenario.NORMAL, EffectScenario.COMBAT], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.ATK, PropertyEffectCategory.BUFF, null, 20], // value: 效果数值
      [PropertyType.CRITDMG, PropertyEffectCategory.BUFF, "%", 12], // value: 效果数值
    ],
  ],
  [
    "CROP_0008", // id: 作物唯一标识
    "硬皮甜菜", // label: 作物名称
    "这种甜菜外皮坚韧，需要特定工具才能剥离，但内部富含糖分和营养物质。既是重要的糖分来源，也可用于酿造废土威士忌等高价值饮品，在废土经济中占有重要地位。", // desc: 描述文本
    340, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:beet", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    35, // stackMax: 最大堆叠数量
    1.0, // quality: 品质等级(0.5-5星)
    125, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 180], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 15], // value: 效果数值
    ],
  ],
  [
    "CROP_0009", // id: 作物唯一标识
    "脑叶草", // label: 作物名称
    "这种草本植物的叶片呈现特殊的脑回沟状纹理，含有温和的神经刺激物质。适量食用可提高注意力和思考能力，但过量则会导致头痛和幻觉。在废土时代，它是科研人员的珍贵资源。", // desc: 描述文本
    520, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:sprout", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    20, // stackMax: 最大堆叠数量
    2.0, // quality: 品质等级(0.5-5星)
    200, // quality_price: 品质加成价格
    [EffectScenario.NORMAL, EffectScenario.COMBAT], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.ATK, PropertyEffectCategory.BUFF, null, 15], // value: 效果数值
      [PropertyType.ATKSPD, PropertyEffectCategory.BUFF, "%", 10], // value: 效果数值
      [PropertyType.COLLECTION_VOLUME, PropertyEffectCategory.BUFF, "%", 15], // value: 效果数值
    ],
  ],
  [
    "CROP_0010", // id: 作物唯一标识
    "韧维藤", // label: 作物名称
    "这种藤蔓植物纤维坚韧有弹性，可制作绳索和简易装备。果实黑亮如玛瑙，内含丰富矿物质，食用后能增强肌肉力量和骨骼强度，是废土环境中难得的矿物质补充来源。", // desc: 描述文本
    450, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:vine-leaf", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    25, // stackMax: 最大堆叠数量
    1.5, // quality: 品质等级(0.5-5星)
    180, // quality_price: 品质加成价格
    [EffectScenario.NORMAL, EffectScenario.COMBAT], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 150], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 5], // value: 效果数值
      [PropertyType.COLLECTION_VOLUME, PropertyEffectCategory.BUFF, "%", 5], // value: 效果数值
    ],
  ],
  [
    "CROP_0011", // id: 作物唯一标识
    "荚豆", // label: 作物名称
    "这种豆类植物产出的豆荚坚硬，内含4-6颗墨绿色的豆子。豆子富含优质蛋白质和必需氨基酸，是废土居民重要的植物蛋白来源。煮熟后带有淡淡的坚果香，口感绵密。", // desc: 描述文本
    250, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:beans", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    40, // stackMax: 最大堆叠数量
    1.0, // quality: 品质等级(0.5-5星)
    95, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 100], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 10], // value: 效果数值
    ],
  ],
  [
    "CROP_0012", // id: 作物唯一标识
    "耐旱稻", // label: 作物名称
    "这种改良水稻的米粒细长，带有淡淡的坚果香气。虽然产量比不上古代水稻，但其超低的水分需求使它成为废土时代的珍贵粮食。煮熟后富有弹性，具备均衡的营养价值。", // desc: 描述文本
    380, // price: 基础价格
    "crop", // type: 物品类型
    "game-icons:rice", // icon: 图标名称
    1, // count: 初始数量
    true, // stackable: 是否可堆叠
    35, // stackMax: 最大堆叠数量
    1.5, // quality: 品质等级(0.5-5星)
    140, // quality_price: 品质加成价格
    [EffectScenario.NORMAL], // effect_limit: 效果限制范围类型
    EffectType.IMMEDIATE, // effect_type: 效果类型
    EffectTarget.PLAYER, // target: 作用目标
    [
      [PropertyType.HP, PropertyEffectCategory.BUFF, null, 150], // value: 效果数值
      [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 5], // value: 效果数值
    ],
  ],
];
export const createCrop = (): CropInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`作物`) + " 信息");
  const CROP_LIST = crop_list.map((crop) => new Crop(crop));
  // console.dir(CROP_LIST, { depth: null });
  return CROP_LIST;
};

createCrop();
