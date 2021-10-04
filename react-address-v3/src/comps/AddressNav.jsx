import React from "react";
import { NavLink } from "react-router-dom";
import "../css/addressNav.css";

function AddressNav() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </nav>
  );
}
export default AddressNav;
