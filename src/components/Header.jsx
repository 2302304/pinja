import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import PinjaLogo from '../assets/Pinja-logo.webp'; // Importoi Pinjan logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={PinjaLogo} alt="Pinja Logo" className="pinja-logo" /> {/* Lisää Pinjan logo */}
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} /> Etusivu
        </Link>
        <Link to="/consultants" className="nav-link">
          <FontAwesomeIcon icon={faUsers} /> Konsultit
        </Link>
        <Link to="/dashboard" className="nav-link">
          <FontAwesomeIcon icon={faChartLine} /> Hallintapaneeli
        </Link>
      </nav>
    </header>
  );
};

export default Header;
