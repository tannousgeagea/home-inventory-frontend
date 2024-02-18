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
    <div className="App">
      <h1>Home Inventory App</h1>
      <AddProductForm onAdd={addProduct} />
      <ProductList products={products} />
      {/* ProductList component will eventually go here */}
    </div>
  );
}

export default App;
