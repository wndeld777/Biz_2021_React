import React from "react";
import { NavLink } from "react-router-dom";
import "../css/menu.css";

function MainNav() {
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">나에대하여</NavLink>
      </li>
      <li>
        <NavLink to="/rem">RememberList</NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
