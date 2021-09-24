import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

class Baitap1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="contents">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </>
    );
  }
}
export default Baitap1;
