import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  layDanhSachKhoaHoc,
  changePageAction
} from "../redux/actions/QuanLyKhoaHoc";
import PaginationComponent from "../Layout/Pagination";


const DanhSachKhoaHoc = ({
  danhSachKhoaHoc,
  layDanhSachKhoaHoc,
  onChangePage,
  currentPage,
  totalCount,
  ...props
}) => {
  useEffect(() => {
    layDanhSachKhoaHoc(currentPage, 8);
  }, [currentPage]);
console.log(props);

  return (
    <div>
      <h1>Danh Sach Khoa Hoc</h1>

      <div className="container">
        <div className="row">
          {danhSachKhoaHoc.map(item => (
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
        <div >
          <PaginationComponent
            currentPage={currentPage} // page hiện tại
            pageSize={8} // constant cố định số phần từ trong một trang mà bạn muốn
            totalCount={totalCount} // tổng số lượng phần tử BE trả về
            onChangePage={onChangePage} // callback props để truyền page từ con lên cha
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  danhSachKhoaHoc: state.quanLyKhoaHoc.danhSachKhoaHoc,
  currentPage: state.quanLyKhoaHoc.currentPage,
  totalCount: state.quanLyKhoaHoc.totalCount
});

const mapDispatchToProps = dispatch => ({
  layDanhSachKhoaHoc: (currentPage, pageSize) =>
    dispatch(layDanhSachKhoaHoc(currentPage, pageSize)),
  onChangePage: page => dispatch(changePageAction(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);
