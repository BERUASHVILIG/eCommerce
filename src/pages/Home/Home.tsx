import React, { useEffect } from "react";
import { saveProducts, setPage, setTotalProducts } from "./redux/actions";
import { getAllProducts } from "../../utils/ajax";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ProductCard from "../../components/productCard";
import { Box, Button, Typography } from "@mui/material";
import BreadCrumbs from "../../components/breadCrumbs";
import Sliderr from "../../components/slider";

import "./Home.scss";
import BrandCarousel from "../../components/brandCarousel";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, page, totalProducts }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts(page);
        dispatch(saveProducts(data.products));
        dispatch(setTotalProducts(data.total_found));
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchProducts();
  }, [page]);

  const handleLoadMore = async () => {
    if (products.length < totalProducts) {
      const newPage = page + 10;
      try {
        const { data } = await getAllProducts(newPage);
        dispatch(saveProducts(data.products));
        dispatch(setTotalProducts(data.total_found));
        dispatch(setPage(newPage));
      } catch (error) {
        console.log("err", error);
      }
    }
  };

  return (
    <Box>
      <Sliderr />
      <Typography>Hot Offers</Typography>
      <Box className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
        {products.length < totalProducts && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
      </Box>
      <BrandCarousel />
    </Box>
  );
};

export default Home;
