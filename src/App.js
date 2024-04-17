import { Component } from "react";
import "./App.css";
import Todo from "./component/todo";
import Counter from "./component/counter";
import Form from "./component/form";

class App extends Component {
  state = {
    myString: "Hello",
    myStringOne: "Debug",
  };

  handleChange = () => {
    this.setState({
      myStringOne:"Media"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.myStringOne}</h1>
        <h1>{this.state.myString}</h1>
        <button onClick={this.handleChange}>Change Text</button>
        <h1>
          <Todo myStringOne={this.state.myStringOne} />
          <Counter />
          <Form />
        </h1>
      </div>
    );
  }
}

export default App;
