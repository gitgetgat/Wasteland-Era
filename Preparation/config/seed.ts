/**
 * 定义种子类和种子的基本信息
 */
import { SeedArgs } from "../../Typing/item-args";
import { SeedInterface } from "../../Typing/item-class";
import { Season } from "../../Typing/enum-cfg";
import chalk from 'chalk';

class Seed implements SeedInterface {
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
  season: Season// 耕种的季节
  crop_id: string// 产出的作物ID
  duration: string// 种植需要的时长，小时-分钟-秒

  constructor(args: SeedArgs) {
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
    this.season = args[11]
    this.crop_id = args[12]
    this.duration = args[13]
  }
  // 获取综合物品价格
  getQualityPrice(): number {
    // 以0.5星为基准，每多0.5星，多0.2倍品质价+物品价
    return Math.floor(this.price + (this.quality / 0.5 - 1) * 0.2 * (this.quality_price + this.price))
  }
}

export const seeds_list: SeedArgs[] = [
  ['SEED_0001', '土豆种子', '土豆种子是用于种植土豆的种薯或处理过的芽眼，具备高发芽率和强适应性。在适宜的环境中，它能迅速生长，结出优质的土豆，是影响产量和品质的关键因素。', 170, 'seed', 'game-icons:plant-seed', 1, true, 30, 0.5, 70, Season.SPRING, 'CROP_0001', '12-00-00'],
  ['SEED_0002', '羊角薯种子', '羊角薯种子是一种适应性强、产量高的农作物种子，其块茎形似羊角，肉质香甜细腻，富含营养，适合多种土壤和气候条件。优质种子发芽率高、抗病性强，是高效种植的理想选择。', 120, 'seed', 'game-icons:plant-seed', 1, true, 30, 0.5, 45, Season.SPRING, 'CROP_0002', '10-00-00'],
]


export const createSeed = (): SeedInterface[] => {
  console.log('初始化 物品：' + chalk.yellow.bold(`种子`) + ' 信息');
  const SEED_LIST: SeedInterface[] = seeds_list.map(seed => new Seed(seed))
  // console.dir(SEED_LIST, { depth: null });
  return SEED_LIST
}