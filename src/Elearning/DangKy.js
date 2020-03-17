import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from "reactstrap";
import { dangKyAction } from "../redux/actions/QuanLyNguoiDung";

const validate = values => {
  let errors = {};
  Object.keys(values).forEach(key => {
    if (!values[key]) {
      errors[key] = "Required";
    }
  });
  if (values.email.indexOf("@") === -1) {
    errors.email = "Email not valid";
  }
  //   Tuỳ ý thêm validation vào
  return errors;
};

const DangKy = props => {
  const dispatch = useDispatch();

  const handleRegisterSuccess = () => {
    // Hàm callback này sẽ chạy khi được gọi bên action
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Form Đăng Ký</h1>
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          soDT: "",
          email: ""
        }}
        validate={validate}
        onSubmit={values =>
          dispatch(dangKyAction(values, handleRegisterSuccess))
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => {
          return (
            <Form>
              <FormGroup>
                <Label>Tài Khoản</Label>
                {/* <Input
                type="text"
                name="taiKhoan"
                // Cần 3 props này nếu không dùng Field của formik
                value={values.taiKhoan}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              {errors.taiKhoan && touched.taiKhoan && (
                // Cần tự kiểm tra errors và touched nếu không dùng ErrorMessage
                <FormFeedback>{errors.taiKhoan}</FormFeedback>
              )} */}
                {/* Đối với reactstrap sử dụng như thế này */}
                <Input tag={Field} type="text" name="taiKhoan" />
                {/* Thông thường sử dụng Field như thế này */}
                {/* <Field type="text" name="taiKhoan" component={Input} /> */}
                <ErrorMessage name="taiKhoan" />
              </FormGroup>
              <FormGroup>
                <Label>Mật Khẩu</Label>
                <Input type="password" name="matKhau" tag={Field} />
                <ErrorMessage name="matKhau" />
              </FormGroup>
              <FormGroup>
                <Label>Họ tên</Label>
                <Input type="text" name="hoTen" tag={Field} />
                <ErrorMessage name="hoTen" />
              </FormGroup>
              <FormGroup>
                <Label>Số điện thoại</Label>
                <Input type="text" name="soDT" tag={Field} />
                <ErrorMessage name="soDT" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" tag={Field} />
                <ErrorMessage name="email" />
              </FormGroup>
              <Button onClick={handleSubmit} color="primary">
                Đăng Ký
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DangKy;
