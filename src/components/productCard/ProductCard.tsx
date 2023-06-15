import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { updateCart } from "../../pages/Home/redux/actions";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import "./ProductCard.scss";

const ProductCard = ({ product }: { product: ProductItem }) => {
  const dispatch = useAppDispatch();
  const [productImage, setProductImage] = useState(0);

  const handleAddToCart = () => {
    dispatch(updateCart(product, 1)); // Adjust the quantity as needed
  };

  const nextImage = (prop: any) => {
    const { className } = prop;
    setProductImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (prop: any) => {
    const { className } = prop;
    setProductImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <Box className="product-container">
      <Box className="product-images">
        <ArrowLeft className="arrow" onClick={prevImage} />
        <img
          className="product-image"
          style={{ width: "157px", height: "157px" }}
          src={product.images[productImage]}
          alt={product.title}
        />
        <ArrowRight className="arrow" onClick={nextImage} />
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
          Add to Cart{" "}
          <span style={{ marginLeft: "5px" }}>
            <ShoppingCartOutlinedIcon />
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
