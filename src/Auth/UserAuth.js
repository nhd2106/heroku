import React from "react";
import { Route, Redirect } from "react-router-dom";

// Sử dụng HOC để override lại component Route, dùng để bảo vệ component không cho truy cập khi chưa đăng nhập
const UserAuth = ({ component: Component, ...props }) => {
  return (
    <Route
    
      {...props}
      // props render này sử dụng kĩ thuật render props
      render={routerProps => {
        // routerProps là history, location, match
        // Xử lý kiểm tra xem user đã đăng nhập hay chưa
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
          // Nhớ phải pass routerProps vào component để component có thế sử dụng 3 props history, location và match
          return <Component {...routerProps} />;
        }
        // nếu k tìm thấy user trong localstorege sẽ dùng component Redirect để chuyển vế trang login
        return <Redirect to="/login" />;
      }}
    />
  );
};

// Cách sử dụng: sử dụng thay thế cho component Route, xem chi tiết ở App.js
export default UserAuth;
