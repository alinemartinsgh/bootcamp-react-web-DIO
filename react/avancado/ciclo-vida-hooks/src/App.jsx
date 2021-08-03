import React, { Component } from "react";
import Twitter from "./Twitter";

class App extends Component {
  state = {
    loading: false,
    activated: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  onRemove = () => {
    this.setState({
      activated: false,
    });
  };

  render() {
    const posts = [
      {
        title: "qlqr coisa",
        description: "outra coisa",
      },
      {
        title: "qlqr outra coisa",
        description: "outra outra coisa",
      },
    ];

    return (
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {this.state.activated && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    );
  }
}

export default App;
