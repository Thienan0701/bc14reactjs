import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { listProduct } = this.props;
    return listProduct.map((products) => {
      return (
        <SanPham
          key={products.maSP}
          product={products}
          getProductDetails={this.props.GetProductDetails}
          getProductAddCart={this.props.GetProductAddCart}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
