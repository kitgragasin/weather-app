import React from "react";
import {Link } from "react-router-dom";
import LogoutButton from "./components/LogoutButton";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
            <LogoutButton/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;