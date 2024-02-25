import React from 'react';
import ProductItem from './ProductItem'
import './ProductList.css'

function ProductList ({ products }) {
    return (
        <table className='table'>
            <thead>
                <tr className='tr'>
                    <th className='th'>Product Name</th>
                    <th className='th'>Qunatity</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) =>(
                    <ProductItem key={index} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;