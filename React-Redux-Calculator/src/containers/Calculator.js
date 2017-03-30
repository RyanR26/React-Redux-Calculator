import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import Screen from '../components/screen';
//import Shelf from './shelf';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="Calculator">
        <Screen/>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        screenValue : state.calculator.screenValue,
        calculatedValue1 : state.calculator.calculatedValue1,
        calculatedValue2 : state.calculator.calculatedValue2,
        arithmeticOperator : state.calculator.arithmeticOperator,
        arithmeticInProgress : state.calculator.arithmeticInProgress,
        screenHasArithmeticSymbol : state.calculator.screenHasArithmeticSymbol,
        calculationComplete : state.calculator.calculationComplete
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(Actions, dispatch)
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Screen);
