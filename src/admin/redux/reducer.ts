import {
  SAVE_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "./actions";
import { ACTIONS } from "./actionTypes";
import { addProductItemInitial, editProductInitial } from "./initialState";

const defaultState: AdminState = {
  products: [],
  product: addProductItemInitial,
  editProduct: editProductInitial,
};

const adminReducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { ...state, products: action.products };
    case ADD_PRODUCT:
      return { ...state, product: action.product };
    case DELETE_PRODUCT:
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.id
      );
      return { ...state, products: updatedProducts };
    case EDIT_PRODUCT:
      const updatedEditProduct = state.products.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            // You can modify the properties of the product here based on the action payload
            // For example, if you have an action.payload with properties like name and price:
            // name: action.payload.name,
            // price: action.payload.price,
          };
        }
        return product;
      });
      return { ...state, products: updatedEditProduct };

    default:
      return state;
  }
};

export default adminReducer;
