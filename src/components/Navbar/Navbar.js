import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/space-logo.png';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <NavLink to="/" className="logoLink">Space Traveller&apos;s Hub</NavLink>
      </div>
      <ul className="menu-items">
        <li>
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
