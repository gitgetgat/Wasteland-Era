import { EquipmentArgs } from "../../Typing/item-args";
import {
  EquipmentInterface,
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

// 物品——装备
class Equipment implements EquipmentInterface {
  id: string; // 全局ID
  label: string; // 名称
  desc: string | null; // 描述
  price: number; // 价值
  type: string | string[]; // 类型
  icon: string; // 图标
  equipment_type: EquipmentCategory; // 装备类型：武器、盾牌、头盔、铠甲、鞋子、腰带、披风、项链、戒指1、戒指2 等等
  set_effect_id: string | null; // 套装效果Id，用于查询该套装效果
  effect_limit: EffectScenario[]; // 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType; // 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget; // 作用目标 玩家player、建筑building，队伍team、等等
  value: PropertyValueInterface[]; // 效果数值
  constructor(...args: EquipmentArgs) {
    this.id = args[0];
    this.label = args[1];
    this.desc = args[2];
    this.price = args[3];
    this.type = args[4];
    this.icon = args[5];
    this.equipment_type = args[6];
    this.set_effect_id = args[7];
    this.effect_limit = args[8];
    this.effect_type = args[9];
    this.target = args[10];
    this.value = args[11].map((e) => {
      return {
        property_type: e[0], // 属性类型
        type: e[1], // 正面或者负面效果
        unit: e[2], // 根据不同单位参与不统计算
        val: e[3], // 效果数值
      };
    });
  }
}
