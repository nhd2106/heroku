import React, { Component } from "react";

export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "IPhone X", gia: 1000 },
        { maSP: 2, tenSP: "Samsung Note 10", gia: 800 },
        { maSP: 3, tenSP: "Huawei P30", gia: 700 }
      ]
    };
  }

  renderDanhSachSanPham = () => {
    return this.state.mangSanPham.map((sp, index) => (
      <tr>
        <td>{sp.maSP}</td>
        <td>{sp.tenSP}</td>
        <td>{sp.gia}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {/* Cách 1 sử dụng trực tiếp */}
            {/* {this.state.mangSanPham.map((sp, index) => (
              <tr>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
                <td>{sp.gia}</td>
              </tr>
            ))} */}

            {/* Cách 2 gọi hàm */}
            {this.renderDanhSachSanPham()}
          </tbody>
        </table>
      </div>
    );
  }
}
