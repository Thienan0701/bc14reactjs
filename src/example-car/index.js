import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "./img/imgRedCar.jpg" };
  }

  handleColor = (color) => {
    this.setState({ img: color });
  };
  render() {
    const { img } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={img} />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.handleColor("./img/imgRedCar.jpg");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-light"
              onClick={() => {
                this.handleColor("./img/imgSilverCar.jpg");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.handleColor("./img/imgBlackCar.jpg");
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}
