import React, { Component } from "react";
import Form from "./components/Form";
import { calculateBmi } from "./helpers/bmiHelper";
import Message from "./components/Message";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    systemSelection:"metric"
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.systemSelection
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div>
        <Form
          systemSelection={this.state.systemSelection} 
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
