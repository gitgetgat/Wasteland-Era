/**
 * 烹饪模块菜单数据
 * 包含所有阶段的菜肴配置信息
 */

const { calculateLevelExp } = require('./cooking-level-exp.js');

// 菜单基础数据结构
const cookingMenus = {
  // 第1阶段 (1-10级) - 2个菜单
  stage1: [
    {
      name: "蛋炒饭",           // 菜肴名称
      level: 1,                // 解锁所需等级
      ingredients: ["米饭", "鸡蛋", "葱花"],  // 所需食材列表
      cookingTime: 10,         // 烹饪时间(秒)
      difficulty: 1,           // 难度系数(影响成功率)
      description: "最基础的家常菜，将鸡蛋打散后与米饭一起翻炒，撒上葱花即可。", // 菜肴描述
      expReward: () => Math.round(calculateLevelExp(5) * 0.4),  // 烹饪成功后获得的经验值
      coinReward: 10           // 烹饪成功后获得的金币奖励
    },
    {
      name: "西红柿鸡蛋汤",
      level: 5,
      ingredients: ["西红柿", "鸡蛋", "盐", "香葱"],
      cookingTime: 15,         // 烹饪时间(秒)
      difficulty: 1.2,
      description: "将西红柿切块，鸡蛋打散，先炒西红柿出汁，加水煮沸后倒入蛋液，调味即可。",
      expReward: () => Math.round(calculateLevelExp(10) * 0.4),
      coinReward: 15
    }
  ],

  // 第2阶段 (11-20级) - 2个菜单
  stage2: [
    {
      name: "宫保鸡丁",
      level: 11,
      ingredients: ["鸡胸肉", "花生", "干辣椒", "葱姜蒜", "黄瓜", "淀粉"],
      cookingTime: 20,         // 烹饪时间(秒)
      difficulty: 2,
      description: "将鸡肉切丁腌制，爆香干辣椒和花生，炒制鸡丁至熟，调味收汁。",
      expReward: () => Math.round(calculateLevelExp(15) * 0.35),
      coinReward: 30
    },
    {
      name: "鱼香肉丝",
      level: 15,
      ingredients: ["猪里脊", "木耳", "胡萝卜", "竹笋", "葱姜蒜", "豆瓣酱"],
      cookingTime: 25,         // 烹饪时间(秒)
      difficulty: 2.2,
      description: "将肉丝腌制，木耳泡发，胡萝卜和竹笋切丝，爆香豆瓣酱，炒制所有材料，勾芡收汁。",
      expReward: () => Math.round(calculateLevelExp(20) * 0.35),
      coinReward: 40
    }
  ],

  // 第3阶段 (21-30级) - 3个菜单
  stage3: [
    {
      name: "麻婆豆腐",
      level: 21,
      ingredients: ["豆腐", "肉末", "豆瓣酱", "花椒", "葱姜蒜", "淀粉"],
      cookingTime: 30,         // 烹饪时间(秒)
      difficulty: 2.5,
      description: "豆腐切块焯水，爆香肉末和豆瓣酱，加入豆腐煮制入味，撒上花椒粉和葱花。",
      expReward: () => Math.round(calculateLevelExp(23) * 0.3),
      coinReward: 60
    },
    {
      name: "糖醋排骨",
      level: 24,
      ingredients: ["猪排骨", "白糖", "醋", "酱油", "葱姜", "料酒"],
      cookingTime: 35,         // 烹饪时间(秒)
      difficulty: 2.8,
      description: "排骨切段焯水，锅中放糖熬至焦糖色，加入排骨翻炒上色，加入其他调料炖至酥烂。",
      expReward: () => Math.round(calculateLevelExp(27) * 0.3),
      coinReward: 80
    },
    {
      name: "水煮鱼",
      level: 27,
      ingredients: ["鱼片", "豆芽", "干辣椒", "花椒", "葱姜蒜", "豆瓣酱", "油"],
      cookingTime: 40,         // 烹饪时间(秒)
      difficulty: 3,
      description: "鱼片腌制，豆芽焯水垫底，煮制鱼片，最后淋上热油爆香的辣椒花椒。",
      expReward: () => Math.round(calculateLevelExp(30) * 0.3),
      coinReward: 100
    }
  ],

  // 第4阶段 (31-40级) - 3个菜单
  stage4: [
    {
      name: "东坡肉",
      level: 31,
      ingredients: ["五花肉", "酱油", "料酒", "冰糖", "葱姜", "八角"],
      cookingTime: 45,         // 烹饪时间(秒)
      difficulty: 3.5,
      description: "五花肉切块焯水，加入调料慢炖至酥烂，肥而不腻，色泽红亮。",
      expReward: () => Math.round(calculateLevelExp(34) * 0.25),
      coinReward: 150
    },
    {
      name: "鲁菜糖醋鲤鱼",
      level: 34,
      ingredients: ["鲤鱼", "白糖", "醋", "番茄酱", "葱姜", "淀粉"],
      cookingTime: 50,         // 烹饪时间(秒)
      difficulty: 3.8,
      description: "鲤鱼去鳞去内脏，两面划花刀，裹淀粉炸至金黄，浇上熬制的糖醋汁。",
      expReward: () => Math.round(calculateLevelExp(37) * 0.25),
      coinReward: 180
    },
    {
      name: "佛跳墙",
      level: 37,
      ingredients: ["鱼翅", "鲍鱼", "海参", "花菇", "鸡", "火腿", "猪蹄", "料酒", "姜片"],
      cookingTime: 55,
      difficulty: 4.2,
      description: "多种珍贵食材经过焯水处理，放入坛中，加入调料和高汤，密封后隔水炖数小时。",
      expReward: () => Math.round(calculateLevelExp(40) * 0.25),
      coinReward: 250
    },

    // 新增西餐菜肴
    {
      name: "法式蜗牛",
      level: 32,
      ingredients: ["蜗牛", "大蒜", "黄油", "欧芹", "白葡萄酒", "面包屑"],
      cookingTime: 48,
      difficulty: 3.6,
      description: "蜗牛与大蒜黄油混合，放入专用蜗牛盘中，撒上欧芹和面包屑，烤至金黄。",
      expReward: () => Math.round(calculateLevelExp(35) * 0.25),
      coinReward: 160
    },
    {
      name: "牛排配红酒汁",
      level: 35,
      ingredients: ["牛排", "红酒", "黄油", "香草", "大蒜", "牛肉高汤", "迷迭香"],
      cookingTime: 52,
      difficulty: 3.9,
      description: "牛排煎至理想熟度，同时用红酒和高汤熬制酱汁，加入香草和黄油增香，淋在牛排上。",
      expReward: () => Math.round(calculateLevelExp(38) * 0.25),
      coinReward: 200
    },
    {
      name: "龙虾浓汤",
      level: 38,
      ingredients: ["龙虾", "淡奶油", "白葡萄酒", "洋葱", "胡萝卜", "芹菜", "番茄酱", "干邑白兰地"],
      cookingTime: 58,
      difficulty: 4.3,
      description: "龙虾壳熬制高汤，加入蔬菜和香料，最后加入淡奶油和少量白兰地提味，口感浓郁奢华。",
      expReward: () => Math.round(calculateLevelExp(41) * 0.25),
      coinReward: 270
    }
  ],

  // 第5阶段 (41-50级) - 3个菜单
  stage5: [
    {
      name: "北京烤鸭",
      level: 41,
      ingredients: ["鸭子", "蜂蜜", "酱油", "五香粉", "葱", "甜面酱", "薄饼"],
      cookingTime: 60,         // 烹饪时间(秒)
      difficulty: 4.5,
      description: "鸭子处理后风干，涂抹蜂蜜和调料，悬挂在烤炉中烤制至皮脆肉嫩。",
      expReward: () => Math.round(calculateLevelExp(44) * 0.2),
      coinReward: 300
    },
    {
      name: "松鼠桂鱼",
      level: 44,
      ingredients: ["桂鱼", "番茄酱", "白糖", "醋", "淀粉", "松子"],
      cookingTime: 65,         // 烹饪时间(秒)
      difficulty: 4.8,
      description: "桂鱼去鳞去内脏，鱼身划出网格状花刀，裹淀粉炸至金黄，呈松鼠状，浇上甜酸汁。",
      expReward: () => Math.round(calculateLevelExp(47) * 0.2),
      coinReward: 350
    },
    {
      name: "满汉全席-乾隆白菜",
      level: 47,
      ingredients: ["白菜", "火腿", "香菇", "虾仁", "鸡汤", "淀粉"],
      cookingTime: 70,         // 烹饪时间(秒)
      difficulty: 5,
      description: "白菜叶片完整剥离，每片叶子包裹精心调制的馅料，层层叠加恢复白菜原状，蒸制入味。",
      expReward: () => Math.round(calculateLevelExp(50) * 0.2),
      coinReward: 400
    },

    // 新增西餐菜肴
    {
      name: "法式鹅肝",
      level: 42,
      ingredients: ["鹅肝", "白兰地", "盐", "黑胡椒", "无花果酱", "法棍"],
      cookingTime: 62,
      difficulty: 4.6,
      description: "鹅肝切片后快速煎至两面金黄，内部保持粉红，配以无花果酱和烤制的法棍片。",
      expReward: () => Math.round(calculateLevelExp(45) * 0.2),
      coinReward: 320
    },
    {
      name: "威灵顿牛排",
      level: 45,
      ingredients: ["牛菲力", "酥皮", "蘑菇", "火腿", "芥末", "蛋黄"],
      cookingTime: 68,
      difficulty: 4.9,
      description: "牛菲力煎至表面封住肉汁，包裹蘑菇泥和火腿，再用酥皮包裹，烤至金黄酥脆。",
      expReward: () => Math.round(calculateLevelExp(48) * 0.2),
      coinReward: 370
    },
    {
      name: "法式蓝带猪排",
      level: 48,
      ingredients: ["猪排", "火腿", "瑞士芝士", "面包屑", "黄油", "鸡蛋", "面粉"],
      cookingTime: 72,
      difficulty: 5.1,
      description: "猪排切口塞入火腿和芝士，裹上面粉、蛋液和面包屑，煎至金黄，芝士融化。",
      expReward: () => Math.round(calculateLevelExp(51) * 0.2),
      coinReward: 420
    }
  ],

  // 第6阶段 (51-60级) - 3个菜单
  stage6: [
    {
      name: "满汉全席-扒烧整猪",
      level: 51,
      ingredients: ["整猪", "蜂蜜", "酱油", "五香粉", "料酒", "葱姜蒜"],
      cookingTime: 75,         // 烹饪时间(秒)
      difficulty: 5.5,
      description: "整猪处理后涂抹调料，放入特制烤炉中慢慢烤制，皮脆肉嫩，色泽红亮。",
      expReward: () => Math.round(calculateLevelExp(54) * 0.15),
      coinReward: 500
    },
    {
      name: "满汉全席-熊掌",
      level: 54,
      ingredients: ["熊掌", "火腿", "鸡", "冬菇", "鹿筋", "鸡汤", "料酒"],
      cookingTime: 80,         // 烹饪时间(秒)
      difficulty: 6,
      description: "熊掌经过特殊处理后与多种珍贵食材一起炖煮，需要极长时间慢炖。",
      expReward: () => Math.round(calculateLevelExp(57) * 0.15),
      coinReward: 600
    },
    {
      name: "满汉全席-龙凤呈祥",
      level: 57,
      ingredients: ["整鸡", "整鸭", "火腿", "鱼翅", "鲍鱼", "海参", "花菇", "料酒"],
      cookingTime: 85,         // 烹饪时间(秒)
      difficulty: 6.5,
      description: "将整鸡整鸭雕刻成龙凤形状，内部填充多种珍贵食材，蒸制后摆盘如龙凤呈祥之态。",
      expReward: () => Math.round(calculateLevelExp(60) * 0.15),
      coinReward: 700
    }
  ],

  // 第7阶段 (61-70级) - 4个菜单
  stage7: [
    {
      name: "宫廷秘制-玉笛谁家听落梅",
      level: 61,
      ingredients: ["竹笋", "火腿", "鸡脯", "冬菇", "虾仁", "鸡汤", "料酒"],
      cookingTime: 90,         // 烹饪时间(秒)
      difficulty: 7,
      description: "以竹笋为主体，雕刻成笛子形状，内部填充精心调制的馅料，蒸制后摆盘如笛落梅间。",
      expReward: () => Math.round(calculateLevelExp(63) * 0.12),
      coinReward: 800
    },
    {
      name: "宫廷秘制-蟹黄狮子头",
      level: 63,
      ingredients: ["猪肉", "蟹黄", "香菇", "葱姜", "料酒", "高汤"],
      cookingTime: 95,         // 烹饪时间(秒)
      difficulty: 7.2,
      description: "将猪肉剁成细末，混合蟹黄等材料制成大肉丸，慢炖至酥烂入味。",
      expReward: () => Math.round(calculateLevelExp(65) * 0.12),
      coinReward: 850
    },
    {
      name: "宫廷秘制-九转大肠",
      level: 65,
      ingredients: ["猪大肠", "酱油", "白糖", "醋", "料酒", "八角", "桂皮", "干辣椒"],
      cookingTime: 100,        // 烹饪时间(秒)
      difficulty: 7.5,
      description: "猪大肠经过九次翻转烹饪，每次加入不同调料，最终色泽红亮，酥烂入味。",
      expReward: () => Math.round(calculateLevelExp(67) * 0.12),
      coinReward: 900
    },
    {
      name: "宫廷秘制-鸳鸯锅",
      level: 67,
      ingredients: ["鸡", "鸭", "猪肉", "牛肉", "虾", "鱼丸", "豆腐", "蔬菜", "辣椒", "花椒"],
      cookingTime: 105,        // 烹饪时间(秒)
      difficulty: 7.8,
      description: "特制锅具分隔成鸳鸯形状，一边麻辣，一边清淡，各种食材分类摆放。",
      expReward: () => Math.round(calculateLevelExp(70) * 0.12),
      coinReward: 1000
    },

    // 新增西餐菜肴
    {
      name: "法式七层巧克力蛋糕",
      level: 62,
      ingredients: ["黑巧克力", "白巧克力", "奶油", "鸡蛋", "面粉", "糖", "黄油"],
      cookingTime: 92,
      difficulty: 7.1,
      description: "七层不同口味的巧克力蛋糕层层叠加，每层口感和甜度各异，表面装饰精美的巧克力花纹。",
      expReward: () => Math.round(calculateLevelExp(64) * 0.12),
      coinReward: 820
    },
    {
      name: "意式慢炖小牛膝",
      level: 64,
      ingredients: ["小牛膝", "红酒", "番茄", "胡萝卜", "芹菜", "洋葱", "迷迭香", "百里香"],
      cookingTime: 98,
      difficulty: 7.4,
      description: "小牛膝与蔬菜和香料一起在红酒中慢炖数小时，肉质酥烂，风味浓郁，搭配意式蛋奶面。",
      expReward: () => Math.round(calculateLevelExp(66) * 0.12),
      coinReward: 880
    },
    {
      name: "法式松露煎蛋饼",
      level: 66,
      ingredients: ["鸡蛋", "黑松露", "帕玛森芝士", "黄油", "香草", "盐", "黑胡椒"],
      cookingTime: 102,
      difficulty: 7.7,
      description: "蛋液中加入切碎的黑松露和芝士，用黄油煎制成蓬松的蛋饼，撒上松露碎和香草点缀。",
      expReward: () => Math.round(calculateLevelExp(68) * 0.12),
      coinReward: 950
    },
    {
      name: "西班牙海鲜饭",
      level: 68,
      ingredients: ["短粒米", "藏红花", "虾", "贻贝", "鱿鱼", "鸡高汤", "橄榄油", "番茄", "柠檬"],
      cookingTime: 108,
      difficulty: 7.9,
      description: "米粒与藏红花和高汤一起煮制，中途加入海鲜，最后形成锅底焦脆的特色饭，挤上柠檬汁提味。",
      expReward: () => Math.round(calculateLevelExp(71) * 0.12),
      coinReward: 1050,
      cuisine: "西餐"
    }
  ],

  // 第8阶段 (71-80级) - 4个中餐 + 4个西餐
  stage8: [
    // 原有中餐菜肴保持不变，添加cuisine属性
    {
      name: "珍馐盛宴-佛光普照",
      level: 71,
      ingredients: ["豆腐", "香菇", "竹笋", "莲子", "百合", "枸杞", "银杏", "素高汤"],
      cookingTime: 105,
      difficulty: 8,
      description: "以豆腐为主体雕刻成佛像形状，周围点缀各种素食材料，寓意佛光普照。",
      expReward: () => Math.round(calculateLevelExp(73) * 0.1),
      coinReward: 1200,
      cuisine: "中餐"
    },
    {
      name: "珍馐盛宴-龙吟凤舞",
      level: 73,
      ingredients: ["整鸡", "整鱼", "虾", "蟹", "鲍鱼", "海参", "花菇", "竹笋"],
      cookingTime: 110,
      difficulty: 8.3,
      description: "将整鸡雕刻成龙形，整鱼雕刻成凤形，周围点缀海鲜，摆盘如龙凤共舞。",
      expReward: () => Math.round(calculateLevelExp(75) * 0.1),
      coinReward: 1400,
      cuisine: "中餐"
    },
    {
      name: "珍馐盛宴-八宝葫芦鸭",
      level: 75,
      ingredients: ["整鸭", "火腿", "鸡肉", "虾仁", "栗子", "莲子", "枸杞", "银杏", "料酒"],
      cookingTime: 110,
      difficulty: 8.6,
      description: "将整鸭雕刻成葫芦形状，内部填充八种珍贵食材，寓意福禄双全。",
      expReward: () => Math.round(calculateLevelExp(77) * 0.1),
      coinReward: 1600,
      cuisine: "中餐"
    },
    {
      name: "珍馐盛宴-满汉全席精选",
      level: 77,
      ingredients: ["鱼翅", "鲍鱼", "海参", "燕窝", "熊掌", "鹿筋", "火腿", "冬虫夏草"],
      cookingTime: 115,
      difficulty: 9,
      description: "集满汉全席精华于一席，多种珍贵食材组合烹饪，讲究色香味形意俱全。",
      expReward: () => Math.round(calculateLevelExp(80) * 0.1),
      coinReward: 2000,
      cuisine: "中餐"
    },

    // 新增西餐菜肴
    {
      name: "法式全鹅宴",
      level: 72,
      ingredients: ["整鹅", "鹅肝", "鹅腿", "鹅胸", "橙子", "蜂蜜", "红酒", "香料"],
      cookingTime: 108,
      difficulty: 8.2,
      description: "一只鹅的不同部位采用不同烹饪方法：鹅肝煎制，鹅腿炖煮，鹅胸烤制，最后摆盘成艺术品。",
      expReward: () => Math.round(calculateLevelExp(74) * 0.1),
      coinReward: 1300,
      cuisine: "西餐"
    },
    {
      name: "意式黑松露烩饭",
      level: 74,
      ingredients: ["意大利米", "黑松露", "白葡萄酒", "帕玛森芝士", "黄油", "鸡高汤", "洋葱"],
      cookingTime: 112,
      difficulty: 8.5,
      description: "米粒与白葡萄酒炒香，慢慢加入热高汤，不断搅拌，最后加入切片黑松露和芝士，香气四溢。",
      expReward: () => Math.round(calculateLevelExp(76) * 0.1),
      coinReward: 1500,
      cuisine: "西餐"
    },
    {
      name: "法式蓝龙虾",
      level: 76,
      ingredients: ["蓝龙虾", "白葡萄酒", "奶油", "干邑白兰地", "香草", "黄油", "香料"],
      cookingTime: 114,
      difficulty: 8.8,
      description: "蓝龙虾用白葡萄酒蒸煮，制作奶油白兰地酱汁，淋在龙虾上，配以精致的蔬菜装饰。",
      expReward: () => Math.round(calculateLevelExp(78) * 0.1),
      coinReward: 1800,
      cuisine: "西餐"
    },
    {
      name: "皇家海鲜拼盘",
      level: 78,
      ingredients: ["龙虾", "帝王蟹", "鲍鱼", "扇贝", "鱼子酱", "柠檬", "香草", "橄榄油"],
      cookingTime: 118,
      difficulty: 9.2,
      description: "多种顶级海鲜采用不同烹饪方法，摆盘如皇冠形状，点缀鱼子酱和金箔，极尽奢华。",
      expReward: () => Math.round(calculateLevelExp(81) * 0.1),
      coinReward: 2200,
      cuisine: "西餐"
    }
  ],

  // 第9阶段 (81-90级) - 4个中餐 + 4个西餐
  stage9: [
    // 原有中餐菜肴保持不变，添加cuisine属性
    {
      name: "天府盛宴-变脸豆腐",
      level: 81,
      ingredients: ["豆腐", "辣椒", "花椒", "豆瓣酱", "鸡汤", "淀粉"],
      cookingTime: 115,
      difficulty: 9.2,
      description: "豆腐表面通过特殊技法呈现川剧变脸效果，入口后味道层次分明，变化多端。",
      expReward: () => Math.round(calculateLevelExp(83) * 0.08),
      coinReward: 2500,
      cuisine: "中餐"
    },
    {
      name: "天府盛宴-五彩云霄",
      level: 83,
      ingredients: ["鸡", "鸭", "鱼", "虾", "蟹", "五色蔬菜", "高汤"],
      cookingTime: 115,
      difficulty: 9.4,
      description: "五种主料分别制成五色，摆盘如彩云层叠，每一层味道各异又相互融合。",
      expReward: () => Math.round(calculateLevelExp(85) * 0.08),
      coinReward: 3000,
      cuisine: "中餐"
    },
    {
      name: "天府盛宴-九龙戏珠",
      level: 85,
      ingredients: ["九种海鲜", "龙眼", "荔枝", "百合", "莲子", "高汤"],
      cookingTime: 120,
      difficulty: 9.6,
      description: "九种海鲜雕刻成龙形，环绕中央的\"明珠\"，寓意九龙戏珠，极尽奢华。",
      expReward: () => Math.round(calculateLevelExp(87) * 0.08),
      coinReward: 3500,
      cuisine: "中餐"
    },
    {
      name: "天府盛宴-千年灵芝",
      level: 87,
      ingredients: ["灵芝", "人参", "鹿茸", "冬虫夏草", "鲍鱼", "海参", "花菇", "高汤"],
      cookingTime: 120,
      difficulty: 9.8,
      description: "以珍贵药材和食材慢炖，成品形如千年灵芝，具有极高的滋补价值。",
      expReward: () => Math.round(calculateLevelExp(90) * 0.08),
      coinReward: 4000,
      cuisine: "中餐"
    },

    // 新增西餐菜肴
    {
      name: "法式松露全牛宴",
      level: 82,
      ingredients: ["牛菲力", "牛舌", "牛尾", "牛颊肉", "黑松露", "红酒", "香料", "黄油"],
      cookingTime: 115,
      difficulty: 9.3,
      description: "一头牛的不同部位采用不同烹饪方法，每种都配以黑松露提味，摆盘精美，风味独特。",
      expReward: () => Math.round(calculateLevelExp(84) * 0.08),
      coinReward: 2800,
      cuisine: "西餐"
    },
    {
      name: "法式金箔香槟蛋糕",
      level: 84,
      ingredients: ["香槟", "黄油", "鸡蛋", "面粉", "糖", "香草", "金箔"],
      cookingTime: 118,
      difficulty: 9.5,
      description: "蛋糕体中加入香槟增添风味，层层叠加奶油，表面装饰真金箔，华丽而不失优雅。",
      expReward: () => Math.round(calculateLevelExp(86) * 0.08),
      coinReward: 3200,
      cuisine: "西餐"
    },
    {
      name: "意式白松露烩饭",
      level: 86,
      ingredients: ["意大利米", "白松露", "白葡萄酒", "帕玛森芝士", "黄油", "鸡高汤", "洋葱"],
      cookingTime: 120,
      difficulty: 9.7,
      description: "采用稀有的白松露制作烩饭，香气比黑松露更为馥郁，搭配顶级帕玛森芝士，口感极致。",
      expReward: () => Math.round(calculateLevelExp(88) * 0.08),
      coinReward: 3800,
      cuisine: "西餐"
    },
    {
      name: "法式鱼子酱配香槟",
      level: 88,
      ingredients: ["白鲟鱼子酱", "香槟", "鹌鹑蛋", "小圆面包", "酸奶油", "洋葱末", "柠檬"],
      cookingTime: 120,
      difficulty: 9.9,
      description: "顶级白鲟鱼子酱配以小圆面包和酸奶油，搭配半熟鹌鹑蛋，佐以香槟，极致奢华体验。",
      expReward: () => Math.round(calculateLevelExp(91) * 0.08),
      coinReward: 4500,
      cuisine: "西餐"
    }
  ],

  // 第10阶段 (91-100级) - 4个中餐 + 4个西餐
  stage10: [
    // 原有中餐菜肴保持不变，添加cuisine属性
    {
      name: "仙境盛宴-百鸟朝凤",
      level: 91,
      ingredients: ["整鸡", "整鸭", "整鹅", "整鸽", "各种禽类", "珍贵调料"],
      cookingTime: 120,
      difficulty: 10,
      description: "多种禽类雕刻成百鸟形态，环绕中央的\"凤凰\"，场面宏大，技艺精湛。",
      expReward: () => Math.round(calculateLevelExp(93) * 0.05),
      coinReward: 5000,
      cuisine: "中餐"
    },
    {
      name: "仙境盛宴-龙凤呈祥全席",
      level: 93,
      ingredients: ["整猪", "整羊", "整牛", "整鸡", "整鸭", "整鱼", "各种海鲜", "珍贵调料"],
      cookingTime: 120,
      difficulty: 10.5,
      description: "集各种顶级食材于一席，雕刻成龙凤呈祥的壮观场面，需要多人协作完成。",
      expReward: () => Math.round(calculateLevelExp(95) * 0.05),
      coinReward: 6000,
      cuisine: "中餐"
    },
    {
      name: "仙境盛宴-八仙过海",
      level: 95,
      ingredients: ["八种顶级海鲜", "八种名贵药材", "八种珍稀食材", "高汤"],
      cookingTime: 120,
      difficulty: 11,
      description: "以八仙为主题，八种海鲜雕刻成八仙形象，各具特色，寓意吉祥。",
      expReward: () => Math.round(calculateLevelExp(97) * 0.05),
      coinReward: 8000,
      cuisine: "中餐"
    },
    {
      name: "仙境盛宴-天宫瑶池",
      level: 97,
      ingredients: ["全套顶级食材", "全套名贵药材", "全套珍稀调料"],
      cookingTime: 120,
      difficulty: 12,
      description: "集烹饪之大成，以天宫瑶池为主题，场面宏大，技艺精湛，味道绝伦，为烹饪的最高境界。",
      expReward: () => Math.round(calculateLevelExp(100) * 0.05),
      coinReward: 10000,
      cuisine: "中餐"
    },

    // 新增西餐菜肴
    {
      name: "皇家盛宴-十二道菜",
      level: 92,
      ingredients: ["龙虾", "鹅肝", "松露", "鱼子酱", "牛排", "羊排", "鸭胸", "鹌鹑", "香槟", "红酒", "各种香料"],
      cookingTime: 120,
      difficulty: 10.2,
      description: "十二道不同风格的顶级菜肴依次上桌，每道菜都代表一种烹饪技艺的巅峰，配以不同的酒水。",
      expReward: () => Math.round(calculateLevelExp(94) * 0.05),
      coinReward: 5500,
      cuisine: "西餐"
    },
    {
      name: "米其林星级大餐",
      level: 94,
      ingredients: ["和牛", "鹅肝", "黑松露", "白松露", "鱼子酱", "龙虾", "帝王蟹", "香槟", "金箔"],
      cookingTime: 120,
      difficulty: 10.8,
      description: "集合多国顶级食材，采用分子料理等现代烹饪技法，每一道菜都如艺术品般精致，味道层次丰富。",
      expReward: () => Math.round(calculateLevelExp(96) * 0.05),
      coinReward: 7000,
      cuisine: "西餐"
    },
    {
      name: "世界名厨联合盛宴",
      level: 96,
      ingredients: ["全球顶级食材", "稀有香料", "名贵酒水", "珍稀调味料"],
      cookingTime: 120,
      difficulty: 11.5,
      description: "模拟世界各国名厨联手打造的顶级盛宴，融合东西方烹饪精华，每一口都是味蕾的极致享受。",
      expReward: () => Math.round(calculateLevelExp(98) * 0.05),
      coinReward: 9000,
      cuisine: "西餐"
    },
    {
      name: "厨神的馈赠",
      level: 98,
      ingredients: ["传说中的食材", "失传的香料", "古老的配方", "现代的技法"],
      cookingTime: 120,
      difficulty: 12.5,
      description: "传说中只有厨神才能完成的终极料理，融合古今中外所有烹饪精华，食用后如临仙境，回味无穷。",
      expReward: () => Math.round(calculateLevelExp(100) * 0.05),
      coinReward: 12000,
      cuisine: "西餐"
    }
  ]
}
module.exports = { cookingMenus };