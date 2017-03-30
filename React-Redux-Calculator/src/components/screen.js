import React, { Component } from 'react';

class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _isArithmetic(value) {
      const arithmetic = ['+','-','/','x']
      if(arithmetic.indexOf(value) > -1) {
        return true
      } else {
        return false
      }
  }

  _doCalculation(value) {
      if(value === '=') {
        return true
      } else {
        return false
      }
  }

  _buttonPress(value) {
    if(this.props.screenHasArithmeticSymbol) {
      this.props.actions.clearScreen()
    }
    if(this.props.arithmeticInProgress) {
      this.props.actions.number2(value)
    } else {
      this.props.actions.number1(value)
    }
    if(this._isArithmetic(value)) {
      this.props.actions.arithmetic(value)
    }
    if(this._doCalculation(value)) {
      this.props.actions.arithmetic(value)
    }
  }

  render() {
    return (
      <div>
        <div className="screen">{this.props.screenValue}</div>
        <div className="screen">{this.props.calculatedValue1}</div>
        <div className="screen">{this.props.arithmeticOperator}</div>
        <div className="screen">{this.props.calculatedValue2}</div>
        <div onClick={() => this._buttonPress('1')}>1</div>
        <div onClick={() => this._buttonPress('2')}>2</div>
        <div onClick={() => this._buttonPress('3')}>3</div>
        <div onClick={() => this._buttonPress('4')}>4</div>
        <div onClick={() => this._buttonPress('5')}>5</div>
        <div onClick={() => this._buttonPress('+')}>+</div>
        <div onClick={() => this._buttonPress('-')}>-</div>
        <div onClick={() => this._buttonPress('/')}>/</div>
        <div onClick={() => this._buttonPress('x')}>x</div>
        <div onClick={() => this._buttonPress('=')}>=</div>
      </div>
    );
  }

}

export default Screen;
