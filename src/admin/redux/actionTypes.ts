import {
  SAVE_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "./actions";

export type SAVE_PRODUCTS_ACTION = {
  type: typeof SAVE_PRODUCTS;
  products: ProductItem[];
};

export type ADD_PRODUCT_ACTION = {
  type: typeof ADD_PRODUCT;
  product: AddProductItem;
};

export type DELETE_PRODUCT_ACTION = {
  type: typeof DELETE_PRODUCT;
  product: string;
  id: string;
};

export type EDIT_PRODUCT_ACTION = {
  type: typeof EDIT_PRODUCT;
  product: string;
  id: string;
};

export type ACTIONS =
  | SAVE_PRODUCTS_ACTION
  | ADD_PRODUCT_ACTION
  | DELETE_PRODUCT_ACTION
  | EDIT_PRODUCT_ACTION;
