import React from "react";
import PaginationComponent from "../Layout/Pagination";
import RenderDanhSachKhoaHoc from "../RenderProps/RenderDanhSachKhoaHoc";

const RenderPropsDanhSachKhoaHoc = () => {
  return (
    <div>
      <h1>Danh sách khóa học sử dụng renderProps</h1>
      <RenderDanhSachKhoaHoc
        render={props => {
          // props này là truyền từ bên RenderDanhSachKhoaHoc qua
          // bao gồm danhSachKhoaHoc, currentPage, totalCount, onChangePage
          console.log(props);
          return (
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
          );
        }}
      />
    </div>
  );
};

export default RenderPropsDanhSachKhoaHoc;
