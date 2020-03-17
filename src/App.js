import React, { useEffect } from "react";
// import Header from "./components/Header";
// import BaiTapLayout from "./components/BaiTapLayout";
// import Databinding from "./Databinding/Databinding";
// import DatabindingClass from "./Databinding/DatabindingClass";
// import BaiTapCar from "./components/BaiTapCar";
// import BaiTapVongLap from "./Databinding/BaiTapVongLap";
// import BaiTapVongLap2 from "./Databinding/BaiTapVongLap2";
// import BaiTapSanPham from "./Props/BaiTapSanPham";
// import QuanLySinhVien from "./QuanLySinhVienRedux/QuanLySinhVien";
import GameBauCua from "./GameBauCua/GameBauCua";
import { DemoHooks } from "./Hooks/DemoHooks";
import DanhSachKhoaHoc from "./Elearning/DanhSachKhoaHoc";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Layout/Header";
import PageNotFound from "./Layout/PageNotFound";
import ChiTietKhoaHoc from "./Elearning/ChiTietKhoaHoc";
import DangKy from "./Elearning/DangKy";
import DangNhap from "./Elearning/DangNhap";
import { useDispatch } from "react-redux";
import { layThongTinNguoiDung } from "./redux/actions/QuanLyNguoiDung";
import UserAuth from "./Auth/UserAuth";
import HOCDanhSachKhoaHoc from "./Elearning/HOCDanhSachKhoaHoc";
import RenderPropsDanhSachKhoaHoc from "./Elearning/RenderPropsDanhSachKhoaHoc";
import BTGioHangRedux from "./BaiTapGioHangRedux/BTGioHangRedux";
import BaiTapBurger from "./baiTapburger/BaiTapBurger";
import BaiTapForm from "./BaiTapForm/BaiTapForm";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Lấy thông tin người dùng từ localstore lên
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // Sau đó gọi action layThongTinNguoiDung để lưu vào store lại
    if (userInfo) {
      dispatch(layThongTinNguoiDung(userInfo));
      console.log(userInfo);
      
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" component={DangNhap}  />
        <Route path="/register" component={DangKy} />
        <UserAuth path="/courses-list" component={DanhSachKhoaHoc} />
        <UserAuth path="/courses-list-hoc" component={HOCDanhSachKhoaHoc} />
        <UserAuth
          path="/courses-list-render-props"
          component={RenderPropsDanhSachKhoaHoc}
        />
        <UserAuth path="/course-detail/:maKhoaHoc" component={ChiTietKhoaHoc} />
        <Route path="/demo-hooks" component={DemoHooks} />
        <Route path="/game-bau-cua" component={GameBauCua} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <BTGioHangRedux/>
      {/* <BaiTapBurger/> */}
      {/* <BaiTapForm/> */} 
    </BrowserRouter>
  );
}

export default App;
