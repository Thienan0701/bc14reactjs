import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [
        { ten: "An", tuoi: 24 },
        { ten: "Bao", tuoi: 20 },
        { ten: "Chi", tuoi: 23 },
      ],
    };
  }
  renderUsers = () => {
    const { listUsers } = this.state;
    return listUsers.map((user, index) => {
      return (
        <li key={index}>
          ten: {user.ten}, tuoi:{user.tuoi}
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <h3>List keys</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}
