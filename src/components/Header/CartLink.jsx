import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import "./CartLink.css";

function CartLink() {
  return (
    <div className="cart-link">
      <Link to="/cart">
        <BsCart2 className="cart-link-item" />
        <span className="cart-status">0</span>
      </Link>
    </div>
  );
}

export default CartLink;
