import {
  GET_ALL_PRODUCTS,
  ADD_CART_PRODUCTS,
  GET_CART_PRODUCTS,
} from "./../actions/cartActions";

const initialState = {
  allProducts: [],
  addCartProducts: [],
  getCartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case ADD_CART_PRODUCTS:
      return {
        ...state,
        addCartProducts: action.payload,
      };

    case GET_CART_PRODUCTS:
      return {
        ...state,
        getCartProducts: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
