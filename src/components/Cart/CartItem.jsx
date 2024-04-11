import React, { useEffect } from "react";
import "./CartItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { postCartProducts } from "../../api/apiShoppingCart";
import { useDispatch } from "react-redux";
import { getCartProducts } from "../../api/apiShoppingCart";
import {
  POST_CART_PRODUCTS,
  GET_CART_PRODUCTS,
  ADD_CART_PRODUCTS,
} from "../../actions/cartActions";

function CartItem({ product }) {
  const dispatch = useDispatch();
  const { product_id, product_title, product_image, product_price } = product;
  const getCartProductsItems = useSelector(
    (state) => state.cart.getCartProducts
  );
  const postCartProductsItem = useSelector(
    (state) => state.cart.postCartProducts
  );

  const handleGetCartProducts = () => {
    getCartProducts().then((result) => {
      dispatch({ type: GET_CART_PRODUCTS, payload: result });
    });
  };

  const handleDeleteCartProduct = async () => {
    const updatedItems = getCartProductsItems.filter(
      (item) => item.product_id != product_id
    );

    dispatch({ type: ADD_CART_PRODUCTS, payload: updatedItems });

    const updatedCart = await postCartProducts(updatedItems);
    dispatch({
      type: POST_CART_PRODUCTS,
      payload: updatedCart,
    });
  };

  useEffect(() => {
    handleGetCartProducts();
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
        onClick={() => handleDeleteCartProduct()}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default CartItem;
