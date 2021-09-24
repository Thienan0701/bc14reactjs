import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //lưu giá trị người dùng nhập vào
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      //lưu thông báo lỗi
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      manvValid: false,
      tennvValid: false,
      emailValid: false,
      formValid: false, //form chua hop le
    };
  }

  handleOnChangeValue = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      }
      //   () => {
      //     console.log(this.state);
      //   }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleErors = (e) => {
    const { name, value } = e.target;

    let mess = value.trim() === "" ? name + " không được rỗng" : "";
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        if (value && value.length <= 2) {
          mess = "độ dài ký tự phải từ 3 trở lên";
          manvValid = false;
        }
        break;
      case "tennv":
        tennvValid = mess === "" ? true : false;
        break;
      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
          mess = " Email chưa đúng định dạng";
          emailValid = false;
        }
        break;

      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        // console.log(this.state);
        this.handleFormValid();
      }
    );
  };
  handleFormValid = () => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };
  render() {
    const { errors, formValid } = this.state;
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChangeValue}
              onBlur={this.handleErors}
              value={this.state.manv}
            />
            {errors.manv ? (
              <div className="alert alert-danger">{errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChangeValue}
              onBlur={this.handleErors}
              value={this.state.tennv}
            />
            {errors.tennv ? (
              <div className="alert alert-danger">{errors.tennv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnChangeValue}
              onBlur={this.handleErors}
              value={this.state.email}
            />
            {errors.email ? (
              <div className="alert alert-danger">{errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
