import { GET_ALL_PRODUCTS } from "./../actions/cartActions";

const initialState = {
  allProducts: [""],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
