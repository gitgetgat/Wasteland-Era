import { SetCategoryArgs } from "../../Typing/item-args";
import {
  SetCategoryInterface,
  EffectInterface,
  PropertyValueInterface,
} from "../../Typing/equipment-class";
import {
  EquipmentCategory,
  PropertyType,
  PropertyEffectCategory,
  EffectScenario,
  EffectType,
  EffectTarget,
} from "../../Typing/enum-cfg";
import chalk from "chalk";

// 套装
class Set implements SetCategoryInterface {
  set_id: string; // 套装ID
  set_label: string; // 套装名称
  set_desc: string; // 套装描述
  set_need_types: EquipmentCategory[]; // 套装需要的位置
  set_effect: EffectInterface[];
  constructor(args: SetCategoryArgs) {
    this.set_id = args[0];
    this.set_label = args[1];
    this.set_desc = args[2];
    this.set_need_types = args[3];
    this.set_effect = args[4].map((e) => {
      const ele = {
        effect_limit: e[0], // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
        effect_type: e[1], // 效果类型 即时效果(immediate)、持续效果(continued)
        target: e[2], // 作用目标 玩家player、建筑building，队伍team、等等
        value: e[3].map((i) => {
          const ele = {
            property_type: i[0], // 属性类型
            type: i[1], // 正面或者负面效果
            unit: i[2], // 根据不同单位参与不统计算
            val: i[3], // 效果数值
          } as PropertyValueInterface;
          if (i[4]) ele.duration = i[4];
          return ele;
        }), // 效果数值
      } as EffectInterface;
      if (e[4]) ele.set_need_num = e[4];
      return ele;
    });
  }
}

export const sets_list: SetCategoryArgs[] = [
  [
    "SET_0001",
    "猎鹿者的追踪",
    "猎鹿者的追踪——源自一个古老猎人社团，他们因捕获传说中的苍狼而获得无与伦比的追踪能力，却也被诅咒困扰。穿戴此装备的人能追踪任何目标，但也将永远感受到猎物的影踪，无法摆脱。",
    [
      EquipmentCategory.WEAPON,
      EquipmentCategory.BOOT,
      EquipmentCategory.BELT,
      EquipmentCategory.CLOAK,
    ],
    [
      [
        [EffectScenario.COMBAT],
        EffectType.IMMEDIATE,
        EffectTarget.PLAYER,
        [
          [PropertyType.ATK, PropertyEffectCategory.BUFF, "%", 3],
          [PropertyType.DODGE, PropertyEffectCategory.BUFF, null, 10],
        ],
        2,
      ],
      [
        [EffectScenario.COLLECT, EffectScenario.HUNT],
        EffectType.IMMEDIATE,
        EffectTarget.PLAYER,
        [
          [
            PropertyType.COLLECTION_VOLUME,
            PropertyEffectCategory.BUFF,
            "%",
            10,
          ],
        ],
        2,
      ],
      [
        [EffectScenario.COMBAT],
        EffectType.IMMEDIATE,
        EffectTarget.PLAYER,
        [
          [PropertyType.ATK, PropertyEffectCategory.BUFF, "%", 10],
          [PropertyType.DODGE, PropertyEffectCategory.BUFF, null, 15],
        ],
        4,
      ],
      [
        [EffectScenario.COLLECT, EffectScenario.HUNT],
        EffectType.IMMEDIATE,
        EffectTarget.PLAYER,
        [
          [
            PropertyType.COLLECTION_VOLUME,
            PropertyEffectCategory.BUFF,
            "%",
            25,
          ],
        ],
        4,
      ],
    ],
  ],
  [
    "SET_0002",
    "童话序章 启程的曙光",
    "在被阴霾笼罩的世界里，晨曦的第一缕光芒照亮了沉睡的王国。传说中，这道曙光将引领勇者踏上复兴之路，揭开被遗忘的真相。“童话序章 启程的曙光”是冒险的起点，英雄们将跨越未知，恢复王国的光辉。",
    [
      EquipmentCategory.WEAPON,
      EquipmentCategory.BOOT,
      EquipmentCategory.ARMOR,
      EquipmentCategory.HELMET,
    ],
    [
      [
        [EffectScenario.COMBAT],
        EffectType.IMMEDIATE,
        EffectTarget.PLAYER,
        [[PropertyType.HP, PropertyEffectCategory.BUFF, "%", 10]],
        2,
      ],
      [
        [EffectScenario.COMBAT],
        EffectType.IMMEDIATE,
        EffectTarget.PLAYER,
        [
          [PropertyType.HP, PropertyEffectCategory.BUFF, "%", 15],
          [PropertyType.ATK, PropertyEffectCategory.BUFF, "%", 3],
          [PropertyType.DEF, PropertyEffectCategory.BUFF, "%", 3],
          [PropertyType.VAMP, PropertyEffectCategory.BUFF, "%", 10],
        ],
        4,
      ],
    ],
  ],
];

export const createSet = (): SetCategoryInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`套装效果`) + " 信息");
  const SET_LIST: SetCategoryInterface[] = sets_list.map((set) => new Set(set));
  // console.dir(SET_LIST, { depth: null });
  return SET_LIST;
};

createSet();
