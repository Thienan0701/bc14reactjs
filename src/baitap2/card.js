// import React from "react";

// function Card() {
//   return (
//     <div className="col-sm-4">
//       {/* item */}
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           className="card-img-top"
//           src="https://picsum.photos/200/300"
//           alt="Card image cap"
//         />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Card;

import React, { Component } from "react";
import { stockData } from "./data/Data.js";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { listMovies: stockData };
  }
  renderMovieCard = () => {
    const { listMovies } = this.state;
    return listMovies.map((movie, index) => {
      return (
        <div className="col-md-4 ">
          {/* item */}
          <div className="card" style={{ width: "20rem" }} key={index}>
            <img
              className="card-img-top"
              src={movie.hinhAnh}
              alt="Card img cap"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.tenPhim}</h5>
              <p className="card-text align-items-stretch text-truncate">
                {movie.moTa}
              </p>
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
