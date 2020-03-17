import {
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
  CHON_SINH_VIEN,
  TOGGLE_MODAL,
  SUA_SINH_VIEN
} from "../constants/QuanLySinhVien";

const initialState = {
  danhSachSinhVien: [
    { maSV: 1, hoTenSV: "Nam", tuoiSV: 23, email: "nam@gmail.com" }
  ],
  sinhVienDangChon: {},
  isOpen: false
};

const quanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return { ...state, isOpen: action.data };
    }
    case THEM_SINH_VIEN: {
      // Sử lý state thay đổi
      const danhSachSinhVien = [...state.danhSachSinhVien];
      danhSachSinhVien.push(action.data);
      return { ...state, danhSachSinhVien, isOpen: false };
      //   return {
      //     ...state,
      //     danhSachSinhVien: [...state.danhSachSinhVien, action.data]
      //   };
    }
    case XOA_SINH_VIEN: {
      // Xử lý xoá sinh viên
      const danhSachSauKhiXoa = state.danhSachSinhVien.filter(
        sv => sv.maSV !== action.data
      );
      return { ...state, danhSachSinhVien: danhSachSauKhiXoa };
    }
    case CHON_SINH_VIEN: {
      return { ...state, sinhVienDangChon: action.data };
    }
    case SUA_SINH_VIEN: {
      const index = state.danhSachSinhVien.findIndex(
        sv => sv.maSV === action.data.maSV
      );
      const danhSachSinhVien = [...state.danhSachSinhVien];
      danhSachSinhVien[index] = action.data;
      return { ...state, danhSachSinhVien, isOpen: false };
    }
    default:
      return state;
  }
};

export default quanLySinhVienReducer;
