// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// class ModalGioHangRedux extends Component {

//     renderGioHang = () => {
//         return this.props.gioHang.map((spGH, index) => {
//             return <tr key={index}>
//                 <td>{spGH.maSP}</td>
//                 <td>{spGH.tenSP}</td>
//                 <td><img src={spGH.hinhAnh} width={75} height={50} /></td>
//                 <td>{spGH.giaBan}</td>
//                 <td><button onClick = {()=> this.props.tangGiamSL(index,false)} type="button" className="btn btn-danger" >-</button>
// {spGH.soLuong}
// <button onClick = {() => this.props.tangGiamSL(index,true)} type="button" className="btn btn-primary" >+</button></td>
//                 <td>{spGH.soLuong * spGH.giaBan}</td>
//                 <td><button onClick = { () => {this.props.xoaGioHangIndex(index)}} className='btn btn-danger'>xóa giỏ hàng
// </button>
// </td>
//             </tr>
//         })
//     }
//     render() {
//         //this.props.gioHang là thuộc tính nhận từ redux
//         console.log(this.props.gioHang);

//         return (
//             <div className='container'>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>mã SP</th>
//                             <th>tên SP</th>
//                             <th>Hình ảnh SP</th>
//                             <th>Giá bán</th>
//                             <th>Số lượng</th>
//                             <th>Thành tiền</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.renderGioHang()}
//                     </tbody>
//                     <tfoot>
//                         <td colSpan = '5'></td>
//         <td>Tổng tiền: {this.props.gioHang.reduce((tongTien,spGioHang,index ) => {
//             return tongTien += spGioHang.soLuong*spGioHang.giaBan
//         },0)}</td>
//                     </tfoot>
//                 </table>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => { // state là store tổng, => truy xuất đến GioHangReducer 
//     //=> biến state trên GioHangReducer
//     return {
//         gioHang: state.GioHangReducer.gioHang // => tạo ra 1 props của component ModalGioHangReducer
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         xoaGioHangIndex: (index) => {
//             const action = {
//                 type: 'XOA_GIO_HANG',
//                 index,
//             }
//             dispatch(action);
//         },
//         tangGiamSL: (index, tangGiam) => {
//             const action = {
//                 type: 'TANG_GIAM_SL',
//                 tangGiam,
//                 index
//             }
//             dispatch(action)
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)
import React, { Component } from 'react'
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  
    renderGioHang = () =>{
        // this.props.gioHang là thuộc tính nhận từ redux
        return this.props.gioHang.map((spGH, index) =>{
            return <tr key = {index}>
        <td>{spGH.maSP}</td>
        <td>{spGH.tenSP}</td>
        <td><img src ={spGH.hinhAnh} width={80} height = {80}/></td>
        <td>{spGH.giaBan}</td>
        <td>
            <button onClick = {()=> {this.props.tangGiamSL(index,-1)}}>-</button>
            {spGH.soLuong}
            <button onClick = {()=> {this.props.tangGiamSL(index,1)}}>+</button>
        </td>
        <td>{spGH.soLuong *spGH.giaBan}</td>
        <td><button onClick={()=> this.props.xoaGioHangIndex(index)} className='btn btn-danger'>xóa</button></td>
            </tr>
        })
    }
    render() {
        
        console.log(this.props.gioHang);
        
        return (
            <div className = 'container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps =(state) =>{ // state là store tổng, => truy suất đến gioHangReducer, => biến state trên GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang // tạo ra 1 props gioHang của component modalGioHangRedux
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index
            }
            dispatch(action);
        },
        tangGiamSL: (index,tangGiam) => {
            const action = {
                type: 'TANG_GIAM',
                index,
                tangGiam,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalGioHangRedux)
