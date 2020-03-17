import React, { Component } from "react";

export default class DatabindingClass extends Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      isLogin: false
    };
  }

  propName = "Frontend 31";

  handleLogout = () => {
    this.setState({ isLogin: false });
  };

  handleClick = propName => {
    // console.log(this);
    // Không được gán state như vậy
    // this.state.isLogin = true;
    this.setState(
      state => ({
        isLogin: !state.isLogin
      }),
      () => {
        // Sử dụng callback để lấy giá trị mới nhất sau khi setState
        console.log(this.state.isLogin);
      }
    );
    // console.log(this.state.isLogin);

    // alert(propName);
  };

  //render là phương thức có sẵn của class Component
  render() {
    //Khai báo biến
    const title = "cybersoft";

    // if (this.isLogin) {
    //   return <p>Bạn đã đăng nhập</p>;
    // }

    //return chứa nội dung hiển thị của component
    return (
      <div className="text-center">
        {this.state.isLogin ? (
          <div>
            <p>Bạn đã đăng nhâp</p>
            <button onClick={() => this.handleClick()}>Logout</button>
          </div>
        ) : (
          <div>
            <p>{title}</p>
            <h3>{this.propName}</h3>
            <button onClick={() => this.handleClick(this.propName)}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}
