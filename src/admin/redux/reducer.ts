import { SAVE_PRODUCTS, ADD_PRODUCT } from "./actions";
import { ACTIONS } from "./actionTypes";
import { addProductItemInitial } from "./initialState";

const defaultState: AdminState = {
  products: [],
  product: addProductItemInitial,
};

const adminReducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { ...state, products: action.products };
    case ADD_PRODUCT:
      return { ...state, product: action.product };
    default:
      return state;
  }
};

export default adminReducer;
