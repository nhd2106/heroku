import React, { Component } from 'react'
import { connect } from "react-redux"; // thư viện kết nối với redux
import './BaiTapBurger.css'
class BaiTapBurger extends Component {


    render() {
        return (
            <div className='container'>
                <h3 className='display-5 text-success text-center'> Bài tập burger cybersoft</h3>
                <div className = 'row'>
                    <div className = 'col-7'>
                    <h3 className = 'text-center'>bánh burger của bạn</h3>
                    <div className = '.breadTop'></div>
                    </div>
                    <div className = 'col-5'>
                        <div className = 'breadBottom'></div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger
    }
}
export default connect()(BaiTapBurger)
