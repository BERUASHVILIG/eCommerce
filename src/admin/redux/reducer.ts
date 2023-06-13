// import {
//   SAVE_PRODUCTS,
//   ADD_PRODUCT,
//   DELETE_PRODUCT,
//   EDIT_PRODUCT,
// } from "./actions";
// import { ACTIONS } from "./actionTypes";
// import { addProductItemInitial, editProductInitial } from "./initialState";

// const defaultState: AdminState = {
//   products: [],
//   product: addProductItemInitial,
//   editProduct: editProductInitial,
// };

// const adminReducer = (state = defaultState, action: ACTIONS) => {
//   switch (action.type) {
//     case SAVE_PRODUCTS:
//       return { ...state, products: action.adminProducts };
//     case ADD_PRODUCT:
//       return { ...state, product: action.product };
//     case DELETE_PRODUCT:
//       const updatedProducts = state.products.filter(
//         (products) => products.id !== action.id
//       );
//       return { ...state, products: updatedProducts };
//     case EDIT_PRODUCT:
//       const updatedProduct = state.products.map((product) => {
//         if (product.id === action.productId) {
//           return {
//             ...product,
//             ...action.updatedProduct, // Update the product with the new data
//           };
//         }
//         return product;
//       });
//       return { ...state, products: updatedProduct };

//     default:
//       return state;
//   }
// };

// export default adminReducer;
