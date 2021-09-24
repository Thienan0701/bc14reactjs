import React, { Component } from "react";

export default class Child extends Component {
  handleGetResetInfo = () => {
    //Chuyen thong tin muon reset ra ngoai index la cha
    this.props.getInfoReset("An", 24);
  };
  render() {
    // const nameChild = this.props.usernamechild;
    // const ageChild = this.props.agechild;
    const { username, age } = this.props; //Destructuring
    return (
      <div>
        <h3>Child</h3>
        <p>
          Username: {username} - Age : {age}
        </p>
        <button className="btn btn-danger" onClick={this.handleGetResetInfo}>
          Reset Info
        </button>
      </div>
    );
  }
}
