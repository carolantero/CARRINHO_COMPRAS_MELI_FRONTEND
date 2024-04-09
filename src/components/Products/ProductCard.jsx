import React from "react";
import "./ProductCard.css";

function ProductCard({ data }) {
  const { product_id, product_title, product_image, product_price } = data;

  return (
    <div className="product-card" key={product_id}>
      <img src={product_image} alt="product" className="card-image" />
      <div className="card-infos">
        <h2 className="card-title">{product_title}</h2>
        <h2 className="card-price">
          {product_price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
      <button type="button" className="button-add-card">
        <span>Adicionar ao carrinho</span>
      </button>
    </div>
  );
}

export default ProductCard;
