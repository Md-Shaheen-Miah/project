import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaTags, FaUserCircle, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import './style.css';

const Sidebar = () => {
  return (
   


    
    <div className="sidebarr">
      <div className="sidebar-header">
        <h2>E-Commerce</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/Home" exact activeClassName="active">
          <FaHome className="sidebar-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/Products" activeClassName="active">
          <FaShoppingCart className="sidebar-icon" />
          <span>Products</span>
        </NavLink>
        <NavLink to="/categories" activeClassName="active">
          <FaTags className="sidebar-icon" />
          <span>Categories</span>
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <FaUserCircle className="sidebar-icon" />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/favorites" activeClassName="active">
          <FaHeart className="sidebar-icon" />
          <span>Favorites</span>
        </NavLink>
        <NavLink to="/logout" activeClassName="active">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </NavLink>
        </nav>
    </div>
 
  )
}

export default Sidebar
