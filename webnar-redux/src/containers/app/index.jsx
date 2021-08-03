import React, { Component } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import List from "../../components/list/List";

class App extends Component {
  state = {
    input: "",
  };

  handleOnClick = () => {
    const { addTodo } = this.props;
    const { input } = this.state;
    addTodo(input);
  };

  handleOnChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <List/>
        <Input onChange={(event) => this.handleOnChange(event)} value={input} />
        <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
      </div>
    );
  }
}

export default App;
