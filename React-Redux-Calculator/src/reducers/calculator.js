
const initialState = {
   screenValue : 0,
   calculatedValue1 : 0,
   calculatedValue2 : 0,
   arithmeticOperator : null,
   arithmeticInProgress : false,
   screenHasArithmeticSymbol : false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NUMERICAL_VALUE1':
      return Object.assign({}, state, {
         screenValue : state.screenValue + action.screenValue,
         calculatedValue1 : parseInt(state.screenValue + action.screenValue)
      })
    case 'NUMERICAL_VALUE2':
      return Object.assign({}, state, {
         screenValue : state.screenValue + action.screenValue,
         calculatedValue2 : parseInt(state.screenValue + action.screenValue),
         screenHasArithmeticSymbol : false
      })
    case 'ARITHMETIC_OPERATOR':
      return Object.assign({}, state, {
         screenValue : action.screenValue,
         calculatedValue1: state.calculatedValue1,
         arithmeticOperator: action.screenValue,
         arithmeticInProgress : true,
         screenHasArithmeticSymbol : true
      })
    case 'CLEAR_SCREEN':
      return Object.assign({}, state, {
         screenValue : ''
      })
    default:
      return state;
    }
};
