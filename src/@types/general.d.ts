type GlobalState = {
  products: ProductItem[];
  product: ProductItem;
  cartItems: CartItem[];
  slider: ProductItem[];
  searchResult: ProductItem[];
  productItemSlider: ProductItem[];
  page: number;
  totalProducts: number;
};

type AdminState = {
  products: ProductItem[];
  product: AddProductItem;
  editProduct: EditProductItem;
};

type CartItem = {
  product: ProductItem;
  quantity: number;
};

type AddProductItem = {
  title: string;
  description: string;
  images: string[];
  brand: string;
  category: string;
  price: number;
  amount: number;
};

type EditProductItem = {
  id: string;
  title: string;
  description: string;
  images: string[];
  brand: string;
  category: string;
  price: number;
  rating: number;
  amount: number;
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

type UserRegister = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

type UserLogin = {
  email: string;
  password: string;
};
