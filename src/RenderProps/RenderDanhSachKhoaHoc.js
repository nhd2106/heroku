import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachKhoaHoc,
  changePageAction
} from "../redux/actions/QuanLyKhoaHoc";

// render props là một kĩ thuật xử lý việc chia sẻ logic giữa các React Component bằng cách sử dụng prop có value như một function.
const RenderDanhSachKhoaHoc = props => {
  const dispatch = useDispatch();
  const { danhSachKhoaHoc, currentPage, totalCount } = useSelector(
    state => state.quanLyKhoaHoc

  );

  useEffect(() => {
    
    dispatch(layDanhSachKhoaHoc(currentPage, 8));
  }, [currentPage]);

  const onChangePage = page => {
    dispatch(changePageAction(page));
  };

  return (
    <div>
      {/* Tên props trả về không nhất thiet phải là render, có thể đặt tên tuỳ ý ví dụ renderContent,....  */}
      {props.render({ danhSachKhoaHoc, currentPage, totalCount, onChangePage })}
    </div>
  );
};

export default RenderDanhSachKhoaHoc;
