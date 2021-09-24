import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlingEvent() {
    console.log("123");
  }
  handlingEventParams(name, age) {
    console.log(name, age);
  }
  render() {
    return (
      <div>
        <h3>Handling Events</h3>
        <button className="btn btn-success" onClick={this.handlingEvent}>
          Click
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingEventParams("An", 18);
          }}
        >
          HandlingEvent Params
        </button>

        <button
          className="btn btn-info"
          onClick={() => {
            console.log("handle");
          }}
        >
          Handler
        </button>
      </div>
    );
  }
}
