import React, { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollY = useScrollPosition(60);

  useEffect(() => {
    if (scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollY]);

  return (
    <div style={{ background: `${show ? 'black' : 'none'}` }} className="nav">
      <div className="nav-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png"></img>
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
