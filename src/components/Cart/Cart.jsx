import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Carrinho</h2>
        <CartItem />
      </div>
      <div className="cart-resume">valor total</div>
    </div>
  );
}

export default Cart;
