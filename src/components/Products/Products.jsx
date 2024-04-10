import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import { getAllProducts, postCartProducts } from "../../api/apiShoppingCart";
import GradientCircularProgress from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { GET_ALL_PRODUCTS } from "../../actions/cartActions";
import { useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.cart.allProducts);
  const addCartProducts = useSelector((state) => state.cart.addCartProducts);

  const handleGetProducts = () => {
    getAllProducts().then((result) => {
      dispatch({ type: GET_ALL_PRODUCTS, payload: result });
    });
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  useEffect(() => {
    if (addCartProducts.length > 0) {
      postCartProducts(addCartProducts);
    }
  }, [addCartProducts]);

  return loading ? (
    <div className="products-loading">
      <GradientCircularProgress />
    </div>
  ) : (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
}

export default Products;
