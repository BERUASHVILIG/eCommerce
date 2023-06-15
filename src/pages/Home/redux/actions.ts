// import { Exception } from "sass";
import ProductItem from "../../productItem";
import {
  ACTIONS,
  SAVE_PRODUCTS_ACTION,
  SAVE_PRODUCT_ACTION,
  UPDATE_CART_ACTION,
  SET_PAGE_ACTION, // New action
  SET_TOTAL_PRODUCTS_ACTION, // New action
  INCREASE_QUANTITY_ACTION,
  DECREASE_QUANTITY_ACTION,
  SAVE_SLIDER_PRODUCTS_ACTION,
  SAVE_PRODUCTITEM_SLIDER_ACTION,
  SAVE_SEARCH_RESULT_ACTION,
  SAVE_BRANDS_ACTION,
  ADD_PRODUCT_ACTION,
  DELETE_PRODUCT_ACTION,
  EDIT_PRODUCT_ACTION,
  SAVE_BRAND_PRODUCTS_ACTION,
} from "../redux/actionTypes";

export const SAVE_PRODUCTS = "SAVE_PRODUCTS";
export const SAVE_PRODUCT = "SAVE_PRODUCT";
export const UPDATE_CART = "UPDATE_CART";
export const SET_PAGE = "SET_PAGE"; // New action
export const SET_TOTAL_PRODUCTS = "SET_TOTAL_PRODUCTS"; // New action
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const SAVE_SLIDER_PRODUCTS = "SAVE_SLIDER_PRODUCTS";
export const SAVE_PRODUCTITEM_SLIDER = "SAVE_PRODUCTITEM_SLIDER";
export const SAVE_SEARCH_RESULT = "SEARCH_RESULT";
export const SAVE_BRANDS = "SAVE_BRANDS";
export const SAVE_BRAND_PRODUCTS = "SAVE_BRAND_PRODUCTS";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const saveProducts = (
  products: ProductItem[]
): SAVE_PRODUCTS_ACTION => ({
  type: SAVE_PRODUCTS,
  products,
});

export const saveSliderProducts = (
  slider: ProductItem[]
): SAVE_SLIDER_PRODUCTS_ACTION => ({
  type: SAVE_SLIDER_PRODUCTS,
  slider,
});

export const saveProductItemSlider = (
  productItemSlider: ProductItem[]
): SAVE_PRODUCTITEM_SLIDER_ACTION => ({
  type: SAVE_PRODUCTITEM_SLIDER,
  productItemSlider,
});

export const saveBrandProducts = (
  brandProducts: ProductItem[]
): SAVE_BRAND_PRODUCTS_ACTION => ({
  type: SAVE_BRAND_PRODUCTS,
  brandProducts,
});

export const saveSearchResult = (
  searchResult: ProductItem[]
): SAVE_SEARCH_RESULT_ACTION => ({
  type: SAVE_SEARCH_RESULT,
  searchResult,
});

export const saveProduct = (product: ProductItem): SAVE_PRODUCT_ACTION => ({
  type: SAVE_PRODUCT,
  product,
});

export const updateCart = (
  product: ProductItem,
  quantity: number
): UPDATE_CART_ACTION => ({
  type: UPDATE_CART,
  product,
  quantity,
});

export const increaseQuantity = (
  product: CartItem
): INCREASE_QUANTITY_ACTION => {
  return {
    type: INCREASE_QUANTITY,
    product,
  };
};

export const decreaseQuantity = (
  product: CartItem
): DECREASE_QUANTITY_ACTION => ({
  type: DECREASE_QUANTITY,
  product,
});

export const setPage = (page: number): SET_PAGE_ACTION => ({
  type: SET_PAGE,
  page,
});

export const setTotalProducts = (
  totalProducts: number
): SET_TOTAL_PRODUCTS_ACTION => ({
  type: SET_TOTAL_PRODUCTS,
  totalProducts,
});

export const saveBrands = (brands: string[]): SAVE_BRANDS_ACTION => ({
  type: SAVE_BRANDS,
  brands,
});

export const addProduct = (
  addedProduct: AddProductItem
): ADD_PRODUCT_ACTION => ({
  type: ADD_PRODUCT,
  addedProduct,
});

export const deleteProduct = (
  product: string,
  id: string
): DELETE_PRODUCT_ACTION => ({
  type: DELETE_PRODUCT,
  product,
  id,
});

export const editProduct = (
  productId: string,
  updatedProduct: ProductItem
): EDIT_PRODUCT_ACTION => ({
  type: EDIT_PRODUCT,
  productId,
  updatedProduct,
});
