import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "./Cart/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioHover, setIsAudioHover] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const Navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      Navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="navbar-logo">
          <Link to="/"><h2>SRS CART</h2></Link>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="search-input"
          />
          <button type="submit" onClick={handleSearch} className="search-button">
            <img src="https://img.icons8.com/ios-filled/20/000000/search.png" alt="Search" />
          </button>
        </div>



        <div className="navbar-icons">
          {/* Profile Icon */}
          <div className="navbar-icon profile-icon" onClick={toggleProfileDropdown}>
            <img
              src="https://img.icons8.com/?size=100&id=84898&format=png&color=000000"
              alt="Profile"
            />
            {showProfileDropdown && (
              <ul className="profile-dropdown">
                <li><Link to="/Registration">Register</Link></li>
                <li><Link to="/Loginpage">Login</Link></li>
                <li><Link to="/Orderpage">My Orders</Link></li>
              </ul>
            )}
          </div>

          {/* Cart Icon */}
          <div className="navbar-icon">
            <Link to="/Cartpage">
              <img
                src="https://img.icons8.com/?size=100&id=84926&format=png&color=000000"
                alt="Cart"
              />
              <span className="cart-count">{cartItems.length}</span>
            </Link>
          </div>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className={`second-navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <Link to="all">Shop All</Link>
          <Link to="computer">Computers</Link>
          <Link to="Tablets">Tablets</Link>
          <Link to="Drone">Drones</Link>
          <Link to="camera">Cameras</Link>
          <li
            className="navbar-audio-dropdown"
            onMouseEnter={() => setIsAudioHover(true)}
            onMouseLeave={() => setIsAudioHover(false)}
          >
            <Link>Audio</Link>
            {isAudioHover && (
              <ul className="navbar-dropdown-menu">
                <li><Link to="Headphone">Headphone</Link></li>
                <li><Link to="Speaker">Speaker</Link></li>
              </ul>
            )}
          </li>
          <Link to="mobile">Mobile</Link>
          <Link to="tv">Television</Link>
          <Link to="watch">Watch</Link>
          <Link to="sale">Sale</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
