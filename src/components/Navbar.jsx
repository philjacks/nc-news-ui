import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../img/home-white.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <img className="home-icon" src={homeIcon} alt="Home icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
