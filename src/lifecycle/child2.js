import React, { Component } from "react";

export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      username: "thien an ngo",
      numberChild: 5,
    };
  }
  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidMount() {
    //fetch data api
    this.interval = setInterval(() => {
      console.log("hello everybody");
    }, 1000);
  }
  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps && nextProps.number === currentState.numberChild) {
      return {
        username: "Ngo Tran Thien An",
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h4>Child 2</h4>
        <p>
          Props num: {this.props.number} - State num: {this.state.numberChild}
        </p>
        <p>{this.state.username}</p>
      </div>
    );
  }
}
