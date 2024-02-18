import React from 'react';
import ProductItem from './ProductItem'

function ProductList ({ products }) {
    return (
        <div>
            {/* Iterate over each product in the products array */}
            {products.map((product, index) => (
                // Render a ProductItem from each product
                // Pass the product and a unique key prop to each ProductItem
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
}

export default ProductList;