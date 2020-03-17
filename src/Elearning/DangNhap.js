import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../redux/actions/QuanLyNguoiDung";
import { Redirect } from "react-router-dom";

const DangNhap = props => {
  // Tương tự mapDispatchToProps nhưng dùng hooks
  const dispatch = useDispatch();
  // Tương tự mapStateToProps nhưng dùng hooks
  const { userInfo } = useSelector(state => state.quanLyNguoiDung);

  const handleLoginSuccess = () => {
    //   Đẩy người dùng vào trang / sau khi đăng nhập thành công bên action
    props.history.replace("/");
  };

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      props.history.push("/");
    }
  }, [userInfo]);

  return (
    <div className='container'>
      <h1>Đăng Nhập</h1>  
      <Formik
        initialValues={{ taiKhoan: "", matKhau: "" }}
        onSubmit={values =>
         
          
          
          dispatch(dangNhapAction(values, handleLoginSuccess))
        }
      >
        {({ handleSubmit }) => (
          <Form>
            <FormGroup>
              <Label>Tài Khoản</Label>
              <Input tag={Field} type="text" name="taiKhoan" />
            </FormGroup>
            <FormGroup>
              <Label>Mật khẩu</Label>
              <Input tag={Field} type="password" name="matKhau" />
            </FormGroup>
            <Button onClick={handleSubmit} color="primary">
              Đăng Nhập
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DangNhap;
