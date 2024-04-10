import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import GradientCircularProgress from "../Loading/Loading";
import { useSelector } from "react-redux";

function Cart() {
  const [loading, setLoading] = useState(true);
  const getCartProducts = useSelector((state) => state.cart.getCartProducts);

  useEffect(() => {
    if (getCartProducts.length > 0) {
      setLoading(false);
    }
  }, [getCartProducts]);

  return loading ? (
    <div className="cart">
      <div className="cart-items">
        <h2>Carrinho</h2>
        <GradientCircularProgress />
      </div>
      <div className="cart-resume">valor total</div>
    </div>
  ) : (
    <div className="cart">
      <div className="cart-items">
        <h2>Carrinho</h2>
        {getCartProducts.map((product) => (
          <CartItem key={product.product_id} product={product} />
        ))}
      </div>
      <div className="cart-resume">valor total</div>
    </div>
  );
}

export default Cart;
