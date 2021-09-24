import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyword } from "../redux/actions";
class Search extends Component {
  handleOnChange = (event) => {
    // console.log(event.target.value);
    this.props.getKeyword(event.target.value);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnChange}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actGetKeyword(keyword));
    },
  };
};
export default connect(null, mapDispatchToProps)(Search);
