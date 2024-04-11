import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { getCartProducts } from "../../api/apiShoppingCart";
import "./CartLink.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GET_CART_PRODUCTS } from "../../actions/cartActions";

function CartLink() {
  const dispatch = useDispatch();
  const addCartProducts = useSelector((state) => state.cart.addCartProducts);

  const handleGetCartProducts = () => {
    getCartProducts().then((result) => {
      dispatch({ type: GET_CART_PRODUCTS, payload: result });
    });
  };

  return (
    <div className="cart-link">
      <Link to="/cart" onClick={handleGetCartProducts}>
        <BsCart2 className="cart-link-item" />
        {addCartProducts.length > 0 && (
          <span className="cart-status">{addCartProducts.length}</span>
        )}
      </Link>
    </div>
  );
}

export default CartLink;
