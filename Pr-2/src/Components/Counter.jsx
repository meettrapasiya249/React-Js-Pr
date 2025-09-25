
import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    if (this.state.count === 0) {
      window.alert("Nagetive value is not Valid.....!");
    } else {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div  style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
  