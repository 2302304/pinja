import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Etusivu</Link></li>
        <li><Link to="/consultants">Konsultit</Link></li>
        <li><Link to="/dashboard">Hallintapaneeli</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
