// 通用物品示例
const ITEM_EXAMPLE = {
  id: '',// 全局ID
  label: '',// 名称
  desc: '',// 描述
  price: '',// 价值
  type: [],// 类型
  icon: '',// 图标
  count: '',// 数量
  stackable: true,// 可堆叠
  stackMax: 99,// 可堆叠最大数值
}
// 种子示例
const SEED_EXAMPLE = {
  id: '',// 全局ID
  label: '',// 名称
  desc: '',// 描述
  price: '',// 价值
  type: [],// 类型
  icon: '',// 图标
  count: '',// 数量
  stackable: true,// 可堆叠
  stackMax: 99,// 可堆叠最大数值
  quality: 0.5,// 品质 1-5星，先限制在种植里或者烹饪里
  quality_price: 20, // 品质的增值，每半颗心增值多少钱
  duration: '10-20-05',// 种植需要的时长，小时-分钟-秒
}
// 作物示例
const CROP_EXAMPLE = {
  id: '',// 全局ID
  label: '',// 名称
  desc: '',// 描述
  price: '',// 价值
  type: ['crop', 'food'],// 类型
  icon: '',// 图标
  count: '',// 数量
  stackable: true,// 可堆叠
  stackMax: 99,// 可堆叠最大数值
  quality: 0.5,// 品质 1-5星，先限制在种植里或者烹饪里
  quality_price: 20, // 品质的增值，每半颗心增值多少钱
  effect: {
    // 效果
    effect_limit: '',// 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
    effect_type: '',// 效果类型 即时效果、持续效果
    effect_desc: '',// 效果描述
    duration: '10-20-05',// 持续时间，仅限持续效果，小时-分钟-秒
    target: '',// 作用目标 玩家player、建筑building，队伍team、等等
    // 效果数值 
    value: '' || {
      def: {// 效果类型
        type: 'debuff',// 正面或者负面效果
        unit: '%',// 根据不同单位参与不统计算
        val: 1,// 效果数值
      }
    },
  },
}
// 掉落物——装备 示例
// 套装属性
const SET_EXAMPLE = {
  set_id: '',// 套装ID
  set_label: '',// 套装名称
  set_desc: '',// 套装描述
  set_need_types: [],// 套装需要的位置
  set_effect: {
    // 套装效果
    '2': {
      // 2件套效果
      effect_limit: '',// 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
      effect_type: 'immediate',// 效果类型 即时效果、持续效果
      effect_desc: '',// 效果描述
      target: '',// 作用目标 玩家player、建筑building，队伍team、等等
      // 效果数值 
      value: {
        def: {// 效果类型
          type: 'debuff',// 正面或者负面效果
          unit: '%',// 根据不同单位参与不统计算
          val: 1,// 效果数值
        }
      },
    },
    '4': {
      // 4件套效果
      effect_limit: '',// 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
      effect_type: 'immediate',// 效果类型 即时效果、持续效果
      effect_desc: '',// 效果描述
      target: '',// 作用目标 玩家player、建筑building，队伍team、等等
      // 效果数值 
      value: {
        def: {// 效果类型
          type: 'debuff',// 正面或者负面效果
          unit: '%',// 根据不同单位参与不统计算
          val: 1,// 效果数值
        }
      },
    },
  }
}

// 装备由于每一件都不同，所以不可堆叠
const EQUIPMENT_EXAMPLE = {
  id: '',// 全局ID
  label: '',// 名称
  desc: '',// 描述
  price: '',// 价值
  quality: 'common',// 品质 
  type: 'equipment',// 类型
  icon: '',// 图标
  equipment_type: '',// 装备类型：剑、盾牌、头盔、铠甲、鞋子、腰带、手套、项链、戒指、手镯 等等
  set_effect_id: '',// 套装效果Id，用于查询该套装效果
  effect: {
    // 效果
    effect_limit: '',// 效果限制范围类型 比如在什么场合可以使用，战斗、探索、种植、等等
    effect_type: 'immediate',// 效果类型 即时效果(immediate)、持续效果(continued)
    effect_desc: '',// 效果描述
    target: '',// 作用目标 玩家player、建筑building，队伍team、等等
    // 效果数值 
    value: {
      def: {// 效果类型
        type: 'debuff',// 正面或者负面效果
        unit: '%',// 根据不同单位参与不统计算
        val: 1,// 效果数值
      }
    },
  },
}
// 蓝图示例