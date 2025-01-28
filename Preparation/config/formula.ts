import { FormulaArgs } from "../../Typing/item-args";
import {
  FormulaInterface,
  FormulaItemInterface,
} from "../../Typing/formula-class";
import { FormulaType } from "../../Typing/enum-cfg";
import chalk from "chalk";

// 物品——合成配方
class Formula implements FormulaInterface {
  formula_id: string; // 配方ID
  label: string; // 配方名称
  type: FormulaType | FormulaType[]; // 配方类型
  formula_list: FormulaItemInterface[]; // 配方
  props_id: string; // 产品ID
  constructor(args: FormulaArgs) {
    this.formula_id = args[0];
    this.label = args[1];
    this.type = args[2];
    this.formula_list = args[3].map((e) => {
      return {
        ele_id: e[0],
        ele_num: e[1],
      };
    });
    this.props_id = args[4]; // 产品ID
  }
}

export const formulas_list: FormulaArgs[] = [
  // 菜肴
  [
    "FORMULA_0001",
    "土豆泥",
    FormulaType.DISHES,
    [["CROP_0001", 2]],
    "DISHES_0001",
  ],
  // 合成药
  [
    "FORMULA_0501",
    "止血散",
    FormulaType.DRUGS,
    [["HERBS_0001", 2]],
    "DRUGS_0001",
  ], // 止血散
];

export const createFormula = (): FormulaInterface[] => {
  console.log("初始化 物品：" + chalk.yellow.bold(`配方`) + " 信息");
  const FORMULA_LIST: FormulaInterface[] = formulas_list.map(
    (formula) => new Formula(formula)
  );
  console.dir(FORMULA_LIST, { depth: null });
  return FORMULA_LIST;
};

createFormula();
