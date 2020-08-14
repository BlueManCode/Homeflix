import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"></img>
        <Link className="nav-link" to="/browse">
          Home
        </Link>
        <Link className="nav-link" to="/show">
          Show
        </Link>
        <Link className="nav-link" to="/movie">
          Movie
        </Link>
        <Link className="nav-link" to="/mylist">
          My List
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
