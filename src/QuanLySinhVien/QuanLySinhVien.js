import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import DanhSachSinhVien from "./DanhSachSinhVien";

export default class QuanLySinhVien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      danhSachSinhVien: [],
      sinhVienSua: {}
    };
  }

  handleSubmit = sinhVien => {
    const danhSachSinhVien = [...this.state.danhSachSinhVien];
    const index = danhSachSinhVien.findIndex(sv => sv.maSV === sinhVien.maSV);
    if (index !== -1) {
      // Cách 1
      danhSachSinhVien[index].hoTenSV = sinhVien.hoTenSV;
      danhSachSinhVien[index].tuoiSV = sinhVien.tuoiSV;
      danhSachSinhVien[index].email = sinhVien.email;
      // Cách 2
      // danhSachSinhVien[index] = { ...sinhVien };
    } else {
      danhSachSinhVien.push(sinhVien);
    }
    this.setState({ danhSachSinhVien }, () => {
      localStorage.setItem("dssv", JSON.stringify(this.state.danhSachSinhVien));
    });
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("dssv"));
    if (data) {
      this.setState({ danhSachSinhVien: data });
    }
  }

  handleDelete = maSV => {
    const danhSachMoi = this.state.danhSachSinhVien.filter(
      sv => sv.maSV !== maSV
    );

    this.setState({
      danhSachSinhVien: danhSachMoi
    });
  };

  handleEdit = sinhVien => {
    this.handleToggle();
    this.setState({ sinhVienSua: sinhVien });
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Quản Lý Sinh Viên</h1>
        <button
          className="btn btn-success mb-5"
          onClick={() => {
            this.setState({ sinhVienSua: {}, isOpen: true });
          }}
        >
          Thêm Sinh Viên
        </button>
        <DanhSachSinhVien
          mangSV={this.state.danhSachSinhVien}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
        <FormSinhVien
          isOpen={this.state.isOpen}
          onToggle={this.handleToggle}
          sinhVien={this.state.sinhVienSua}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
