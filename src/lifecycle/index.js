import React, { Component } from "react";
import Child from "./child";
import Child2 from "./child2";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 0,
      status: true,
    };
    // chay dung 1 lan trong 1 thuc thi
  }
  // chay dung 1 lan trong 1 thuc thi
  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
  }
  // chay dung 1 lan trong 1 thuc thi
  componentDidMount() {
    //fetch data api
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    if (nextState && nextState.number === 2) {
      return false;
    }
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>Lifecycle</h3>
        <h3>Number : {this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Increament
        </button>
        <Child />
        <hr />
        {this.state.status && <Child2 number={this.state.number} />}
        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({
              status: false,
            });
          }}
        >
          Change status
        </button>
      </div>
    );
  }
}
