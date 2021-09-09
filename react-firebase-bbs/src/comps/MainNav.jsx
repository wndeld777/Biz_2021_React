import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

function MainNav() {
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/write">글쓰기</NavLink>
      </li>
      <li>
        <NavLink to="/bbs">로그인</NavLink>
      </li>
      <li>
        <NavLink to="/bbs">회원가입</NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
