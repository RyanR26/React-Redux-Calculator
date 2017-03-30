import React, { Component } from 'react';
import CalculatorButtons from './calculatorButton';
import * as Data from '../data/data';
import * as Utils from '../utils/utils';


class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  _isNumeric(value) {
    const numbers = Utils.objValsArray(Data.NUMBERS)
    if(numbers.indexOf(value) > -1) {
      return true
    } else {
      return false
    }
  }

  _isOperator(value) {
      const arithmetic = Utils.objValsArray(Data.OPERATORS)
      if(arithmetic.indexOf(value) > -1 && value != Data.OPERATORS.equals) {
        return true
      } else {
        return false
      }
  }

  _doCalculation(value) {
      if(value === Data.OPERATORS.equals) {
        return true
      } else {
        return false
      }
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

  _buttonPress(value) {
    // if screen is currently showing operator symbol clear before continuing
    if(this.props.screenHasArithmeticSymbol) {
      this.props.actions.clearScreen()
    }
    // button pressed is first numeric value or continuation of calculation
    // if(this._isNumeric(value) && !this.props.arithmeticInProgress) {
    //   if(this.props.screenValue == 0) {
    //     this.props.actions.clearScreen()
    //   }
    //   this.props.actions.number1(value)
    // }
    // // button pressed is second numeric value
    // if(this._isNumeric(value) && this.props.arithmeticInProgress) {
    //   this.props.actions.number2(value)
    // }
    //
    // if(this._isNumeric(value) && this.props.calculationComplete) {
    //   this.props.actions.reset()
    //   this.props.actions.number1(value)
    // }

    // button pressed is numeric
    if(this._isNumeric(value)) {
      if(this.props.arithmeticInProgress) {
        this.props.actions.number2(value)
      }
      if(!this.props.arithmeticInProgress) {
        if(this.props.screenValue == 0) {
          this.props.actions.clearScreen()
        }
        this.props.actions.number1(value)
      }
      if(this.props.calculationComplete) {
        this.props.actions.reset()
        this.props.actions.number1(value)
      }
    }
    // button pressed is operator
    if(this._isOperator(value)) {
      if(!this.props.calculationComplete) {
         this.props.actions.arithmetic(value)
      } else {
         this.props.actions.baseNumber(this.props.screenValue)
         this.props.actions.arithmetic(value)
      }
    }
    // Equal button pressed
    if(this._doCalculation(value)) {
      if(this.props.calculatedValue2 !== 0) {
        this.props.actions.calculate(this._calculate(this.props.arithmeticOperator))
      }
    }
  }

  render() {

    const numericButtons = Data.UI_BUTTONS.numeric.map((value, index) => {
        return <CalculatorButtons
                key={index}
                value={value}
                onClick={() => this._buttonPress(value)}
        />
      })
    const operatorButtons = Data.UI_BUTTONS.operators.map((value, index) => {
      return <CalculatorButtons
              key={index}
              value={value}
              onClick={() => this._buttonPress(value)}
      />
    })

    return (
      <div>
        <div className="screen">{this.props.screenValue}</div>
        <div className="screen">{this.props.calculatedValue1}</div>
        <div className="screen">{this.props.arithmeticOperator}</div>
        <div className="screen">{this.props.calculatedValue2}</div>
        <div className="screen">{this.props.calculationComplete}</div>
        <div>
          {numericButtons}
        </div>
        <div>
          {operatorButtons}
        </div>
      </div>
    );
  }

}

export default Screen;
