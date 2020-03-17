import React from 'react'

export default function Databinding() {

    const title = 'CYBERSOFT';

    const phone = {
        id: 'IP',
        name: 'IPHONE 11 PRO MAX',
        price: 1099
    }

    const getProduct = () => {
        const androidPhone = {
            id: 'SS',
            name: 'Samsung galaxy note 10 5G',
            price: 2099
        }
        return (
            <div className="card text-dark bg-link">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">{androidPhone.name}</h4>
                    <p className="card-text">{androidPhone.price}</p>
                    <button onClick={() => { handleClick(androidPhone.name)   }} className="btn btn-success">Show detail</button>
                </div>
            </div>
        );
    }
    //Hàm xử lý cho nút button show detail
    const handleClick = (name)=>{
        alert(name);
    }

    return (
        <div className="container">
            <p id="text">{title}</p>
            <div className="card text-dark bg-link">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">{phone.name}</h4>
                    <p className="card-text">{phone.price}</p>
                    <button onClick={() => { handleClick(phone.name)   }} className="btn btn-success">Show detail</button>
                </div>
            </div>
            {getProduct()}
        </div>
    )
}
