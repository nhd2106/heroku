import React, { Component } from "react";

export default class BaiTapCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "/carimg/imgRedCar.jpg"
    };
  }

  handleChange = color => {
    switch (color) {
      case "red":
        this.setState({ image: "/carimg/imgRedCar.jpg" });
        break;
      case "silver":
        this.setState({ image: "/carimg/imgSilverCar.jpg" });
        break;
      case "black":
        this.setState({ image: "/carimg/imgBlackCar.jpg" });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <div style={{ width: "300px" }}>
          <img src={this.state.image} alt="" width="100%" />
        </div>
        <button
          className="btn btn-danger"
          onClick={() => this.handleChange("red")}
        >
          Red Color
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => this.handleChange("silver")}
        >
          Silver Color
        </button>
        <button
          className="btn btn-dark"
          onClick={() => this.handleChange("black")}
        >
          Black Color
        </button>
      </div>
    );
  }
}
