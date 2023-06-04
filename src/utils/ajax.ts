import axios from "axios";

console.log(import.meta.env);

export const loadAllProducts = axios.create({
  baseURL: import.meta.env.VITE_API || "http://localhost:8080",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllProducts = (page: number) =>
  loadAllProducts.post("/products", {
    keyword: "",
    page_size: 10,
    page_number: page,
  });

export const loadSliderProducts = () =>
  loadAllProducts.post("/products", {
    keyword: "nokia",
    page_size: 10,
    page_number: 0,
  });

export const loadProductItemSlider = (brand: string) =>
  loadAllProducts.post("/products", {
    keyword: brand,
    page_size: 15,
    page_number: 1,
  });

export const getSingleProduct = (id: string) =>
  loadAllProducts.get(`/product/${id}`);
