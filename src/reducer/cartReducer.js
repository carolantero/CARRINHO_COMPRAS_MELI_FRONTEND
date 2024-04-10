import { GET_ALL_PRODUCTS, CART_PRODUCTS } from "./../actions/cartActions";

const initialState = {
  allProducts: [],
  allCartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case CART_PRODUCTS:
      return {
        ...state,
        allCartProducts: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
