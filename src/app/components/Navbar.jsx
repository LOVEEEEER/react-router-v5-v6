import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>App NavBar</h1>
      <ul className="nav-bar">
        <li className="nav-item">
          <NavLink to="/users">Users List Page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
