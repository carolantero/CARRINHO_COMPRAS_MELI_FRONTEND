import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import getAllProducts from "../../api/apiShoppingCart";
import GradientCircularProgress from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { GET_ALL_PRODUCTS } from "../../actions/cartActions";
import { useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const allProducts = useSelector((state) => state.cart.allProducts);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      dispatch({ type: GET_ALL_PRODUCTS, payload: products });
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
