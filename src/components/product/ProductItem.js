import React from "react";
import './ProductItem.css';

function ProductItem({ product }) {// Receive a single product object as props  
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
        </tr>
    );
}

export default ProductItem;

