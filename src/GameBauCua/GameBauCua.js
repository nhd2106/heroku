import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";
import { choiGameAction } from "../redux/actions/GameBauCua";

class GameBauCua extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(props) {
    // number string boolean, null, undefined => so sanh giá trị
    // Object, Array, function => so sánh tham chiếu

    return true;
  }

  render() {
    console.log(this.state.count);
    return (
      <div className="container">
        <h1 className="text-center">Game Bầu Cua</h1>
        <button
          onClick={() =>
            this.setState(state => ({
              count: state.count + 1
            }))
          }
        >
          Cộng
        </button>
        <div className="d-flex justify-content-between mb-5">
          <button className="btn btn-success" onClick={this.props.choiGame}>
            Chơi game
          </button>
          <XucXac />
          <p>Tổng tiền: {this.props.tongTien}$</p>
        </div>
        {/* Component DanhSachCuoc */}
        <DanhSachCuoc />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tongTien: state.gameBauCua.tongTien
});

const mapDispatchToProps = dispatch => ({
  choiGame: () => dispatch(choiGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua);
