import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { updateCart } from "../../pages/Home/redux/actions";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// styling

import {
  ProductContainer,
  AddCartButton,
  SliderArrowLeft,
  SliderArrowRight,
  ProductTitle,
} from "./ProductCart.Styles";

const ProductCard = ({ product }: { product: ProductItem }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [productImage, setProductImage] = useState(0);

  const handleAddToCart = () => {
    dispatch(updateCart(product, 1));
  };

  const handleOpenDetail = () => {
    navigate(`/productdetail/${product.id}`);
  };

  const nextImage = () => {
    if (product.images && product.images.length > 0) {
      setProductImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product.images && product.images.length > 0) {
      setProductImage(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  return (
    <ProductContainer>
      <SliderArrowLeft className="arrow" onClick={prevImage} />
      <SliderArrowRight className="arrow" onClick={nextImage} />
      <Box onClick={handleOpenDetail}>
        <img
          style={{
            width: "157px",
            height: "157px",
            display: "flex",
            margin: "auto",
          }}
          src={product.images[productImage]}
          alt={product.title}
        />
      </Box>
      <Box>
        <ProductTitle onClick={handleOpenDetail} sx={{ height: "60px" }}>
          {product.title.length > 30
            ? product.title.slice(0, 40) + "..."
            : product.title}
        </ProductTitle>
        <Typography
          sx={{
            color: "#7a1dff",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {parseFloat(product.price.toString()).toFixed(2)}₾
        </Typography>
        <AddCartButton onClick={handleAddToCart}>
          {t("global.addToCart")}
          <Typography style={{ marginLeft: "5px" }}>
            <ShoppingCartOutlinedIcon />
          </Typography>
        </AddCartButton>
      </Box>
    </ProductContainer>
  );
};

export default ProductCard;
