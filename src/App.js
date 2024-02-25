import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductList';
import SideBar from './sidebar/SideBar'
import Homepage from './components/Homepage'

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
    <Router>
      <div className="app-container">

        <h1>Home Inventory App</h1>

        <button onClick={toggleSidebar} className="sidebar-toggle" aria-label="Toggle sidebar">
          <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </button>

        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className='container'>
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/add-product' element={<AddProductForm onAdd={addProduct}/>}></Route>
            <Route path="/product-list" element={<ProductList products={products}/>} />
          </Routes>       

        </main>

      </div>

    </Router>

  );
}

export default App;
