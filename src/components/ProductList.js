import React from 'react'
import Product from './Product'

export default function ProductList() {
    return (
        <div className="container">
            <h3 className="text-center">BEST SMART PHONE</h3>
            <div className="row">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}
