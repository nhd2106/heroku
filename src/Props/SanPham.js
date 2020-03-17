import React from "react";

export default function SanPham(props) {
  const { sp, xemChiTiet, laySanPham } = props;
  return (
    <div className="card col-md-4">
      <img className="card-img-top" src={sp.hinhAnh} alt />
      <div className="card-body">
        <h4 className="card-title">{sp.tenSP}</h4>
        <p className="card-text">{sp.giaBan}</p>
        <button className="btn btn-success" onClick={() => xemChiTiet(sp)}>
          Xem Chi Tiết
        </button>
        <button
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => laySanPham(sp)}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}
