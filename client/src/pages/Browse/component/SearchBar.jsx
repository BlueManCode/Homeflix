import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const history = useHistory();
  const [searchTerm, setsearchTerm] = useState('');

  const handleSearch = () => {
    history.push(`/search?query=${searchTerm}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar-input"
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}></input>
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
