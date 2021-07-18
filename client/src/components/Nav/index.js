import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Nav, Bars, NavMenu, NavBtn, NavBtnLink } from "./navElements";
import logo from "./logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        {/* logo */}
        <NavLink to="/" className="logo">
          <img src={logo} alt="HVPT Logo" />
        </NavLink>
        {/* hamburger menu */}
        <Bars />
        {/* div for wrapping links */}
        <NavMenu className='nav'>
          <NavLink className="navLink" to="/">
            Dashboard 
          </NavLink>
          <NavLink
            className="navLink"
            activeStyle={{ fontWeight: "bold" }}
            to="/login">
            Login 
          </NavLink>
          <NavLink
            className="navLink"
            activeStyle={{ fontWeight: "bold" }}
            to="/module">
            Module 
          </NavLink>
          <NavLink
            className="navLink"
            activeStyle={{ fontWeight: "bold" }}
            to="/activity">
            Activity 
          </NavLink>
        </NavMenu>
      </Nav>
    );
  }
}

export default Navbar;
