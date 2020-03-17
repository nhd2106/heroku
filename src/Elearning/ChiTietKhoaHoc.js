import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody } from "reactstrap";
import { layChiTietKhoaHoc } from "../redux/actions/QuanLyKhoaHoc";

const ChiTietKhoaHoc = ({ chiTietKhoaHoc, layChiTietKhoaHoc, ...props }) => {
 
  
  useEffect(() => {
    // B1: Lấy mã khoá học từ trên url xuống
     const { maKhoaHoc } = props.match.params;
    // B2: Dispatch action gọi API
    layChiTietKhoaHoc(maKhoaHoc);
  }, []);


  console.log(chiTietKhoaHoc );
  
  return (
    
    
    <div>
      
      
      <h1>Chi Tiết Khoá Học</h1>
      <Card className="col-md-4">
        <CardImg top src={chiTietKhoaHoc.hinhAnh} width="100%" />
        <CardBody>
          <p>{chiTietKhoaHoc.tenKhoaHoc}</p>
          <p>{chiTietKhoaHoc.moTa}</p>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  chiTietKhoaHoc: state.quanLyKhoaHoc.chiTietKhoaHoc
});

const mapDispatchToProps = dispatch => ({
  layChiTietKhoaHoc: maKhoaHoc => dispatch(layChiTietKhoaHoc(maKhoaHoc))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc);
