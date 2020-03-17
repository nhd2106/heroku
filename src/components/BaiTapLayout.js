import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Footer from "./Footer";

export default class BaiTapLayout extends Component {
  name = "Cybersoft";
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
        <Footer nameProps={this.name} />
      </div>
    );
  }
}
