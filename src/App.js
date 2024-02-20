import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductList';
import SideBar from './sidebar/SideBar'

function App() {

  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false)
 
  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">

      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <SideBar isOpen={isSidebarOpen} />

      <main className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <div className='item'>
          <h2>Add Product</h2>
          <AddProductForm onAdd={addProduct} />
        </div>

        <div className='item'>
          <h2>Products List</h2>
          <ProductList products={products} />
        </div>


        <div className='item'>
          <h2>Products List</h2>
          <ProductList products={products} />
        </div>

        <div className='item'>
          <h2>Products List</h2>
          <ProductList products={products} />
        </div>
      </main>

    </div>

  );
}

export default App;
