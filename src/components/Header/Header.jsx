import React from "react";
import CartLink from "./CartLink";
import HomeLink from "./HomeLink";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <HomeLink />
        <CartLink />
      </div>
    </header>
  );
}

export default Header;
