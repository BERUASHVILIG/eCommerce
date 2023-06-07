import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { useAppDispatch } from "../../redux/hooks";
import { updateCart } from "../../pages/Home/redux/actions";

const ProductCard = ({ product }: { product: ProductItem }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(updateCart(product, 1)); // Adjust the quantity as needed
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "white",
          height: "400px",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            width: "200px",
            // border: "3px solid",
            gap: "10px",
          }}
        >
          <Swiper slidesPerView={1} navigation>
            {product.images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  style={{
                    width: "157px",
                    height: "157px",
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                  src={image}
                  alt={`Product Image ${i + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box>
          <Typography sx={{ height: "60px" }}>
            <Link className="title" to={`/productdetail/${product.id}`}>
              {/* {product.title.slice(0, 30)} */}
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
    </Box>
  );
};

export default ProductCard;
