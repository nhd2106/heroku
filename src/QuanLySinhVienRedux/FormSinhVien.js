import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {
  themSinhVienAction,
  toggleModalAction,
  suaSinhVienAction
} from "../redux/actions/QuanLySinhVien";

class FormSinhVien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maSV: "",
      hoTenSV: "",
      tuoiSV: "",
      email: ""
    };

    this.refMaSV = React.createRef();
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const sinhVien = { ...this.state };
    // this.props.mangSV, this.props.themSinhVien
    const index = this.props.mangSV.findIndex(sv => sv.maSV === sinhVien.maSV);
    if (index === -1) {
      this.props.themSinhVien(sinhVien);
    } else {
      this.props.suaSinhVien(sinhVien);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.sinhVienDangChon !== this.props.sinhVienDangChon) {
      const { maSV, hoTenSV, tuoiSV, email } = this.props.sinhVienDangChon;
      this.setState({
        maSV: maSV || "",
        hoTenSV: hoTenSV || "",
        tuoiSV: tuoiSV || "",
        email: email || ""
      });
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.props.onToggle(false)}
      >
        <ModalHeader toggle={() => this.props.onToggle(false)}>
          Form Sinh Viên
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Mã Sinh Viên</label>
              <input
                ref={this.refMaSV}
                type="text"
                className="form-control"
                name="maSV"
                value={this.state.maSV}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Họ Tên Sinh Viên</label>
              <input
                type="text"
                className="form-control"
                name="hoTenSV"
                value={this.state.hoTenSV}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Tuổi Sinh Viên</label>
              <input
                type="text"
                className="form-control"
                name="tuoiSV"
                value={this.state.tuoiSV}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={this.handleSubmit} className="btn btn-success">
            Lưu
          </button>
          <button onClick={this.props.onToggle} className="btn btn-danger">
            Huỷ
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  mangSV: state.quanLySinhVien.danhSachSinhVien,
  isOpen: state.quanLySinhVien.isOpen,
  sinhVienDangChon: state.quanLySinhVien.sinhVienDangChon
});

const mapDispatchToProps = dispatch => ({
  themSinhVien: sinhVien => dispatch(themSinhVienAction(sinhVien)),
  onToggle: status => dispatch(toggleModalAction(status)),
  suaSinhVien: sinhVien => dispatch(suaSinhVienAction(sinhVien))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien);
