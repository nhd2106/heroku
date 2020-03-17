import { combineReducers } from "redux";
import quanLySinhVien from "./QuanLySinhVien";
import gameBauCua from "./GameBauCua";
import quanLyKhoaHoc from "./QuanLyKhoaHoc";
import quanLyNguoiDung from "./QuanLyNguoiDung";
import { GioHangReducer } from "./GioHangReducer";
import { BurgerReducer } from "./BurgerReducer";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
export default combineReducers({
  quanLySinhVien: quanLySinhVien,
  gameBauCua,
  quanLyKhoaHoc,
  quanLyNguoiDung,
  GioHangReducer,
  BurgerReducer,
  QuanLySinhVienReducer


});
