import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachKhoaHoc,
  changePageAction
} from "../redux/actions/QuanLyKhoaHoc";

// Thường khi sử dụng HOC, ta sẽ đặt tên theo pattern withName
// Trong trường hợp này sẽ là withCoursesList
const withCoursesList = Component => {
  // Nếu viết kiểu này nhớ phải return component ở cuối
  const CoursesList = () => {
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
      <Component
        danhSachKhoaHoc={danhSachKhoaHoc}
        currentPage={currentPage}
        totalCount={totalCount}
        onChangePage={onChangePage}
      />
    );
  };
  return CoursesList;
};

export default withCoursesList;
