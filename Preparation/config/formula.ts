import { FormulaArgs } from "../../Typing/item-args";
import { FormulaInterface, FormulaItemInterface } from "../../Typing/formula-class";
import chalk from 'chalk';

class Formula implements FormulaInterface {
  formula_id: string// 配方ID
  formula_list: FormulaItemInterface[]// 配方
  constructor(args: FormulaArgs) {
    this.formula_id = args[0]
    this.formula_list = args[1].map(e => {
      return {
        ele_id: e[0],
        ele_num: e[1]
      }
    })
  }
}

export const formulas_list: FormulaArgs[] = [
  ['FORMULA_0001', [['CROP_0001', 1]]],// 土豆泥
  ['FORMULA_0002', [['CROP_0002', 1]]],// 羊角薯泥
]

export const createFormula = (): FormulaInterface[] => {
  console.log('初始化 物品：' + chalk.yellow.bold(`配方`) + ' 信息');
  const FORMULA_LIST: FormulaInterface[] = formulas_list.map(formula => new Formula(formula))
  console.dir(FORMULA_LIST, { depth: null });
  return FORMULA_LIST
}

createFormula()