import React from 'react';
// import styles from './Counter.module.css';
class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className="Counter">
        {/* <Value value={value} /> */}
        <span className="Counter__value">{this.state.value}</span>

        {/* <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        /> */}
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
