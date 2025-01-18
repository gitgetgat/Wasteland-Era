import { PropertyType, EffectScenario, Season, EquipmentCategory, PropertyEffectCategory, EffectType, EffectTarget } from "./enum-cfg"
/**
 * 构造对象的基础
 */
// 基础interface
export interface ItemBaseInterface {
  id: string,// 全局ID
  label: string,// 名称
  desc: string,// 描述
  price: number,// 价值
  type: string | string[],// 类型
  icon: string,// 图标
}
// 堆叠interface
export interface ItemStackInterface {
  count: number,// 数量
  stackable: boolean,// 可堆叠
  stackMax: number,// 可堆叠最大数值
}
// 品质interface
export interface ItemQualityInterface {
  quality: number,// 品质 1-5星，先限制在种植里或者烹饪里
  quality_price: number, // 品质的增值，每半颗心增值多少钱
  getQualityPrice(): number,
}
// 属性值interface
export interface PropertyValueInterface {
  property_type: PropertyType,// 属性类型
  type: PropertyEffectCategory,// 正面或者负面效果
  unit: '%' | null,// 根据不同单位参与不统计算 
  val: number,// 效果数值
}
// 效果interface
export interface EffectInterface {
  effect_limit: EffectScenario[],// 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType,// 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget,// 作用目标 玩家player、建筑building，队伍team、等等
  effect_value: PropertyValueInterface[], // 效果数值，最终效果受品质的影响，品质有加成
  duration?: string,// 持续时间，仅限持续效果，小时-分钟-秒
}
// 套装interface
export interface SetCategoryInterface {
  set_id: string,// 套装ID
  set_label: string,// 套装名称
  set_desc: string,// 套装描述
  set_need_types: EquipmentCategory[],// 套装可供需要的位置
  set_effect: EffectInterface[]
}

/**
 * 物品interface
 */
// 物品——种子
export interface SeedInterface extends ItemBaseInterface, ItemStackInterface, ItemQualityInterface {
  season: Season,// 耕种的季节
  crop_id: string,// 产出的作物ID
  duration: string,// 种植需要的时长，小时-分钟-秒
}
// 物品——作物
export interface CropInterface extends ItemBaseInterface, ItemStackInterface, ItemQualityInterface, EffectInterface { }
// 物品——装备
export interface EquipmentInterface extends ItemBaseInterface, EffectInterface {
  equipment_type: EquipmentCategory,// 装备类型：武器、盾牌、头盔、铠甲、鞋子、腰带、披风、项链、戒指1、戒指2 等等
  set_effect_id: string | null,// 套装效果Id，用于查询该套装效果
}