import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import "./CartLink.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleGetCartProducts } from "../../utils/handleGetCartProducts";

function CartLink() {
  const dispatch = useDispatch();
  const addCartProducts = useSelector((state) => state.cart.addCartProducts);

  return (
    <div className="cart-link">
      <Link to="/cart" onClick={handleGetCartProducts(dispatch)}>
        <BsCart2 className="cart-link-item" />
        {addCartProducts.length > 0 && (
          <span className="cart-status">{addCartProducts.length}</span>
        )}
      </Link>
    </div>
  );
}

export default CartLink;
