type GlobalState = {
  products: ProductItem[];
  product: ProductItem;
  cartItems: CartItem[];
  slider: ProductItem[];
  productItemSlider: ProductItem[];
  page: number;
  totalProducts: number;
};

// type cartItemsT = ProductItem & {
//   quantity: number;
// };

type CartItem = {
  product: ProductItem;
  quantity: number;
};

type ProductItem = {
  id: string;
  title: string;
  description: string;
  images: string[];
  brand: string;
  category: string;
  price: number;
  rating: string;
  amount: string;
  quantity: number;
};