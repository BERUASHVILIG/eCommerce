import React, { useEffect } from "react";
import { saveProducts, setPage, setTotalProducts } from "./redux/actions";
import { getAllProducts } from "../../utils/ajax";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ProductCard from "../../components/productCard";
import { Box } from "@mui/material";
import BreadCrumbs from "../../components/breadCrumbs";
import Slider from "../../components/slider";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, page, totalProducts }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts(page);
        console.log({ data });
        dispatch(saveProducts([...products, ...data.products]));
        dispatch(setTotalProducts(data.total_found));
        console.log("empty", setTotalProducts(data.total_found));
        console.log("data", data);
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchProducts();
  }, [page]);

  const handleLoadMore = () => {
    if (products.length < totalProducts) {
      dispatch(setPage(page + 10));
    }
  };

  return (
    <Box>
      <Slider />
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          gap: "30px",
          width: "80%",
          gridTemplateColumns: "repeat(5,250px)",
        }}
      >
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
        {products.length < totalProducts && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </Box>
    </Box>
  );
};

export default Home;
