/**
 * 定义作物类和作物的基本信息
 */
import { CropArgs } from "../../Typing/item-args";
import { CropInterface, PropertyValueInterface } from "../../Typing/item-class"
import { Season, PropertyType, EffectScenario, PropertyEffectCategory, EffectType, EffectTarget } from "../../Typing/enum-cfg";
import chalk from 'chalk';

class Crop implements CropInterface {
  id: string// 全局ID
  label: string// 名称
  desc: string// 描述
  price: number// 价值
  type: string | string[]// 类型
  icon: string// 图标
  count: number// 数量
  stackable: boolean// 可堆叠
  stackMax: number// 可堆叠最大数值
  quality: number// 品质 1-5星，先限制在种植里或者烹饪里
  quality_price: number // 品质的增值，每半颗心增值多少钱
  effect_limit: EffectScenario[]// 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
  effect_type: EffectType// 效果类型 即时效果(immediate)、持续效果(continued)
  target: EffectTarget// 作用目标 玩家player、建筑building，队伍team、等等
  effect_value: PropertyValueInterface[] // 效果数值
  duration?: string// 持续时间，仅限持续效果，小时-分钟-秒

  constructor(args: CropArgs) {
    this.id = args[0]
    this.label = args[1]
    this.desc = args[2]
    this.price = args[3]
    this.type = args[4]
    this.icon = args[5]
    this.count = args[6]
    this.stackable = args[7]
    this.stackMax = args[8]
    this.quality = args[9]
    this.quality_price = args[10]
    this.effect_limit = args[11]
    this.effect_type = args[12]
    this.target = args[13]
    this.effect_value = args[14].map(i => {
      return {
        property_type: i[0],
        type: i[1],
        unit: i[2],
        val: i[3],
      }
    })
    this.duration = args[15]
  }
  // 获取综合物品价格
  getQualityPrice(): number {
    // 以0.5星为基准，每多0.5星，多0.2倍品质价+物品价
    return Math.floor(this.price + (this.quality / 0.5 - 1) * 0.2 * (this.quality_price + this.price))
  }
}

export const crop_list: CropArgs[] = [
  ['CROP_0001', '土豆', '土豆，又称马铃薯，是一种富含淀粉的根茎作物，营养丰富，用途广泛，可蒸、煮、炒、炸，是全球重要的粮食作物。', 320, 'crop', 'fluent-emoji-high-contrast:potato', 1, true, 30, 0.5, 110, [EffectScenario.NORMAL], EffectType.IMMEDIATE, EffectTarget.PLAYER, [[PropertyType.HP, PropertyEffectCategory.BUFF, '%', 5]]],
  ['CROP_0002', '羊角薯', '羊角薯是一种形似羊角的红薯品种，因其独特的外形得名。它肉质细腻、甜度高，富含膳食纤维和多种维生素，既可蒸煮食用，也适合做甜品或烘焙。', 235, 'crop', 'fluent-emoji-high-contrast:potato', 1, true, 30, 0.5, 85, [EffectScenario.NORMAL], EffectType.IMMEDIATE, EffectTarget.PLAYER, [[PropertyType.HP, PropertyEffectCategory.BUFF, '%', 1], [PropertyType.DEF, PropertyEffectCategory.BUFF, null, 10]]],
]
export const createCrop = (): CropInterface[] => {
  console.log('初始化 物品：' + chalk.yellow.bold(`作物`) + ' 信息');
  const CROP_LIST = crop_list.map(crop => new Crop(crop))
  // console.dir(CROP_LIST, { depth: null });
  return CROP_LIST
}

createCrop()