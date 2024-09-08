import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/companyintroduce">Company</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;