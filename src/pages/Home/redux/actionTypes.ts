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
  SAVE_SEARCH_RESULT,
  SAVE_BRANDS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  SAVE_BRAND_PRODUCTS,
  UPDATE_PRODUCT,
} from "./actions";

export type SAVE_PRODUCTS_ACTION = {
  type: typeof SAVE_PRODUCTS;
  products: ProductItem[];
};

export type SAVE_SLIDER_PRODUCTS_ACTION = {
  type: typeof SAVE_SLIDER_PRODUCTS;
  slider: ProductItem[];
};

export type SAVE_BRAND_PRODUCTS_ACTION = {
  type: typeof SAVE_BRAND_PRODUCTS;
  brandProducts: ProductItem[];
};

export type SAVE_PRODUCTITEM_SLIDER_ACTION = {
  type: typeof SAVE_PRODUCTITEM_SLIDER;
  productItemSlider: ProductItem[];
};

export type SAVE_SEARCH_RESULT_ACTION = {
  type: typeof SAVE_SEARCH_RESULT;
  searchResult: ProductItem[];
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

export type SAVE_BRANDS_ACTION = {
  type: typeof SAVE_BRANDS;
  brands: string[];
};

export type ADD_PRODUCT_ACTION = {
  type: typeof ADD_PRODUCT;
  addedProduct: AddProductItem;
};

export type DELETE_PRODUCT_ACTION = {
  type: typeof DELETE_PRODUCT;
  product: string;
  id: string;
};

export type EDIT_PRODUCT_ACTION = {
  type: typeof EDIT_PRODUCT;
  productId: string;
  updatedProduct: ProductItem;
};

export type UPDATE_PRODUCT_ACTION = {
  type: typeof UPDATE_PRODUCT;
  updatedProduct: EditProductItem;
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
  | SAVE_PRODUCTITEM_SLIDER_ACTION
  | SAVE_SEARCH_RESULT_ACTION
  | SAVE_BRANDS_ACTION
  | ADD_PRODUCT_ACTION
  | DELETE_PRODUCT_ACTION
  | EDIT_PRODUCT_ACTION
  | SAVE_BRAND_PRODUCTS_ACTION
  | UPDATE_PRODUCT_ACTION;
