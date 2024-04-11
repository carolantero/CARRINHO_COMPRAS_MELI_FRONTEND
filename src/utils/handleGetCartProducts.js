import React from "react";
import { GET_CART_PRODUCTS } from "../actions/cartActions";
import { getCartProducts } from "../api/apiShoppingCart";

export const handleGetCartProducts = (dispatch) => {
  getCartProducts().then((result) => {
    dispatch({ type: GET_CART_PRODUCTS, payload: result });
  });
};
