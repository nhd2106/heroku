


// const stateDefault = {
//     mangSinhVien : [{maSV:1, hoTen: 'Lucas Moura', sdt:'0909991995', email: 'abc@gmail.com'}],
// }

// export const QuanLySinhVienReducer = (state = stateDefault,action) => {
//     switch (action.type) {
//         case 'THEM_SINH_VIEN': {
//             let mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
//            state.mangSinhVien = mangSVUpdate
//            return {...state}
            
//         }break;
            
       
    
//         default:{
//             return {...state}
//         } 
           
//     }
//     return {...state}
    

// }

const stateDefault = {
    mangSinhVien: [{maSV: 1, tenSV:'tran van nam',sdt:'03030606060', email:'email@email.com'  }]
}

export const QuanLySinhVienReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN':{
            console.log(action);
            const {sinhVien} = action
            const mangSinhVienUpdate = [...state.mangSinhVien, sinhVien];
           state.mangSinhVien = mangSinhVienUpdate
          
            return {...state}
        };break;
            
           
    
        default:
            return {...state}
    }
   
} 