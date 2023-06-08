import { SAVE_PRODUCTS_ACTION, ADD_PRODUCT_ACTION } from "./actionTypes";

export const SAVE_PRODUCTS = "SAVE_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const saveProducts = (
  products: ProductItem[]
): SAVE_PRODUCTS_ACTION => ({
  type: SAVE_PRODUCTS,
  products,
});

export const addProduct = (product: AddProductItem): ADD_PRODUCT_ACTION => ({
  type: ADD_PRODUCT,
  product,
});
