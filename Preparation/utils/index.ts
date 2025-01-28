import {
  EffectScenario,
  EffectType,
  EffectTarget,
  PropertyType,
  PropertyEffectCategory,
} from "../../Typing/enum-cfg";
import { PropertyValueInterface } from "../../Typing/item-class";
/**
 * 物品效果生效计算
 * @param effect_limit 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
 * @param effect_type 效果类型 即时效果(immediate)、持续效果(continued)
 * @param target 作用目标 玩家player、建筑building，队伍team、等等
 * @param value 效果数值，最终效果受品质的影响，品质有加成
 */
export function ItemEffectActivated(
  id: string,
  effect_limit: EffectScenario[],
  effect_type: EffectType,
  target: EffectTarget,
  value: PropertyValueInterface
): void {}
