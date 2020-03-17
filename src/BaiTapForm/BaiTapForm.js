// import React, { Component } from 'react'
// import FormSinhVien from './FormSinhVien'
// import TableSinhVien from './TableSinhVien'

// class BaiTapForm extends Component {
  

//     render() {
//         return (
//             <div className = 'container'>
//                 <h3 className = 'text-center'>Bài Tập Form Sinh Viên</h3>
//                 <FormSinhVien/>
//                 <TableSinhVien/>
//             </div>
//         )
//     }
// }

// export default BaiTapForm
import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

class BaiTapForm extends Component {
  
    render() {
        return (
            <div className ='container'>
                <h3 className='text-center text-danger'>Bài tập sinh viên</h3>
                <FormSinhVien/>
                <TableSinhVien />
            </div>
        )
    }
}

export default BaiTapForm
