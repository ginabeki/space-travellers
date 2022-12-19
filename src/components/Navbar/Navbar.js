import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/space-logo.png';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <Link to="/" className="logoLink">Space Traveller&apos;s Hub</Link>
      </div>
      <ul className="menu-items">
        <li>
          <Link to="/rockets" className="navLink">Rockets</Link>
        </li>
        <li>
          <Link to="/mission" className="navLink">Missions</Link>
        </li>
        <li>
          <Link to="/profile" className="navLink">My Profile</Link>
        </li>

      </ul>
    </nav>
  </header>
);

export default Navbar;
