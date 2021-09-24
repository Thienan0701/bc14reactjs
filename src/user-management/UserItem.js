import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { user, GetUserDelete, GetUserEdit } = this.props;
    return (
      <tr key={user.id}>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              GetUserEdit(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              GetUserDelete(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
