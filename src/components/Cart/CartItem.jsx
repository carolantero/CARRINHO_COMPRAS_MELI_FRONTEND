import React from "react";
import "./CartItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItem({ data }) {
  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <img src="" alt="imagem do produto" className="cart-item-image" />
        <div>
          <h3 className="cart-item-title">Titulo</h3>
          <h3 className="cart-item-price">310</h3>
        </div>
      </div>
      <button className="button-item-remove" type="button">
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default CartItem;
