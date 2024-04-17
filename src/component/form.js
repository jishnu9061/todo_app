import React,{ Component } from "react";

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: ""
        };

        this.inputOne = React.createRef();
        this.inputTwo = React.createRef();
    }

//   onHandleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputOne.value,this.inputTwo.value);
  };
  render() {
    return (
      <div className="App">
        <h1>Form Component</h1>
        <input
          type="text"
          ref= {input => this.inputOne = input}
          name="firstName"
        //   value={this.state.firstName}
        //   onChange={this.onHandleChange}
        />
        <input
          type="text"
          name="lastName"
          ref= {input => this.inputTwo = input}
        //   value={this.state.lastName}
        //   onChange={this.onHandleChange}
        />
        <button type="button" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
