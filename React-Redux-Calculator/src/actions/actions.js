const NUMERICAL_VALUE1 = 'NUMERICAL_VALUE1';
const NUMERICAL_VALUE2 = 'NUMERICAL_VALUE2';
const ARITHMETIC_OPERATOR = 'ARITHMETIC_OPERATOR';
const CLEAR_SCREEN = 'CLEAR_SCREEN';

export const number1 = (value) => {
  return {
    type : NUMERICAL_VALUE1,
    screenValue : value
  }
}

export const number2 = (value) => {
  return {
    type : NUMERICAL_VALUE2,
    screenValue : value
  }
}

export const clearScreen = () => {
  return {
    type : CLEAR_SCREEN
  }
}

export const arithmetic = (operatorSymbol) => {
  return {
    type : ARITHMETIC_OPERATOR,
    screenValue : operatorSymbol
  }
}


//action - dispatch action to store
// export function buttonPressed() {
//   return dispatch => {
//     dispatch(updateDisplay())
//   }
// }
//
// import * as types from './action-types';
//
// export const addPerson = (person) => {
//   return {
//     type: types.ADD_PERSON,
//     person
//   };
// }




// export default;
