import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { ADD_CART_PRODUCTS } from "../../actions/cartActions";
import { useSelector } from "react-redux";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { product_id, product_title, product_image, product_price } = product;
  const addCartProducts = useSelector((state) => state.cart.addCartProducts);

  const handleAddCar = () => {
    dispatch({
      type: ADD_CART_PRODUCTS,
      payload: [...addCartProducts, product],
    });
  };

  return (
    <div className="product-card">
      <img src={product_image} alt="product image" className="card-image" />
      <div className="card-infos">
        <h2 className="card-title">{product_title}</h2>
        <h2 className="card-price">
          {product_price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
      <button type="button" className="button-add-card" onClick={handleAddCar}>
        <span>Adicionar ao carrinho</span>
      </button>
    </div>
  );
}

export default ProductCard;
