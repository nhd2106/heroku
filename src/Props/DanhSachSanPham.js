import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiTietSanPham: {}
    };
  }

  xemChiTiet = sp => {
    this.setState({ chiTietSanPham: sp });
    // console.log(this.state.chiTietSanPham);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.mangSanPham.map((sp, index) => (
            <SanPham
              key={sp.maSP}
              sp={sp}
              xemChiTiet={this.xemChiTiet}
              laySanPham={this.props.laySanPham}
            />
          ))}
        </div>
        {Object.keys(this.state.chiTietSanPham).length > 0 ? (
          <div className="row">
            <div className="col-md-4">
              <img
                src={this.state.chiTietSanPham.hinhAnh}
                alt=""
                width="100%"
              />
            </div>
            <div className="col-md-8">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.chiTietSanPham.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.chiTietSanPham.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.chiTietSanPham.cameraTruoc}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
