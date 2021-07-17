import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";


class Nav extends React.Component {

  render() {
    return (
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/module">Module</NavLink>
          <NavLink to="/activity">Activity</NavLink>
        </nav>
    );
  }
}

export default Nav;

