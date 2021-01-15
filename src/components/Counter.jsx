import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {
  static propTypes = {
    initial: PropTypes.number.isRequired,
  };

  static defaultProps = {
    initial: 0,
  };

  state = {
    counter: this.props.initial,
  };

  interval = null;

  handleButtonClick = (event) => {
    this.setState((prevState) => ({
      counter: prevState.counter +  +event.target.dataset.operation,
    }));
  }

  render() {
    const { counter } = this.state;

    return(
      <div>
        <button data-operation="-1" onClick={this.handleButtonClick}>-1</button>
        {counter}
        <button data-operation="+1" onClick={this.handleButtonClick}>+1</button>
      </div>
    );
  }

}