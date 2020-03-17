// import React, { Component } from 'react'
// import SanPhamRedux from './SanPhamRedux'
// import data from '../data/phoneData.json'
// class DanhSachSanPhamRedux extends Component {
    
//     //Viết phương thức render sản phẩm
//     renderSanPham = () => {
//         return data.map((sanPham,index) => {
//             return <div className ='col-4' key = {index}>
//                 <SanPhamRedux sanPham = {sanPham}/>
//             </div>
//         })
//     }

//     render() {
//         return (
//             <div className = 'container'>
//                 <h3 className = 'text-danger text-center'>Danh sách sản  phẩm</h3>
//                 <div className = 'row'>
//                 {this.renderSanPham()}
//                 </div>
//             </div>
//         )
//     }
// }

// export default DanhSachSanPhamRedux
import React, { Component } from 'react'
import phoneData from '../data/phoneData.json';
import SanPhamRedux from './SanPhamRedux.js';
class DanhSachSanPhamRedux extends Component {
   
  // viết phương thức render sản phầm
  renderSanPham = () => {
    return phoneData.map((sanPham,index)=>{
        return <div className = 'col-4' key ={index}>
            <SanPhamRedux sanPham = {sanPham}/>
        </div>
    })
  }
    render() {
        return (
            <div className = 'container'>
                <h3 className='text-center text-danger'>Danh sách sản phẩm</h3>
                <div className='row'>
                {this.renderSanPham()}
                </div>
            </div>
        )
    }
}

export default DanhSachSanPhamRedux
