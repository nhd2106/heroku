import { LAY_THONG_TIN_NGUOI_DUNG } from "../constants/QuanLyNguoiDung";

const initialState = {
  userInfo: {}
};

const quanlyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_THONG_TIN_NGUOI_DUNG: {
      return { ...state, userInfo: action.data };
    }
    default:
      return state;
  }
};

export default quanlyNguoiDungReducer;
