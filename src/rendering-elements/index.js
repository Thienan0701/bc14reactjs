import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Thien An";
  age = 18;
  Lop = "BC14";

  renderInfo() {
    return (
      <>
        <p>
          Hello world and {this.username}/ Age: {this.age}
        </p>
        <p>Class: {this.Lop}</p>
      </>
    );
  }

  render() {
    return (
      <div>
        <h3>Rendering Elements</h3>
        {this.renderInfo()}
      </div>
    );
  }
}
