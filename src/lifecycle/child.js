import React, { Component, PureComponent } from "react";

export default class Child extends PureComponent {
  render() {
    console.log("child");
    return (
      <div>
        <h3>Child</h3>
      </div>
    );
  }
}
