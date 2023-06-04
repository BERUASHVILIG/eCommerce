import {
  SAVE_PRODUCTS,
  SAVE_PRODUCT,
  UPDATE_CART,
  SET_PAGE,
  SET_TOTAL_PRODUCTS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SAVE_SLIDER_PRODUCTS,
  SAVE_PRODUCTITEM_SLIDER,
} from "./actions";

export type SAVE_PRODUCTS_ACTION = {
  type: typeof SAVE_PRODUCTS;
  products: ProductItem[];
};

export type SAVE_SLIDER_PRODUCTS_ACTION = {
  type: typeof SAVE_SLIDER_PRODUCTS;
  slider: ProductItem[];
};

export type SAVE_PRODUCTITEM_SLIDER_ACTION = {
  type: typeof SAVE_PRODUCTITEM_SLIDER;
  productItemSlider: ProductItem[];
};

export type SAVE_PRODUCT_ACTION = {
  type: typeof SAVE_PRODUCT;
  product: ProductItem;
};

export type UPDATE_CART_ACTION = {
  type: typeof UPDATE_CART;
  product: ProductItem;
  quantity: number;
};

export type INCREASE_QUANTITY_ACTION = {
  type: typeof INCREASE_QUANTITY;
  product: CartItem;
};

export type DECREASE_QUANTITY_ACTION = {
  type: typeof DECREASE_QUANTITY;
  product: CartItem;
};

export type SET_PAGE_ACTION = {
  type: typeof SET_PAGE;
  page: number;
};

export type SET_TOTAL_PRODUCTS_ACTION = {
  type: typeof SET_TOTAL_PRODUCTS;
  totalProducts: number;
};

export type ACTIONS =
  | SAVE_PRODUCTS_ACTION
  | SAVE_PRODUCT_ACTION
  | UPDATE_CART_ACTION
  | SET_PAGE_ACTION
  | SET_TOTAL_PRODUCTS_ACTION
  | INCREASE_QUANTITY_ACTION
  | DECREASE_QUANTITY_ACTION
  | SAVE_SLIDER_PRODUCTS_ACTION
  | SAVE_PRODUCTITEM_SLIDER_ACTION;
