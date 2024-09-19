import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    if (searchTerm) {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <header style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="search-category-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearchClick} className="search-button">
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </button>
          </div>

          <div className="category-container">
            <select className="select">
              <option> Select Category</option>
              <option>Indoor Games</option>
              <option>Outdoor Games</option>
              <option>Sports Wear </option>
              <option>Sports & Fitness Equipments</ option>
            </select>
          </div>
        </div>

        <ul className="nav-icons">
          <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
