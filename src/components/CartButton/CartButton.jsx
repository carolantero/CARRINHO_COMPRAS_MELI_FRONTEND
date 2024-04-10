import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import "./CartButton.css";

function CartButton() {
  return (
    <div className="cart-button">
      <Link to="/cart">
        <BsCart2 />
        <span className="cart-status">0</span>
      </Link>
    </div>
  );
}

export default CartButton;
