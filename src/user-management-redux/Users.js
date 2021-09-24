import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderUserList = () => {
    let { userList, keyword } = this.props;
    //duyet mang userList = filter
    //Dk keyword trung vs user.fullname (chuyen text ve dang viet thuong)
    userList = userList.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return userList?.map((users) => {
      return <UserItem key={users.id} user={users} />;
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    /**
     * key : value
     * key - dai dien cho ten props
     * value- ;ay gia tri tu root reducer
     */
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(Users);
