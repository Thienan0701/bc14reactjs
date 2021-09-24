import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmitUser } from "../redux/actions";
class Modal extends Component {
  constructor(props) {
    //constrructor chi chay 1 lan duy nhat
    super(props);
    this.state = {
      id: "",
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
    this.close = React.createRef();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    //Lifecycle nay se chay khi nhan dc props moi tu index truyen vao=
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        fullname: nextProps.userEdit.fullname,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        id: "",
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  handleOnChangeValue = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value, //multi update
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.GetUserSubmit(this.state);
    this.setState({
      id: "",
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    });
    this.close.current.click();
  };

  render() {
    const { userEdit } = this.props;
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={this.handleSubmit}
                // onReset={this.handleFormReset}
              >
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChangeValue}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="fullname"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChangeValue}
                    value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChangeValue}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChangeValue}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    name="type"
                    className="form-control"
                    onChange={this.handleOnChangeValue}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     GetUserSubmit: (user) => {
//       const action = {
//         type: "ON_SUBMIT_USER",
//         payload: user,
//       };
//       //Gui action vao store
//       dispatch(action);
//     },
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    GetUserSubmit: function (user) {
      //Gui action vao store
      dispatch(actSubmitUser(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
