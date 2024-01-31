import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/adlog">ADMIN</Link>
        <Link to="/recharge">RECHARGE</Link>
      </div>
    </nav>
  );
}

export default Navbar;