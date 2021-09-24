import React from "react";
import Header from "./header";
import Footer from "./footer";
import Carousel from "./carousel";
import WWD from "./wwd";
import Contact from "./contact";
import ListCard from "./list-card";
function Baitap2() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <WWD />
          <Contact />
        </div>
        <ListCard />
      </div>

      <Footer />
    </>
  );
}
export default Baitap2;
