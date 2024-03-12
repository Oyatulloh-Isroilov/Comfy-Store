import '../css/index.css'
import * as React from 'react';
import Products from '../components/Products';

function Product() {
    return (
        <>
            <div className="container">
                <div className="heroContainer">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default Product;