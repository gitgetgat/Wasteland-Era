import {
  PropertyType,
  EffectScenario,
  Season,
  EquipmentCategory,
  PropertyEffectCategory,
  EffectType,
  EffectTarget,
  FormulaType,
} from "./enum-cfg";
/**
 * 构造对象的输入的基础
 */
// 基础type
export type ItemBaseArgs = [
  id: string, // 全局ID
  label: string, // 名称
  desc: string | null, // 描述
  price: number, // 价值
  type: string | string[], // 类型
  icon: string // 图标
];
// 堆叠type
export type ItemStackArgs = [
  count: number, // 数量
  stackable: boolean, // 可堆叠
  stackMax: number // 可堆叠最大数值
];
// 品质type
export type ItemQualityArgs = [
  quality: number, // 品质 1-5星，先限制在种植里或者烹饪里
  quality_price: number // 品质的增值，每半颗心增值多少钱
];
// 属性值type
export type PropertyValueArgs = [
  property_type: PropertyType, // 属性类型
  type: PropertyEffectCategory, // 正面或者负面效果
  unit: "%" | null, // 根据不同单位参与不统计算
  val: number, // 效果数值
  duration?: string | null // 持续时间，仅限持续效果，小时-分钟-秒
];
// 效果type
export type EffectArgs = [
  effect_limit: EffectScenario[], // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType, // 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget, // 作用目标 玩家player、建筑building，队伍team、等等
  value: PropertyValueArgs[], // 效果数值
  set_need_num?: number | null // 套装效果生效需要的套装数
];
// 套装type
export type SetCategoryArgs = [
  set_id: string, // 套装ID
  set_label: string, // 套装名称
  set_desc: string, // 套装描述
  set_need_types: EquipmentCategory[], // 套装需要的位置
  set_effect: EffectArgs[]
];

// 物品——合成配方条目
export type FormulaItemArgs = [ele_id: string, ele_num: number];

// 物品——含有配方
export type hasFormulaArgs = [
  formula_id: string[], // 配方ID,
  is_unlock_formula: Boolean // 是否解锁了配方
];

/**
 * 物品type
 */
// 物品——种子
type SeedOther = [
  season: Season, // 耕种的季节
  crop_id: string, // 产出的作物ID
  duration: string // 种植需要的时长，小时-分钟-秒
];
export type SeedArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...ItemQualityArgs,
  ...SeedOther
];
// 物品——作物
export type CropArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...ItemQualityArgs,
  ...EffectArgs
];
// 物品——装备
type EquipmentOther = [
  equipment_type: EquipmentCategory, // 装备类型：武器、盾牌、头盔、铠甲、鞋子、腰带、披风、项链、戒指1、戒指2 等等
  set_effect_id: string | null // 套装效果Id，用于查询该套装效果
];
export type EquipmentArgs = [...ItemBaseArgs, ...EquipmentOther, ...EffectArgs];

// 物品——药草
export type HerbsArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...ItemQualityArgs,
  ...EffectArgs
];
// 物品——合成药
export type DrugsArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...ItemQualityArgs,
  ...hasFormulaArgs,
  ...EffectArgs
];
// 物品——合成配方
export type FormulaArgs = [
  formula_id: string, // 配方ID
  label: string, // 配方名称
  type: FormulaType | FormulaType[], // 配方类型
  formula_list: FormulaItemArgs[], // 配方
  props_id: string // 产品ID
];
// 物品——菜肴
export type DishesArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...ItemQualityArgs,
  ...hasFormulaArgs,
  ...EffectArgs
];
// 物品——普通（有效果）
export type ItemQualityOtherArgs = [
  quality?: number, // 品质 1-5星，先限制在种植里或者烹饪里
  quality_price?: number // 品质的增值，每半颗心增值多少钱
];
export type ItemPropsHasEffectArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...EffectArgs,
  ...ItemQualityOtherArgs
];
// 物品——普通（无效果）
export type ItemPropsNormalArgs = [
  ...ItemBaseArgs,
  ...ItemStackArgs,
  ...ItemQualityOtherArgs
];
// 物品——蓝图
export type BlueprintArgs = [
  blueprint_id: string, // 蓝图ID
  label: string, // 蓝图名称
  type: FormulaType | FormulaType[], // 蓝图类型
  blueprint_list: FormulaItemArgs[], // 蓝图组成
  props_id: string // 产品ID
];
