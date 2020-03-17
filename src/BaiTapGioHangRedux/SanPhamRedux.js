// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class SanPhamRedux extends Component {

//     render() {
//         const { sanPham } = this.props
//         return (
//             <div className="card text-white bg-primary">
//                 <img className="card-img-top" src={sanPham.hinhAnh} width={150} height={250} alt={sanPham.hinhAnh} />
//                 <div className="card-body">
//                     <h4 className="card-title">{sanPham.tenSP}</h4>
//                     <p className="card-text">{sanPham.giaBan}</p>
//                     <button onClick = {()=> {this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button>
//                 </div>
//             </div>

//         )
//     }
// }

// // Xây dựng hàm tạo ra props là hàm xử lý sự kiện => để đưa dữ liệu lên store
// const mapDispatchToProps = (dispatch) => {
//   return {
//       themGioHang: (sanPham) => {
//           const spGioHang = {
//               maSP: sanPham.maSP,
//               tenSP: sanPham.tenSP,
//               giaBan: sanPham.giaBan,
//               soLuong: 1,
//               hinhAnh: sanPham.hinhAnh
//           }
//           const action = {
//               type: 'THEM_GIO_HANG',
//               spGioHang:spGioHang
//           }
//           dispatch(action);
//       }

//   }
// }
// export default connect(null, mapDispatchToProps)(SanPhamRedux)
import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
  
    return (
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          width={120}
          height={300}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          
        </div>
        <button onClick = {()=> this.props.themGioHang(sanPham)} className='btn btn-success'>Thêm vào giỏ hàng</button>
        
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return{
        // tạo ra props component
        themGioHang: (sanPham) => {
            let sanPhamGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                giaBan: sanPham.giaBan,
                soLuong: sanPham.soLuong,
                hinhAnh: sanPham.hinhAnh
            }
            // tạo sản action  đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG', // bắt buộc đặt type
                sanPhamGioHang: sanPhamGioHang // nội dung gửi lên reducer

            }
            // dùng hảm dispatch để đưa dữ liệu lên reducer
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPhamRedux) ;