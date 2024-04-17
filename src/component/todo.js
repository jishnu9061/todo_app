import { Component } from "react";

class Todo extends Component {
    componentWillUnmount(){
        alert('hi');
        console.log('Running');
    }
  state = {
    data: [
      {
        id: 1,
        name: "jishnu",
        age: 45,
      },
      {
        id: 2,
        name: "Rahul",
        age: 10,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Todo Component</h1>
        <ul>
          {this.state.data.map((value, index) => {
            return <li key={index}>{value.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
