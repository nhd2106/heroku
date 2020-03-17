import React, { Component } from "react";

// HOC là 1 pattern của React, hiểu đơn giản nó là 1 function nhận vào 1 component và return về 1 component khác
// Ví dụ sau là 1 ví dụ đơn giản về HOC dùng để bao một phần tử hoặc component xung quanh một component.

// HOC đối với function component
export const DemoHOC = Component => {
  return () => {
    return (
      <div className="container">
        <Component />
      </div>
    );
  };
};

// HOC đối với class component
export const DemoClassHOC = Component => {

  return class DemoHOC extends React.Component {
    render() {
      return (
        <div className="container">
          <Component />
        </div>
      );
    }
  };
};



// Cách xử dụng DemoHOC(Component)
// Component mà sử dụng HOC lúc này sẽ luôn có 1 div có class container bao bọc
class DemoLayoutHOC extends Component {
  render() {
    return <div>Demo layout hoc</div>;
  }
}

export default DemoHOC(DemoLayoutHOC);
