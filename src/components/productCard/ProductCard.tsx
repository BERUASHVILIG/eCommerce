import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./ProductCard.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useAppDispatch } from "../../redux/hooks";
import { updateCart } from "../../pages/Home/redux/actions";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ProductCard = ({ product }: { product: ProductItem }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(updateCart(product, 1)); // Adjust the quantity as needed
  };

  const PreviousBtn = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos
          sx={{ position: "absolute", left: "50" }}
          className="arrow-backk"
        />
      </div>
    );
  };

  const NextBtn = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos className="arrow-nextt" />
      </div>
    );
  };

  return (
    <Box className="product-container">
      <Box>
        <Slider
          // autoplay
          // autoplaySpeed={3000}
          // dots
          initialSlide={0}
          // infinite
          // prevArrow={<PreviousBtn />}
          // nextArrow={<NextBtn />}
        >
          {product.images.map((image, index) => (
            <Box key={index}>
              <img
                style={{
                  width: "157px",
                  height: "157px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
                src={image}
                alt={`Product Image ${index + 1}`}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box>
        <Typography sx={{ height: "60px" }}>
          <Link className="title" to={`/productdetail/${product.id}`}>
            {product.title.length > 30
              ? product.title.slice(0, 40) + "..."
              : product.title}
          </Link>
        </Typography>
        <Typography
          sx={{
            color: "#ff5000",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {parseFloat(product.price.toString()).toFixed(2)}₾
        </Typography>
        <Button sx={{ cursor: "pointer", mt: 3 }} onClick={handleAddToCart}>
          add cart{" "}
          <span style={{ marginLeft: "5px" }}>
            <ShoppingCartOutlinedIcon />
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
