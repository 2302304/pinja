import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="icon" /> Etusivu
          </Link>
        </li>
        <li>
          <Link to="/consultants">
            <FontAwesomeIcon icon={faUser} className="icon" /> Konsultit
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faCog} className="icon" /> Hallintapaneeli
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
