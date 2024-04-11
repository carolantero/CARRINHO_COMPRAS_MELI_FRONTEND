import React, { useEffect } from "react";
import "./CartItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleGetCartProducts } from "../../utils/handleGetCartProducts";
import { handleDeleteCartProduct } from "../../utils/handleDeleteCartProduct";

function CartItem({ product }) {
  const dispatch = useDispatch();
  const { product_id, product_title, product_image, product_price } = product;
  const getCartProductsItems = useSelector(
    (state) => state.cart.getCartProducts
  );
  const postCartProductsItem = useSelector(
    (state) => state.cart.postCartProducts
  );

  useEffect(() => {
    handleGetCartProducts(dispatch);
  }, [postCartProductsItem]);

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <img
          src={product_image}
          alt="product image"
          className="cart-item-image"
        />
        <div>
          <h3 className="cart-item-title">{product_title}</h3>
          <h3 className="cart-item-price">
            {product_price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </div>
      </div>

      <button
        className="button-item-remove"
        type="button"
        onClick={() =>
          handleDeleteCartProduct(product_id, dispatch, getCartProductsItems)
        }
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default CartItem;
