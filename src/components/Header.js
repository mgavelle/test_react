import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/main.scss';
import '../styles/Header.scss';
import logo from '../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log('Toggling menu. Current state:', menuOpen);
  };

  return (
    
    <header className='header'>
      <div className='header-content'>
        <Link to='/' className='logo'>
          <img src={logo} alt='Logo' />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>Dashboard</li>
            <li className='selected'><Link onClick={() => navigate('/')}>Products management</Link></li>
            <li>Employees management</li>
          </ul>
          {/* J'ai choisi ici d'ajouter un nouvel UL ce qui permettra d'ajouter des entrées dans le futur comme la gestion du compte utilisateur ou des pages d'information */}
          <ul className='logout'>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
