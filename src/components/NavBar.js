import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="home-container">
    <nav>
      <h1>My skiil set for working as front developer</h1>
      <ul>
        <li><Link to="/">EXCEL</Link></li>
        <li><Link to="/about">POWERPOINT</Link></li>
        <li><Link to="/Contact">ReactJs</Link></li>
      </ul>
    </nav>
       <h1 className="home-header">Home Page</h1>
      <p className="home-paragraph">Welcome to the Home Page!</p>
      </div>
  );
}

export default NavBar;
