import React, { Component } from "react";

export default class Example extends Component {
  // constructor(props) {
  //   super(props);
  // }
  username = "AN";
  isLogin = false;
  handleLogin = () => {
    this.isLogin = true;
    console.log(this.isLogin);
  };

  handleLogout() {}
  renderHTML() {
    //1 == 1 ? "dung" : "sai"
    return this.isLogin ? (
      //da Login
      <div>
        <h1>Hello {this.username}</h1>
        <button className="btn btn-danger" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
