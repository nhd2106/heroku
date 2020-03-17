import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
import useForm from "./useForm";

// Validation của form nào thì form đó tự viết
// LoginForm có 2 field là username và password
export const validation = values => {
  let errors = {};
  if (!values.username) {
    errors.username = "Không được để trống";
  }
  if (!values.password) {
    errors.password = "Không được để trống";
  }
  // Validate min user name
  if (values.username.length < 5) {
    errors.username = "Độ đài ít nhất 3 kí tự";
  }
  // Validate max user name
  if (values.username.length > 15) {
    errors.username = "Độ đài tối đa 15 kí tự";
  }

  return errors;
};

export const DemoHooks = () => {
  // useState nhận trả về 1 array 2 tham số
  // tham số đầu tiên là giá trị của state
  // tham số thứ 2 là một hàm dùng để thay đổi state
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });

  // Sử dụng custom hooks useCounter
  const [number, inc, desc] = useCounter(0);
  // Sử dụng custom hooks useForm
  const [loginForm, handleChangeLoginForm, handleBlurLoginForm] = useForm(
    {
      values: {
        username: "",
        password: ""
      },
      errors: {
        username: "",
        password: ""
      }
    },
    validation
  );

  // useEffect chạy sau khi state thay đổi và render lại
  // Nó nhận vào 2 tham số
  // 1: hàm callback để xử lý
  // 2: 1 array các tham số mà nó sẽ so sánh để quyết định xem có chạy useEffect sau khi render lại hay không
  // Hàm useEffect này chỉ được chạy khi count thay đổi
  useEffect(() => {
    console.log("count sau khi render", count);
  }, [count]);

  // Hàm useEffect này chỉ được chạy khi name thay đổi
  useEffect(() => {
    console.log("name sau khi render", name);
  }, [name]);

  // array không tham số useEffect chỉ chạy 1 lần duy nhất => tương ứng với componentDidMount
  useEffect(() => {
    console.log("render 1 lần duy nhất");
  }, []);

  // Không có tham số thứ 2, useEffect này sẽ chạy mỗi khi render lại
  useEffect(() => {
    // Không gọi API trong đây
    console.log("render lại mỗi khi state hoặc props thay đổi");
  });

  // useEffect và useState phải khai báo ở trên đầu component
  // Không được sử dụng trong if else hay vòng for

  const handleChange = evt => {
    // const [name, value] = evt.target;
    setName({ ...name, [evt.target.name]: evt.target.value });
  };

  return (
    <div>
      {/* <h1>Demo Hooks</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Cộng</button> */}
      {/* {count % 2 === 0 && <HooksChild />} */}
      {/* <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={handleChange}
      /> */}

      {/* useCounter */}
      {/* <p>{number}</p>
      <button onClick={inc}>Tăng</button>
      <button onClick={desc}>Giảm</button> */}

      {/* useForm */}
      <input
        type="text"
        name="username"
        value={loginForm.values.username}
        onChange={handleChangeLoginForm}
        onBlur={handleBlurLoginForm}
      />
      {loginForm.errors.username && <p>{loginForm.errors.username}</p>}
      <input
        type="text"
        name="password"
        value={loginForm.values.password}
        onChange={handleChangeLoginForm}
        onBlur={handleBlurLoginForm}
      />
      {loginForm.errors.password && <p>{loginForm.errors.password}</p>}
    </div>
  );
};

export const HooksChild = () => {
  useEffect(() => {
    let timeOut = setTimeout(() => {
      console.log("Render sau 1s");
    }, 1000);
    console.log("HooksChild Render");
    return () => {
      // Tương ứng với componentWillUnmount
      // Sẽ chạy khi component bị xoá khỏi DOM
      // Trong này ta thường sẽ xử lý clearTimeout, removeEvenlistener,...
      console.log("HooksChild Unmount");
      clearTimeout(timeOut);
    };
  });
  return <div>Hello</div>;
};
