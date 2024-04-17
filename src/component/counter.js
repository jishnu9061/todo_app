import { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };
  OnIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  OnDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Counter Component</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.OnIncrement}>+</button>
        <button onClick={this.OnDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
