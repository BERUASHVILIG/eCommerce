import axios from "axios";

console.log(import.meta.env);

export const loadAllProducts = axios.create({
  baseURL: import.meta.env.VITE_API || "http://localhost:8080",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllProducts = (page: number, searchQuery: string) =>
  loadAllProducts.post("/products", {
    keyword: searchQuery,
    page_size: 10,
    page_number: page,
  });

export const loadBrandProducts = (brand: string, category: string) =>
  loadAllProducts.post("/products", {
    keyword: `${brand} ${category}`,
    page_size: 16,
    page_number: 1,
  });

export const loadSliderProducts = () =>
  loadAllProducts.post("/products", {
    keyword: "",
    page_size: 10,
    page_number: 0,
  });

export const loadProductItemSlider = (title: string) =>
  loadAllProducts.post("/products", {
    keyword: title,
    page_size: 10,
    page_number: 1,
  });

export const loadSearchResult = (value: string) =>
  loadAllProducts.post("/products", {
    keyword: value,
    page_size: 5,
    page_number: 0,
  });

export const getAllBrands = () => loadAllProducts.get("/brands");

export const sentAddedProduct = () =>
  loadAllProducts.post("/product", {
    title: "",
    description: "",
    images: [],
    brand: "",
    category: "",
    price: "",
  });

export const getSingleProduct = (id: string) =>
  loadAllProducts.get(`/product/${id}`);
