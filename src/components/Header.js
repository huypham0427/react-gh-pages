import React from 'react';
import logo from '../assets/logo.jpg';
import '../styling/Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Company Logo" />
      </a>
      <div className="header-info">
        <span className="site-name" style={{ color: '#260099' }}>THE INTRANET</span>
        <span className="company-name" style={{ color: '#4663b9' }}>
          Hi-Tech Electronic Manufacturing, Inc
        </span>
      </div>
    </header>
  );
}

export default Header;