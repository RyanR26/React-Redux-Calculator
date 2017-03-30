import * as Utils from '../utils/utils';

export const OPERATORS = {
  add : '+',
  subtract : '-',
  multiply : 'x',
  divide : '/',
  equals : '=',
  clear : 'C',
  clearAll : 'CA'
}

export const NUMBERS = [0,1,2,3,4,5,6,7,8,9,'.']

export const UI_BUTTONS = {
  numeric : NUMBERS,
  operators : Utils.objValsArray(OPERATORS)
}
