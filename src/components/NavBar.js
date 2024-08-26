
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/directors"
            className={({ isActive, isPending }) => (isActive ? "active" : "")}
          >
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            className={({ isActive, isPending }) => (isActive ? "active" : "")}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
