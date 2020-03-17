import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

class XucXac extends PureComponent {
  render() {
    console.log("Render XucXac");

    return (
      <div>
        {this.props.xucXac.map(item => (
          <img src={item.hinhAnh} alt="" width="50px" height="50px" />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  xucXac: state.gameBauCua.xucXac
});

export default connect(mapStateToProps)(XucXac);
