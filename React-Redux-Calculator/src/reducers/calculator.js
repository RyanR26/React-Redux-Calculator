
const initialState = {
   screenValue : 0,
   calculatedValue1 : null,
   calculatedValue2 : null,
   arithmeticOperator : null,
   arithmeticInProgress : false,
   screenHasArithmeticSymbol : false,
   calculationComplete : false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NUMERICAL_VALUE1':
      return Object.assign({}, state, {
         screenValue : state.screenValue + action.screenValue,
         calculatedValue1 : parseFloat(state.screenValue + action.screenValue)
      })
    case 'NUMERICAL_VALUE2':
      return Object.assign({}, state, {
         screenValue : state.screenValue + action.screenValue,
         calculatedValue2 : parseFloat(state.screenValue + action.screenValue),
         screenHasArithmeticSymbol : false
      })
    case 'ARITHMETIC_OPERATOR':
      return Object.assign({}, state, {
         screenValue : action.screenValue,
         calculatedValue1: state.calculatedValue1,
         arithmeticOperator: action.screenValue,
         arithmeticInProgress : true,
         screenHasArithmeticSymbol : true,
         calculationComplete : false
      })
    case 'UPDATE_BASE_NUMBER':
      return Object.assign({}, state, {
         calculatedValue1: parseFloat(action.screenValue),
         calculatedValue2: null
      })
    case 'DO_CALCULATION':
      return Object.assign({}, state, {
         screenValue : action.screenValue,
         arithmeticInProgress : true,
         calculationComplete : true,
         screenHasArithmeticSymbol : false
      })
    case 'CLEAR_SCREEN':
      return Object.assign({}, state, {
         screenValue : ''
      })
    case 'RESET':
      return Object.assign({}, state, initialState)
    default:
      return state;
    }
};
