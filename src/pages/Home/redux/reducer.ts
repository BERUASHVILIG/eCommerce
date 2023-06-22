import { ACTIONS } from "./actionTypes";
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
import { productInitalState } from "../redux/initialState";
import {
  addProductItemInitial,
  editProductInitial,
} from "../../../admin/initialStateAdmin";

const storedProducts = localStorage.getItem("products");
const initialProducts = storedProducts ? JSON.parse(storedProducts) : [];

const defaultState: GlobalState = {
  products: initialProducts,
  editProduct: editProductInitial,
  addedProduct: addProductItemInitial,
  cartItems: [],
  slider: [],
  productItemSlider: [],
  searchResult: [],
  product: productInitalState,
  page: 1,
  totalProducts: 0,
  brands: [],
  brandProducts: [],
  keyword: "",
};

const homeReducer = (state = defaultState, action: ACTIONS) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      const existingIds = state.products.map((product) => product.id);
      const newProducts = action.products.filter(
        (product) => !existingIds.includes(product.id)
      );
      const updatedProducts = [...state.products, ...newProducts];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { ...state, products: updatedProducts };
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
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_TOTAL_PRODUCTS:
      return { ...state, totalProducts: action.totalProducts };
    case UPDATE_CART:
      const updatedProduct = action.product;
      const updatedCart = state.cartItems.map((item) => {
        if (item.product.id === updatedProduct.id) {
          return { ...item, quantity: item.quantity + action.quantity };
        }
        return item;
      });

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
      const newCart = itemsAfterDecreasing.filter(Boolean);
      return { ...state, cartItems: newCart };
    case SAVE_BRANDS:
      return { ...state, brands: action.brands };
    case ADD_PRODUCT:
      return { ...state, product: action.addedProduct };
    case DELETE_PRODUCT:
      const updatedProductsss = state.products.filter(
        (product) => product.id !== action.id
      );
      localStorage.setItem("products", JSON.stringify(updatedProductsss));
      return { ...state, products: updatedProductsss };
    case EDIT_PRODUCT:
      const updatedProductss = state.products.map((product) => {
        if (product.id === action.productId) {
          return {
            ...product,
            ...action.updatedProduct,
          };
        }
        return product;
      });

      const updatedSlider = state.slider.map((sliderItem) => {
        if (sliderItem.id === action.productId) {
          return {
            ...sliderItem,
            product: {
              ...sliderItem,
              ...action.updatedProduct,
            },
          };
        }
        return sliderItem;
      });

      const updatedProductItemSlider = state.productItemSlider.map(
        (productItem) => {
          if (productItem.id === action.productId) {
            return {
              ...productItem,
              ...action.updatedProduct,
            };
          }
          return productItem;
        }
      );

      const updatedBrandProducts = state.brandProducts.map((brandProduct) => {
        if (brandProduct.id === action.productId) {
          return {
            ...brandProduct,
            ...action.updatedProduct,
          };
        }
        return brandProduct;
      });

      localStorage.setItem("products", JSON.stringify(updatedProductss));

      return {
        ...state,
        products: updatedProductss,
        slider: updatedSlider,
        productItemSlider: updatedProductItemSlider,
        brandProducts: updatedBrandProducts,
      };

    case UPDATE_PRODUCT:
      const updatedProductAction = action.updatedProduct;
      const updatedProductsState = state.products.map((product) => {
        if (product.id === updatedProductAction.id) {
          return {
            ...product,
            ...updatedProductAction,
          };
        }
        return product;
      });

      const updatedBrandProductsAction = state.brandProducts.map(
        (brandProduct) => {
          if (brandProduct.id === updatedProductAction.id) {
            return {
              ...brandProduct,
              ...updatedProductAction,
            };
          }
          return brandProduct;
        }
      );

      const updatedSliderr = state.slider.map((sliderItem) => {
        if (sliderItem.id === updatedProductAction.id) {
          return {
            ...sliderItem,
            product: {
              ...sliderItem,
              ...updatedProductAction,
            },
          };
        }
        return sliderItem;
      });

      const updatedProductItemSliderr = state.productItemSlider.map(
        (productItem) => {
          if (productItem.id === updatedProductAction.id) {
            return {
              ...productItem,
              ...updatedProductAction,
            };
          }
          return productItem;
        }
      );

      localStorage.setItem("products", JSON.stringify(updatedProductsState));

      return {
        ...state,
        products: updatedProductsState,
        brandProducts: updatedBrandProductsAction,
        slider: updatedSliderr,
        productItemSlider: updatedProductItemSliderr,
      };

    default:
      return state;
  }
};

// window.addEventListener("beforeunload", () => {
//   localStorage.removeItem("products");
// });

export default homeReducer;
