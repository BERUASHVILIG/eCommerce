import { SAVE_PRODUCTS, ADD_PRODUCT } from "./actions";

export type SAVE_PRODUCTS_ACTION = {
  type: typeof SAVE_PRODUCTS;
  products: ProductItem[];
};

export type ADD_PRODUCT_ACTION = {
  type: typeof ADD_PRODUCT;
  product: AddProductItem;
};

export type ACTIONS = SAVE_PRODUCTS_ACTION | ADD_PRODUCT_ACTION;
