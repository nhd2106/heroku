import React from "react";
import withCoursesList from "../HOC/withCoursesList";
import PaginationComponent from "../Layout/Pagination";

const HOCDanhSachKhoaHoc = props => {
  // Vì ta sử dụng HOC withCoursesList nên lúc này component sẽ nhận được props danhSachKhoaHoc, currentPage, totalCount và onChangePage
  // Việc xử lý logic để lấy được những props trên ta đã thực hiện trong HOC withCoursesList, giờ chỉ việc sử dụng props render giao diện
  return (
    <div>
      <h1>Danh Sách Khoá Học Sử Dụng HOC</h1>
      <div className="container">
        <div className="row">
          {props.danhSachKhoaHoc.map(item => (
            <div key={item.maKhoaHoc} className="col-md-4 card">
              <img src={item.hinhAnh} alt="" className="card-img" />
              <p>{item.tenKhoaHoc}</p>
              <button
                onClick={() =>
                  props.history.push(`/course-detail/${item.maKhoaHoc}`)
                }
                className="btn btn-success"
              >
                Chi Tiết
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          <PaginationComponent
            currentPage={props.currentPage} // page hiện tại
            pageSize={8} // constant cố định số phần từ trong một trang mà bạn muốn
            totalCount={props.totalCount} // tổng số lượng phần tử BE trả về
            onChangePage={props.onChangePage} // callback props để truyền page từ con lên cha
          />
        </div>
      </div>
    </div>
  );
};

export default withCoursesList(HOCDanhSachKhoaHoc);
