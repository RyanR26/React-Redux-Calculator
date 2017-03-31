import React, { Component } from 'react';
import CalculatorButtons from './CalculatorButton';
import * as Data from '../data/data';
import * as Utils from '../utils/utils';
import '../css/calculator.css';


class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.ACTION = this.props.actions
  }

  _calculate(operator) {
    let param1 = parseFloat(this.props.calculatedValue1)
    let param2 = parseFloat(this.props.calculatedValue2)

    switch(operator) {
        case Data.OPERATORS.add:
            return param1 + param2;
        case Data.OPERATORS.subtract:
            return param1 - param2;
        case Data.OPERATORS.multiply:
            return param1 * param2;
        case Data.OPERATORS.divide:
            return param1 / param2;
        default:
            return param1;
    }
  }

  _handleNumericInput(value) {
    if(this.props.arithmeticInProgress) {
      this.ACTION.number2(value)
    }
    if(!this.props.arithmeticInProgress) {
      if(this.props.screenValue == 0) {
        this.ACTION.clearScreen()
      }
      this.ACTION.number1(value)
    }
    if(this.props.calculationComplete) {
      this.ACTION.reset()
      this.ACTION.number1(value)
    }
  }

  _handleOperatorInput(value) {
    if(!this.props.calculationComplete) {
      if(this.props.arithmeticInProgress) {
        this.ACTION.continuedCalculation(this._calculate(this.props.arithmeticOperator), value)
      } else {
       this.ACTION.arithmetic(value)
      }
    } else {
       this.ACTION.baseNumber(this.props.screenValue)
       this.ACTION.arithmetic(value)
    }
  }

  _handleActionInput(value) {
    if(value === Data.OPERATORS.equals) {
      this.ACTION.calculate(this._calculate(this.props.arithmeticOperator))
    }
    if(value === Data.ACTIONS.clearAll) {
       this.ACTION.reset()
    }
    if(value === Data.ACTIONS.clear) {
      this.ACTION.clearScreen()
    }
  }

  _buttonPress(value, type) {
    if(this.props.screenHasArithmeticSymbol) {
      this.ACTION.clearScreen()
    }
    if(type === 'numeric') {
      this._handleNumericInput(value)
    }
    if(type === 'operator') {
      this._handleOperatorInput(value)
    }
    if(type === 'action' ) {
      this._handleActionInput(value)
    }
  }

  render() {

    const Buttons = Data.UI_ELEMENTS_BUTTONS.map((item, index) => {
      return <CalculatorButtons
                key={index}
                value={item.value}
                name={item.name}
                onClick={() => this._buttonPress(item.value, item.type )}
              />
    })

    return (
      <div className="calc">
        <div className="calc__screen-container">
          <div className="calc__screen calc__screen--sub calc__screen--value1">{this.props.calculatedValue1}</div>
          <div className="calc__screen calc__screen--sub calc__screen--operator">{this.props.arithmeticOperator}</div>
          <div className="calc__screen calc__screen--sub calc__screen--value2">{this.props.calculatedValue2}</div>
          <div className="calc__screen calc__screen--main">{this.props.screenValue}</div>
        </div>
        <div className="calc__button-container">
          {Buttons}
        </div>
      </div>
    );
  }

}

export default Screen;
