// Sidebar.js
import React from 'react';
import './SideBar.css'; // Assuming you'll create a CSS file for styling
import { Link } from 'react-router-dom'; 

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className='button'>Close</button>
      <nav>
        <ul>
          {/* <li><a href="#home">Home</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          // Add other navigation links or content here
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
