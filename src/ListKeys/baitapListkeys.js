import React, { Component } from "react";
import { stockData } from "./data/Data";

export default class BaitapListkeys extends Component {
  constructor(props) {
    super(props);
    this.state = { listMovies: stockData };
  }
  renderMovieCard = () => {
    const { listMovies } = this.state;
    return listMovies.map((movie, index) => {
      return (
        <div className="row">
          <div className="col-md-4 ">
            {/* item */}
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                className="card-img-top"
                src={movie.hinhAnh}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text align-items-stretch text-truncate">
                  {movie.moTa}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <h5 style={{ color: "red" }}>Danh sach phim</h5>
        <div className="container-fluid">
          <div className="row">{this.renderMovieCard()}</div>
        </div>
      </>
    );
  }
}
