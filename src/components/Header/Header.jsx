import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">HOME</Link>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
