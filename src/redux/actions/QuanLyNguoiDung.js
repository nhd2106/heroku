import axios from "../../utils/axios";
import { LAY_THONG_TIN_NGUOI_DUNG } from "../constants/QuanLyNguoiDung";

export const dangKyAction = (values, handleSuccess) => {
  return dispatch => {
    axios
      .request({
        method: "POST",
        url: "QuanLyNguoiDung/DangKy",
        data: { ...values, maNhom: "GP01" }
      })
      .then(result => {
        // Dispatch action gửi data vào store
        // dispatch(layThongTinNguoiDung(result.data));

        // Khi gọi hàm handleSuccess, hàm callback bên component sẽ đc chạy
        handleSuccess();
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const dangNhapAction = (values, handleSuccess) => {
  return dispatch => {
    axios
      .request({
        method: "POST",
        url: "QuanLyNguoiDung/DangNhap",
        data: values
      })
      .then(result => {
        // Lưu xuống localstore để giữ lại trạng thái đăng nhập khi refresh page
        localStorage.setItem("userInfo", JSON.stringify(result.data));
        dispatch(layThongTinNguoiDung(result.data));
        handleSuccess();
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const layThongTinNguoiDung = nguoiDung => {
  return {
    type: LAY_THONG_TIN_NGUOI_DUNG,
    data: nguoiDung
  };
};
