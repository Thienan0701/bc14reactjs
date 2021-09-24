import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetails: data[0],
      listCart: [],
    };
  }
  //Nhan Data tu nut Chitiet cua component Sanpham
  handleGetProductInfo = (product) => {
    this.setState({ productDetails: product });
  };

  _findIndex = (maSP) => {
    //Kiem tra product co ton tại trong ListCart chưa, trả về vị trí trong mảng
    return this.state.listCart.findIndex((item) => {
      return item.maSP === maSP;
    });
  };
  handleDeleteCart = (product) => {
    const index = this._findIndex(product.maSP);

    if (index !== -1) {
      let listCart = [...this.state.listCart];
      listCart.splice(index, 1);
      this.setState({ listCart });
    }
  };

  handleUpdateSL = (product, status) => {
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      let listCart = [...this.state.listCart];
      if (status) {
        listCart[index].soLuong += 1;
      } else {
        if (listCart[index].soLuong > 1) {
          listCart[index].soLuong -= 1;
        }
      }
      this.setState({
        listCart,
      });
    }
  };
  handleAddCart = (product) => {
    //thêm product vào giỏ hàng Cart Modal
    let listCart = [...this.state.listCart]; //spread operator

    //Kiem tra product co ton tại trong ListCart chưa
    // const index = listCart.findIndex((item)=>{
    //   return item.maSP === product.maSP;
    // });
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      //Update
      listCart[index].soLuong += 1;
    } else {
      //Add
      //Tao obj moi trc khi add
      const productCard = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      //Add product vao mang listCard
      listCart.push(productCard);
    }
    //Cap nhat lai state list card
    this.setState({
      listCart,
    });
  };
  total = () => {
    // let sum= 0;
    // this.state.listCart.forEach((product)=>{
    //   sum+=product.soLuong;
    // });
    // return sum;
    return this.state.listCart.reduce(
      (sum, product) => (sum += product.soLuong),
      0
    );
  };
  render() {
    const { listProduct, productDetails, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.total()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={listProduct}
          GetProductDetails={this.handleGetProductInfo}
          GetProductAddCart={this.handleAddCart}
        />

        <Modal
          listCart={listCart}
          getProductDelete={this.handleDeleteCart}
          getProductUpdate={this.handleUpdateSL}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={productDetails.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{productDetails.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{productDetails.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{productDetails.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetails.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetails.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetails.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
