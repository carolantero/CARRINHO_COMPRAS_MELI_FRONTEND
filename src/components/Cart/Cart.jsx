import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import GradientCircularProgress from "../Loading/Loading";
import { useSelector } from "react-redux";

function Cart() {
  const [loading, setLoading] = useState(true);
  const allCartProducts = useSelector((state) => state.cart.allCartProducts);

  useEffect(() => {
    if (allCartProducts.length > 0) {
      setLoading(false);
    }
  }, [allCartProducts]);

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
        {allCartProducts.map((product) => (
          <CartItem key={product.product_id} product={product} />
        ))}
      </div>
      <div className="cart-resume">valor total</div>
    </div>
  );
}

export default Cart;
