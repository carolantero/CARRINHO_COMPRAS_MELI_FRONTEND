import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const allProducts = useSelector((state) => state.cart.allProducts);

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
