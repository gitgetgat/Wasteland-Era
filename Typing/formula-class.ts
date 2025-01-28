// 物品——合成配方条目
export interface FormulaItemInterface {
  ele_id: string;
  ele_num: number;
}

// 物品——合成配方
export interface FormulaInterface {
  formula_id: string; // 配方ID
  formula_list: FormulaItemInterface[]; // 配方
}
