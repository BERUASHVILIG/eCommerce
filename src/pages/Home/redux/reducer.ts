import { ACTIONS } from "./actionTypes";
import {
  SAVE_PRODUCTS,
  SAVE_PRODUCT,
  UPDATE_CART,
  SET_PAGE, // Import new action
  SET_TOTAL_PRODUCTS, // Import new action
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SAVE_SLIDER_PRODUCTS,
  SAVE_PRODUCTITEM_SLIDER,
  SAVE_SEARCH_RESULT,
  SAVE_BRANDS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  SAVE_BRAND_PRODUCTS,
} from "./actions";
import { productInitalState } from "../redux/initialState";
import {
  addProductItemInitial,
  editProductInitial,
} from "../../../admin/redux/initialState";

const defaultState: GlobalState = {
  products: [],
  editProduct: editProductInitial,
  addedProduct: addProductItemInitial,
  cartItems: [],
  slider: [],
  productItemSlider: [],
  searchResult: [],
  product: productInitalState,
  page: 1, // Add the page state property
  totalProducts: 0, // Add the totalProducts state property
  brands: [],
  brandProducts: [],
};

const homeReducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    // case SAVE_PRODUCTS:
    // return { ...state, products: action.products };
    case SAVE_PRODUCTS:
      const existingIds = state.products.map((product) => product.id);
      const newProducts = action.products.filter(
        (product) => !existingIds.includes(product.id)
      );
      return { ...state, products: [...state.products, ...newProducts] };

    // return { ...state, products: [...state.products, ...action.products] };
    case SAVE_SLIDER_PRODUCTS:
      return { ...state, slider: action.slider };
    case SAVE_PRODUCTITEM_SLIDER:
      return { ...state, productItemSlider: action.productItemSlider };
    case SAVE_BRAND_PRODUCTS:
      return { ...state, brandProducts: action.brandProducts };
    case SAVE_SEARCH_RESULT:
      return { ...state, searchResult: action.searchResult };
    case SAVE_PRODUCT:
      return { ...state, product: action.product };
    case SET_PAGE: // Handle the new action
      return { ...state, page: action.page };
    case SET_TOTAL_PRODUCTS: // Handle the new action
      return { ...state, totalProducts: action.totalProducts };
    case UPDATE_CART:
      const updatedProduct = action.product;
      const updatedCart = state.cartItems.map((item) => {
        if (item.product.id === updatedProduct.id) {
          return { ...item, quantity: item.quantity + action.quantity };
        }
        return item;
      });
      // If the product is not already in the cart, add it as a new item
      if (!updatedCart.some((item) => item.product.id === updatedProduct.id)) {
        updatedCart.push({
          product: updatedProduct,
          quantity: action.quantity,
        });
      }
      return { ...state, cartItems: updatedCart };
    case INCREASE_QUANTITY:
      const increaseQuantity = {
        product: action.product,
        quantity: 1,
      };
      const newCartItems = state.cartItems.map((item) => {
        if (item.product.id === increaseQuantity.product.product.id) {
          return {
            ...item,
            quantity: item.quantity + increaseQuantity.quantity,
          };
        }
        return item;
      });
      return { ...state, cartItems: newCartItems };
    case DECREASE_QUANTITY:
      const decreaseQuantity = {
        product: action.product,
        quantity: 1,
      };
      const itemsAfterDecreasing = state.cartItems.map((item) => {
        if (item.product.id === decreaseQuantity.product.product.id) {
          const newQuantity = item.quantity - decreaseQuantity.quantity;
          if (newQuantity <= 0) {
            // Remove the item from the cart if the quantity becomes zero or negative
            return null;
          } else {
            return {
              ...item,
              quantity: newQuantity,
            };
          }
        }
        return item;
      });
      const newcart = itemsAfterDecreasing.filter(Boolean); // Remove null values
      return { ...state, cartItems: newcart };
    case SAVE_BRANDS:
      return { ...state, brands: action.brands };

    case ADD_PRODUCT:
      return { ...state, product: action.addedProduct };
    case DELETE_PRODUCT:
      const updatedProducts = state.products.filter(
        (products) => products.id !== action.id
      );
      return { ...state, products: updatedProducts };
    case EDIT_PRODUCT:
      const editProduct = state.products.map((product) => {
        if (product.id === action.productId) {
          return {
            ...product,
            ...action.updatedProduct, // Update the product with the new data
          };
        }
        return product;
      });
      return { ...state, products: editProduct };
    default:
      return state;
  }
};

export default homeReducer;
