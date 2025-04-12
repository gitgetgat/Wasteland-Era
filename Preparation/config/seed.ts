import { SeedArgs } from "../../Typing/item-args";
import { SeedInterface } from "../../Typing/item-class";
import { Season } from "../../Typing/enum-cfg";
import chalk from "chalk";

// 物品——种子
class Seed implements SeedInterface {
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
  season: Season; // 耕种的季节
  crop_id: string; // 产出的作物ID
  duration: string; // 种植需要的时长，小时-分钟-秒

  constructor(args: SeedArgs) {
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
    this.season = args[11];
    this.crop_id = args[12];
    this.duration = args[13];
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

export const seeds_list: SeedArgs[] = [
  [
    "SEED_0001",    // id: 种子唯一标识
    "土豆种子",     // label: 种子名称
    "土豆种子是用于种植土豆的种薯或处理过的芽眼，具备高发芽率和强适应性。在适宜的环境中，它能迅速生长，结出优质的土豆，是影响产量和品质的关键因素。", // desc: 描述文本
    170,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:plant-seed", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    30,             // stackMax: 最大堆叠数量
    0.5,            // quality: 品质等级(0.5-5星)
    70,             // quality_price: 品质加成价格
    Season.SPRING,  // season: 适合种植的季节
    "CROP_0001",    // crop_id: 对应产出的作物ID
    "12-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0002",    // id: 种子唯一标识
    "羊角薯种子",   // label: 种子名称
    "羊角薯种子是一种适应性强、产量高的农作物种子，其块茎形似羊角，肉质香甜细腻，富含营养，适合多种土壤和气候条件。优质种子发芽率高、抗病性强，是高效种植的理想选择。", // desc: 描述文本
    120,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:plant-seed", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    30,             // stackMax: 最大堆叠数量
    0.5,            // quality: 品质等级(0.5-5星)
    45,             // quality_price: 品质加成价格
    Season.SPRING,  // season: 适合种植的季节
    "CROP_0002",    // crop_id: 对应产出的作物ID
    "10-00-00",     // duration: 生长时间(时-分-秒)
  ],
  // 废土纪元特色种子
  [
    "SEED_0003",    // id: 种子唯一标识
    "辐照小麦种子", // label: 种子名称
    "这种经过轻微辐射处理的小麦种子具有较强的耐旱性，能在贫瘠的土壤中生长。虽然产量不高，但适应性强，是废土居民最基础的粮食作物之一。", // desc: 描述文本
    150,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:wheat",  // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    40,             // stackMax: 最大堆叠数量
    1.0,            // quality: 品质等级(0.5-5星)
    60,             // quality_price: 品质加成价格
    Season.SUMMER,  // season: 适合种植的季节
    "CROP_0003",    // crop_id: 对应产出的作物ID
    "16-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0004",    // id: 种子唯一标识
    "变种南瓜种子", // label: 种子名称
    "这种南瓜种子经过几代自然选择，形成了适应废土环境的特性。成熟的南瓜体积适中，外壳较普通南瓜更坚硬，果肉中含有丰富的维生素和矿物质，是冬季储备食物的首选。", // desc: 描述文本
    190,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:pumpkin", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    35,             // stackMax: 最大堆叠数量
    1.0,            // quality: 品质等级(0.5-5星)
    80,             // quality_price: 品质加成价格
    Season.FALL,  // season: 适合种植的季节
    "CROP_0004",    // crop_id: 对应产出的作物ID
    "20-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0005",    // id: 种子唯一标识
    "夜光浆果种子", // label: 种子名称
    "罕见的变异浆果种子，在废土环境中自然进化而来。果实能够吸收少量辐射并转化为微弱荧光，食用后有轻微排毒效果。在黑暗中发出的微光使其成为地下避难所的实用作物。", // desc: 描述文本
    280,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:berries-bowl", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    25,             // stackMax: 最大堆叠数量
    1.5,            // quality: 品质等级(0.5-5星)
    100,            // quality_price: 品质加成价格
    Season.SPRING,  // season: 适合种植的季节
    "CROP_0005",    // crop_id: 对应产出的作物ID
    "14-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0006",    // id: 种子唯一标识
    "紫心玉米种子", // label: 种子名称
    "这种玉米种子产出的玉米籽粒带有紫色斑纹，富含花青素和特殊蛋白质。在废土时代，它是难得的高营养作物，特别受到从事脑力劳动人员的青睐。", // desc: 描述文本
    220,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:corn", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    35,             // stackMax: 最大堆叠数量
    1.5,            // quality: 品质等级(0.5-5星)
    90,             // quality_price: 品质加成价格
    Season.SUMMER,  // season: 适合种植的季节
    "CROP_0006",    // crop_id: 对应产出的作物ID
    "18-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0007",    // id: 种子唯一标识
    "火焰辣椒种子", // label: 种子名称
    "这种辣椒种子在高温和轻微辐射环境下进化而来，辣度远超普通辣椒。成熟的辣椒深红发亮，含有高浓度辣椒素，食用后能提高人体代谢和血液循环，在寒冷季节特别受欢迎。", // desc: 描述文本
    200,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:hot-spices", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    30,             // stackMax: 最大堆叠数量
    1.0,            // quality: 品质等级(0.5-5星)
    75,             // quality_price: 品质加成价格
    Season.SUMMER,  // season: 适合种植的季节
    "CROP_0007",    // crop_id: 对应产出的作物ID
    "12-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0008",    // id: 种子唯一标识
    "硬皮甜菜种子", // label: 种子名称
    "这种甜菜种子适应了废土的恶劣环境，外皮比普通甜菜更坚韧，内部糖分含量高。既是重要的糖分来源，也是酿酒的优质原料，在废土经济中有稳定的需求。", // desc: 描述文本
    230,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:beet", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    35,             // stackMax: 最大堆叠数量
    1.0,            // quality: 品质等级(0.5-5星)
    85,             // quality_price: 品质加成价格
    Season.FALL,  // season: 适合种植的季节
    "CROP_0008",    // crop_id: 对应产出的作物ID
    "15-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0009",    // id: 种子唯一标识
    "脑叶草种子",   // label: 种子名称
    "这种稀有草本植物种子产出的叶片含有轻微神经刺激物质，适量食用可提高注意力和思考能力。因其在废土环境中难以大规模种植，成为科研人员和领导者的珍贵资源。", // desc: 描述文本
    350,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:sprout", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    20,             // stackMax: 最大堆叠数量
    2.0,            // quality: 品质等级(0.5-5星)
    150,            // quality_price: 品质加成价格
    Season.SPRING,  // season: 适合种植的季节
    "CROP_0009",    // crop_id: 对应产出的作物ID
    "24-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0010",    // id: 种子唯一标识
    "韧维藤种子",   // label: 种子名称
    "这种藤蔓植物的纤维异常坚韧，可用于制作绳索和简易防护装备。果实中含有丰富的微量元素，在废土环境中是稀有的矿物质补充来源。种植难度适中，但生长周期较长。", // desc: 描述文本
    300,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:vine-leaf", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    25,             // stackMax: 最大堆叠数量
    1.5,            // quality: 品质等级(0.5-5星)
    120,            // quality_price: 品质加成价格
    Season.SPRING,  // season: 适合种植的季节
    "CROP_0010",    // crop_id: 对应产出的作物ID
    "30-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0011",    // id: 种子唯一标识
    "荚豆种子",     // label: 种子名称
    "这种豆类植物能在贫瘠土壤中生长，并能固氮改良土壤。豆荚中的种子富含优质蛋白质和必需氨基酸，是废土居民重要的植物蛋白来源，也是提升土地肥力的助手。", // desc: 描述文本
    160,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:beans", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    40,             // stackMax: 最大堆叠数量
    1.0,            // quality: 品质等级(0.5-5星)
    65,             // quality_price: 品质加成价格
    Season.SUMMER,  // season: 适合种植的季节
    "CROP_0011",    // crop_id: 对应产出的作物ID
    "14-00-00",     // duration: 生长时间(时-分-秒)
  ],
  [
    "SEED_0012",    // id: 种子唯一标识
    "耐旱稻种子",   // label: 种子名称
    "经特殊改良的水稻种子，对水分需求远低于传统水稻。虽然产量不及古代水稻，但在水资源稀缺的废土时代，其价值不可估量。米粒细长，煮熟后有淡淡的坚果香气。", // desc: 描述文本
    240,            // price: 基础价格
    "seed",         // type: 物品类型
    "game-icons:rice", // icon: 图标名称
    1,              // count: 初始数量
    true,           // stackable: 是否可堆叠
    35,             // stackMax: 最大堆叠数量
    1.5,            // quality: 品质等级(0.5-5星)
    95,             // quality_price: 品质加成价格
    Season.FALL,  // season: 适合种植的季节
    "CROP_0012",    // crop_id: 对应产出的作物ID
    "22-00-00",     // duration: 生长时间(时-分-秒)
  ],
];

export const createSeed = (): SeedInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`种子`) + " 信息");
  const SEED_LIST: SeedInterface[] = seeds_list.map((seed) => new Seed(seed));
  // console.dir(SEED_LIST, { depth: null });
  return SEED_LIST;
};
