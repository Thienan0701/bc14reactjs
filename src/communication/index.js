import React, { Component } from "react";
import Child from "./child";
import ChildFunction from "./childFunction";
import Childrens from "./childrens.js";

export default class Communication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "An",
      age: 18,
    };
  }

  handleChangeInfo = () => {
    this.setState({
      username: "Nguyen",
      age: 30,
    });
  };

  handeleResetInfo = (username, age) => {
    //console.log(username, age);
    this.setState({
      username,
      age,
    });
  };

  render() {
    return (
      <div>
        <h3>Communication</h3>
        <p>
          Username: {this.state.username} - Age : {this.state.age}
        </p>
        <button className="btn btn-success" onClick={this.handleChangeInfo}>
          Change Info
        </button>

        <hr width="50%" />
        <Child
          username={this.state.username}
          age={this.state.age}
          getInfoReset={this.handeleResetInfo}
        />

        <hr width="50%" />
        <ChildFunction username={this.state.username} age={this.state.age} />

        <hr width="50%" />
        <Childrens>
          <p>
            Username: {this.state.username} - Age : {this.state.age}
          </p>
        </Childrens>
      </div>
    );
  }
}
