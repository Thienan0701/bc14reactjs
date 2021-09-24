import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";
import { actUserEdit } from "../redux/actions";
class HomeRedux extends Component {
  render() {
    const { resetModalValue } = this.props;

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />

          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              resetModalValue();
            }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetModalValue: () => {
      dispatch(actUserEdit(null));
    },
  };
};
export default connect(null, mapDispatchToProps)(HomeRedux);
