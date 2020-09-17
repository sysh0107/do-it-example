import React, { Component } from "react";
import Counter from "./03/Counter2";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return (
      <div>
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default CounterApp;
