import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductList';

function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  return (
    <div className="app-container">
      <h1>Home Inventory App</h1>
      
      <div className='main-content'>
        <div className='item'>
          <h2>Add Product</h2>
          <AddProductForm onAdd={addProduct} />
        </div>

        <div className='item'>
          <h2>Products List</h2>
          <ProductList products={products} />
        </div>
      </div>

    </div>
  );
}

export default App;
