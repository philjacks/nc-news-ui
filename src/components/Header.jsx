import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="title">NC NEWS</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
