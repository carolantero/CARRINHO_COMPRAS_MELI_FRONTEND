import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import getAllProducts from "../../api/apiShoppingCart";
import GradientCircularProgress from "../Loading/Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return loading ? (
    <div className="products-loading">
      <GradientCircularProgress />
    </div>
  ) : (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.product_id} data={product} />
      ))}
    </div>
  );
}

export default Products;
