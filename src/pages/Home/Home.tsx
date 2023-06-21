import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveProducts, setPage, setTotalProducts } from "./redux/actions";
import { getFinalProject } from "../../utils/services/checkout";
import { getAllProducts } from "../../utils/ajax";

import ProductCard from "../../components/productCard";
import BrandCarousel from "../../components/brandCarousel";
import Sliderr from "../../components/slider";

import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

import {
  ProductsContainer,
  ProductsContainerTitle,
  LoadMoreButton,
  LoadMoreButtonWrapper,
} from "./Home.Styles";

const Home = () => {
  const { products, page, totalProducts }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts(page, "");
        dispatch(saveProducts(data.products));
        dispatch(setTotalProducts(data.total_found));
      } catch (error) {
        console.log("err", error);
      }
    };
    getFinalProject();
    fetchProducts();
  }, [page]);

  const handleLoadMore = async () => {
    if (products.length < totalProducts) {
      const newPage = page + 10;
      try {
        const { data } = await getAllProducts(newPage, "");
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
      <ProductsContainerTitle>{t("global.hotOffers")}</ProductsContainerTitle>
      <ProductsContainer>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ProductsContainer>
      <LoadMoreButtonWrapper>
        {products.length < totalProducts && (
          <LoadMoreButton onClick={handleLoadMore}>
            Show More
            <Typography sx={{ display: "block" }}>
              <KeyboardArrowDownSharpIcon />
            </Typography>
          </LoadMoreButton>
        )}
      </LoadMoreButtonWrapper>
      {/* </ProductsContainer> */}
      <BrandCarousel />
    </Box>
  );
};

export default Home;
