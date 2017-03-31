import React, { Component } from 'react';
import '../css/calculator.css';

const CalculatorButton = (props) => {
  return (
    <span className="calc__button" onClick={props.onClick}>
      {props.value}
    </span>
  )
}
export default CalculatorButton;
