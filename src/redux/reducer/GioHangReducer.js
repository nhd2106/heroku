// // khởi tạo giá trị ban đầu
// const stateGioHang = {
//     gioHang : [{maSP: 1, tenSP: "iphone", soLuong: 1, hinhAnh: './img/applephone.jpg', giaBan: 1000,thanhTien: 1000}]
// }

// export const GioHangReducer = (state = stateGioHang, action) => {
//     switch (action.type) {
//         case 'THEM_GIO_HANG':{
//          // xử lý logic thêm giỏ hàng
//          let gioHangCapNhat = [...state.gioHang];
//          let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
//          if(index!==-1){
//              gioHangCapNhat[index].soLuong +=1;
//          }else {
//              gioHangCapNhat.push(action.spGioHang);
//          }
//          state.gioHang = gioHangCapNhat;
//          return {...state};
//         }
//         case 'XOA_GIO_HANG': {
//             let gioHangCapNhat = [...state.gioHang]
//             //xóa giỏ hàng dựa vào index
//             gioHangCapNhat.splice(action.index, 1);
//             // gán giỏ hàng mới cho state để render lại giao diện
//             state.gioHang = gioHangCapNhat
//             return {...state}
//         }
//         case 'TANG_GIAM_SL': {
//             let gioHangCapNhat = [...state.gioHang]
//             const {index,tangGiam} = action
//             if(tangGiam) {
//                 gioHangCapNhat[index].soLuong += 1;
//             }else {
//                 if(gioHangCapNhat[index].soLuong >1){
//                     gioHangCapNhat[index].soLuong -= 1
//                 }
                
//             }
//             state.gioHang = gioHangCapNhat
//             return{...state}
//         }
            
            
    
       
//     }
//     return {...state}
// }

const stateGioHang = {
    gioHang: [{maSP: 1, hinhAnh:'./img/sp_iphoneX.png', soLuong: 1, tenSP: 'iphone', giaBan:1000, thanhTien: 1000}]
}
export const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        
        case 'THEM_GIO_HANG':{
            // xử lý logic thêm giỏ hàng
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP ===action.sanPhamGioHang.maSP);
            if(index !==-1){
                gioHangCapNhat[index].soLuong += 1;
            }
            else {
                gioHangCapNhat.push(action.sanPhamGioHang)
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        case 'XOA_GIO_HANG': {
            
            let gioHangCapNhat = [...state.gioHang];
            // xóa giỏ hàng dựa vào index
            gioHangCapNhat.splice(action.index,1)
            state.gioHang = gioHangCapNhat;
            return {...state};
        
        };
        case 'TANG_GIAM': {
            const {index,tangGiam} = action;
            let gioHangCapNhat = [...state.gioHang];
            if(tangGiam ===-1 ){
                if( gioHangCapNhat[index].soLuong>1)
                gioHangCapNhat[index].soLuong -=1;
            }else{
                gioHangCapNhat[index].soLuong += 1;
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }

            
            
    
        default:
            break;
    }
    return {...state}
}