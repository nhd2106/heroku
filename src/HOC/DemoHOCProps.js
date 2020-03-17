import React from "react";

// HOC còn có thể dùng để điều khiển props, ví dụ, thêm props mới và sửa đổi hoặc loại bỏ props hiện có.

const DemoHOCProps = Component => {
  return () => {
    const name = "Cybersoft";
    return <Component name={name} />;
  };
};

// Component mà sử dụng HOC, lúc này component mà sử dụng HOC trên sẽ nhận được props name
const ComponentUsingHOC = props => {
  console.log(props);
  return <div>ComponentUsingHOC</div>;
};

export default DemoHOCProps(ComponentUsingHOC);
