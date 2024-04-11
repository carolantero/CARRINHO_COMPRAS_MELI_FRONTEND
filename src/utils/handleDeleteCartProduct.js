import { ADD_CART_PRODUCTS, POST_CART_PRODUCTS } from "../actions/cartActions";
import { postCartProducts } from "../api/apiShoppingCart";

export const handleDeleteCartProduct = async (
  product_id,
  dispatch,
  getCartProductsItems
) => {
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
