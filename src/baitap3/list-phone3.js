import React from "react";
import Phone3 from "./phone3";
function ListPhone3() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <Phone3 />
        <Phone3 />
        <Phone3 />
      </div>
    </section>
  );
}
export default ListPhone3;
