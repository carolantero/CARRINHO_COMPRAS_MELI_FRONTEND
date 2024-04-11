import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import GradientCircularProgress from "../Loading/Loading";
import { useSelector } from "react-redux";

function Cart() {
  const [loading, setLoading] = useState(true);
  const getCartProducts = useSelector((state) => state.cart.getCartProducts);
  const totalPrice = getCartProducts.reduce(
    (acc, item) => item.product_price + acc,
    0
  );

  useEffect(() => {
    if (getCartProducts.length > 0) {
      setLoading(false);
    }
  }, [getCartProducts]);

  return loading ? (
    <div className="cart">
      <div className="cart-items">
        <h2>Carrinho</h2>
      </div>
      <div className="cart-resume">
        <h3>Valor Total</h3>
        <span>
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  ) : (
    <div className="cart">
      <div className="cart-items">
        <h2>Carrinho</h2>
        {getCartProducts.map((product) => (
          <CartItem key={product.product_id} product={product} />
        ))}
      </div>
      <div className="cart-resume">
        <h3>Valor Total</h3>
        <span>
          {totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
}

export default Cart;
