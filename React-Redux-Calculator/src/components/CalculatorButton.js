import React, { Component } from 'react';

class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default CalculatorButton;

CalculatorButton.propTypes = {
  className: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
