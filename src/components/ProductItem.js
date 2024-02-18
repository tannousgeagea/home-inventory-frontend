import React from "react";
import './ProductItem.css';

function ProductItem({ product }) {// Receive a single product object as props  
    return (
        <div className="product-item">
            <span className=""product-name>{product.name}</span> {/* Display the product name */}
            <span className="pproduct-quantity">Quantity: {product.quantity}</span> {/* Display the product's quantity */}
        </div>
    );
}

export default ProductItem;