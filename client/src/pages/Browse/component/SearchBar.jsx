import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [show, setshow] = useState(false);

  return (
    <form className="search-bar">
      <input className="search-bar-input" type="text"></input>
      <svg
        className="search-bar-logo"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </form>
  );
};

export default SearchBar;
