// import React, { Component } from 'react'
// import ModalGioHangRedux from './ModalGioHangRedux'
// import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

// class BTGioHangRedux extends Component {

    

//     render() {
//         return (
//             <div className = 'container'> 
//             <h3 className= 'text-danger text-center'>Bài tập giỏ hàng redux</h3>
//                 <ModalGioHangRedux/>
//                 <DanhSachSanPhamRedux/>
//             </div>
//         )
//     }
// }

// export default BTGioHangRedux
import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

class BTGioHangRedux extends Component {
    

    render() {
        return (
            <div className='container'>
                <h3 className='text-danger text-center'>Bài tập giỏ hàng redux</h3>
                <ModalGioHangRedux/>
                <DanhSachSanPhamRedux/>
            </div>
        )
    }
}

export default BTGioHangRedux
