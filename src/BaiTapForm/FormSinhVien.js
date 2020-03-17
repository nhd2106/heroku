// import React, { Component } from 'react'
// import { connect } from "react-redux";
// class FormSinhVien extends Component {
//     state = {
//         values: {
//             maSV: '',
//             hoTen: '',
//             email: '',
//             sdt: ''
//         },
//         errors: {
//             maSV: '',
//             hoTen: '',
//             email: '',
//             sdt: ''
//         }
//     }
//     handleChange = (e) => {
//         let tagInput = e.target;
//         let { name, value, type } = tagInput;
//         let errorMessage = '';

//         if(value.trim()==='') {// bất kể control nào người dùng nhập vào đều kiểm tra rỗng
//             errorMessage = name + ' Không được bỏ trống'
//         }
//         //kiểm tra email
//         if(type === 'email'){
//             const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             if(!regex.test(value)){
//                 errorMessage = name + ' không đúng định dạng    '
//             }
//         }

//         let values = {...this.state.values,[name]:value};
//         let errors = {...this.state.errors, [name]:errorMessage};

//         this.setState({
//             values: values,
//             errors: errors
//         })

//         // this.setState({
//         //     [name]: value
//         // }, () => {
//         //     console.log(this.state);

//         // })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault(); // cản sự kiện load lại trang
//         this.props.themSinhVien(this.state)
//     }
//     render() {
//         return (
//             <div className='container'>
//                 <h3 className='bg-dark text-white text-center'>Thông tin sinh viên</h3>
//                 <form onSubmit={this.handleSubmit} >
//                     <div className='row'>
//                         <div className='col-6'>
//                             <div className="form-group">
//                                 <label >Mã SV</label>
//                                 <input type="text" className="form-control" name='maSV' value={this.state.values.maSV} onChange={this.handleChange} placeholder />
//                                 <p className='text-danger'>
//                                     {this.state.errors.maSV}
//                                 </p>
//                             </div>
//                             <div className="form-group">
//                                 <label >Số điện thoại</label>
//                                 <input type="text" className="form-control" name='sdt' value={this.state.values.sdt} onChange={this.handleChange} placeholder />
//                                 <p className='text-danger'>
//                                     {this.state.errors.sdt}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className='col-6'>
//                             <div className="form-group">
//                                 <label >Họ tên</label>
//                                 <input type="text" className="form-control" name='hoTen' value={this.state.values.hoTen} onChange={this.handleChange} placeholder />
//                                 <p className='text-danger'>
//                                     {this.state.errors.hoTen}
//                                 </p>
//                             </div>
//                             <div className="form-group">
//                                 <label >Email</label>
//                                 <input type="email" className="form-control" name='email' value={this.state.values.email} onChange={this.handleChange} placeholder />
//                                 <p className='text-danger'>
//                                     {this.state.errors.email}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='text-right'><button type='submit' className='btn btn-success'>Submit</button></div>
//                 </form>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         themSinhVien: (sinhVien) => {
//             const action = {
//                 type: 'THEM_SINH_VIEN',
//                 sinhVien
//             }
//             dispatch(action)
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(FormSinhVien)
import React, { Component } from "react";
import { connect } from "react-redux";
class FormSinhVien extends Component {
    
    state = {
        values:{
            maSV:'',
            tenSV:'',
            sdt:'',
            email:''
        },
        errors: {
            maSV:'',
            tenSV:'',
            sdt:'',
            email:''
        },
        valid: false
      
    }

    handleOnchange = (e) =>{
        // lấy giá trị mỗi lận value input thay đổi bởi người dùng
      
        let tagInput = e.target;
        let {name, value, type} = tagInput;
        let  errorMessage = '';

        //Kiểm tra rổng
        if(value.trim() === ''){ // kiểm tra bất kỳ input nào người dùng nhập vào điều kiểm tra
            errorMessage = name + ' không được bỏ trống'
        }
        // kiểm tra email
        if( type === 'email'){
          const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          if(!regex.test(value)){
            errorMessage = name + ' không đúng định dạng'
          }
        }

        let values = {...this.state.values, [name]:value}; // cập giá trị value cho state
        let errors = {...this.state.errors, [name]: errorMessage}; // cập nhật lỗi cho state  

        this.setState({
          ...this.state,
          values: values,
          errors : errors,
          
        },()=>{console.log(this.state);
          this.checkValidButton();
        })

        // this.setState({
        //     [name]: value
        // }, ()=>{console.log(this.state);
        // })
      }
        
    handleSubmit = (e) => { 
        e.preventDefault(); // cản sự kiện load lại trang của browser
        this.props.themSinhVien(this.state.values)
    }
    checkValidButton = () => {
      let valid = true;
      for(let key in this.state.errors){
        if(this.state.errors[key] !=='' || this.state.values[key] === ''){
          valid = false;
        }
      }
    
      this.setState({
        ...this.state,
        valid: valid
      })
      
    }
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-center text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit = {this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <label>Mã sinh viên</label>
                  <input className="form-control" name="maSV" value={this.state.values.maSV} onChange ={this.handleOnchange}></input>
                    <p className='text-danger'>
                        {this.state.errors.maSV}
                    </p>
                </div>
                <div className="form-group col-6">
                  <label>Tên sinh viên</label>
                  <input className="form-control" name="tenSV" value={this.state.values.tenSV} onChange ={this.handleOnchange}></input>
                  <p className='text-danger'>
                        {this.state.errors.tenSV}
                    </p>
                
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <label>Số điện thoại</label>
                  <input className="form-control" name="sdt" value={this.state.values.sdt} onChange ={this.handleOnchange}></input>
                  <p className='text-danger'>
                        {this.state.errors.sdt}
                    </p>
                </div>
                <div className="form-group col-6">
                  <label>Email</label>
                  <input className="form-control" type ='email' name="email" value={this.state.values.email} onChange ={this.handleOnchange}></input>
                  <p className='text-danger'>
                        {this.state.errors.email}
                    </p>
                </div>
              </div>
              <div className='row'>
                    <div className='col-12 text-right'>
                     {this.state.valid ? <button className='btn btn-success' type ='submit' >Thêm sinh viên</button>:<button className='btn btn-success' type ='submit' disabled >Thêm sinh viên</button> }
                    
                    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(FormSinhVien);
