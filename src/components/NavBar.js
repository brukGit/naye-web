import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const categoryTitles = {
    fashion: 'Fashion',
    homeDecor: 'Home Decor',
    hobbyLeisure: 'Hobby & Leisure',
    
  };

  
  const handleNavigateCategory = (category, subCategory) => {
    navigate('/product', { 
      state: { 
        category: category,
        subCategory: subCategory
      }
    });
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/home" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

       
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
      
        {categoryTitles && Object.keys(categoryTitles).map((title) => (
          <div key={title} onClick={() => handleNavigateCategory(title, 'all')} className="menu-item">
            {categoryTitles[title]}
          </div>
        ))}
        <div onClick={() => navigate('/create')} className="menu-item">
            Create
          </div>
      
      </div>

      <button className="menu-toggle" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
    </nav>
  );
};

export default Navbar;
