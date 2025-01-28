import {
  EquipmentCategory,
  EffectScenario,
  EffectType,
  EffectTarget,
  PropertyType,
  PropertyEffectCategory,
} from "./enum-cfg";
import { ItemBaseInterface } from "./item-class";

// 属性值type
export interface PropertyValueInterface {
  property_type: PropertyType; // 属性类型
  type: PropertyEffectCategory; // 正面或者负面效果
  unit: "%" | null; // 根据不同单位参与不统计算
  val: number; // 效果数值
  duration?: string; // 持续时间，仅限持续效果，小时-分钟-秒
}

// 效果interface
export interface EffectInterface {
  effect_limit: EffectScenario[]; // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType; // 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget; // 作用目标 玩家player、建筑building，队伍team、等等
  value: PropertyValueInterface[]; // 效果数值
  set_need_num?: number; // 套装效果生效需要的套装数
  duration?: string; // 持续时间，仅限持续效果，小时-分钟-秒
}

// 套装interface
export interface SetCategoryInterface {
  set_id: string; // 套装ID
  set_label: string; // 套装名称
  set_desc: string; // 套装描述
  set_need_types: EquipmentCategory[]; // 套装需要的位置
  set_effect: EffectInterface[];
}

// 装备interface
export interface EquipmentInterface extends ItemBaseInterface, EffectInterface {
  equipment_type: EquipmentCategory; // 装备类型：武器、盾牌、头盔、铠甲、鞋子、腰带、披风、项链、戒指1、戒指2 等等
  set_effect_id: string | null; // 套装效果Id，用于查询该套装效果
}
