import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/space-logo.png';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2 className="logoLink">Space Traveller&apos;s Hub</h2>
      </div>
      <ul className="menu-items">
        <li>
          <NavLink to="/">Rockets</NavLink>
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
