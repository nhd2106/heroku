// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class TableSinhVien extends Component {
//     renderSinhVien = () => {
//         const { mangSinhVien } = this.props;
//         return mangSinhVien.map((sinhVien, index) => {
//             return (
//                 <tr>
//                     <td>{sinhVien.maSV}</td>
//                     <td>{sinhVien.hoTen}</td>
//                     <td>{sinhVien.sdt}</td>
//                     <td>{sinhVien.email}</td>
//                 </tr>
//             )
//         })
//     }
//     render() {
//         console.log(this.props.mangSinhVien);

//         return (
//             <div className='container'>
//                 <table className="table">
//                     <thead>
//                         <tr className='bg-dark text-white'>
//                             <th>Mã Sinh Viên</th>
//                             <th>Họ Tên</th>
//                             <th>Số Điện Thoại </th>
//                             <th>Email </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.renderSinhVien()}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
//     }
// }

// export default connect(mapStateToProps, null)(TableSinhVien)
import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhVien, index) => {
      console.log(sinhVien);

      return (
        <tr>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.tenSV}</td>
          <td>{sinhVien.sdt}</td>
          <td>{sinhVien.email}</td>
          <td><button className='btn btn-danger'>Xóa</button></td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container ">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã Sinh Viên</th>
              <th>Tên sinh viên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.renderSinhVien()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
  };
};

export default connect(mapStateToProps, null)(TableSinhVien);
