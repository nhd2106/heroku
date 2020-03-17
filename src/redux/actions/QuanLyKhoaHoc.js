import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_CHI_TIET_KHOA_HOC,
  CHANGE_PAGE
} from "../constants/QuanLyKhoaHoc";
import axios from "../../utils/axios";

export const layDanhSachKhoaHocAction = danhSachKhoaHoc => {
  return {
    type: LAY_DANH_SACH_KHOA_HOC,
    data: danhSachKhoaHoc
  };
};

// Redux chỉ cho phép dispatch 1 action return về object đơn thuần
// Đế có thể return về một hàm có tham số dispatch ta phải sử dụng thư viện redux-thunk
// Redux thunk là 1 thư viện middleware cho phép ta can thiệp vào giữ quá trình
// action được dispatch lên store
export const layDanhSachKhoaHoc = (currentPage, pageSize) => {
  return dispatch => {
    // Gọi API
    axios
      .request({
        method: "GET",
        url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP01`
      })
      .then(result => {
        // Thành công, gọi action đưa data vào redux store
        dispatch(layDanhSachKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const layChiTietKhoaHoc = maKhoaHoc => {
  return dispatch => {
    axios
      .request({
        method: "GET",
        url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
      })
      .then(result => {
        // Gọi action đẩy dữ liệu vào store
        dispatch(layChiTietKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const layChiTietKhoaHocAction = khoaHoc => {
  return {
    type: LAY_CHI_TIET_KHOA_HOC,
    data: khoaHoc
  };
};

export const changePageAction = page => {
  return {
    type: CHANGE_PAGE,
    data: page
  };
};
