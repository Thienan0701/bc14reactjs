import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import Data from "./data.json";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: Data,
      keyword: "",
      userEdit: null,
    };
  }
  _findIndex = (id) => {
    // Ham này trả về vị trí của phần tử trong mảng là 1 con số khác -1
    return this.state.userList.findIndex((user) => {
      return user.id === id;
    });
  };
  handleDeleteUser = (user) => {
    const index = this._findIndex(user.id);
    if (index !== -1) {
      let userList = [...this.state.userList];
      userList.splice(index, 1);
      this.setState({ userList });
    }
  };
  //Lay key word tu serch input
  handleGetKeySearch = (keyword) => {
    // console.log(keyword);
    this.setState({
      keyword,
    });
  };
  handleOnSubmit = (user) => {
    let userList = [...this.state.userList];
    if (user.id) {
      //update
      const index = this._findIndex(user.id);
      if (index !== -1) {
        userList[index] = { ...user };
      }
    } else {
      const userNew = { ...user, id: new Date().getTime() };
      userList = [...this.state.userList, userNew];
    }

    this.setState({
      userList,
    });
  };
  handleGetUserEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };
  render() {
    const { keyword, userEdit } = this.state;
    //duyet mang this.state.userList = filter
    //Dk keyword trung vs user.fullname (chuyen text ve dang viet thuong)
    const userList = this.state.userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeySearch={this.handleGetKeySearch} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({ userEdit: null });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          getUserDelete={this.handleDeleteUser}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal getUserAdd={this.handleOnSubmit} userEdit={userEdit} />
      </div>
    );
  }
}

export default Home;
