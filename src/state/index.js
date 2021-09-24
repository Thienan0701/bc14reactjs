import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "AN", isLogin: false };
  }
  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };
  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  renderHTML() {
    //1 == 1 ? "dung" : "sai"
    return this.state.isLogin ? (
      //da Login
      <div>
        <h1>Hello {this.state.username}</h1>
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
  //Khi State thay doi render se chay lai
  render() {
    return (
      <div>
        <h3>HandlingEvents Example</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
