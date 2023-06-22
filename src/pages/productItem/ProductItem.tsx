import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils/ajax";
import { saveProduct, updateCart } from "../Home/redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import "./ProductItem.css";

import {
  Box,
  Typography,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ProductItemSlider from "../../components/productItemSlider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";

const ProductItem = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product }: GlobalState = useAppSelector((state) => state.homeReducer);

  const handleAddToCart = () => {
    dispatch(updateCart(product, 1)); // Adjust the quantity as needed
  };

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [color, setColor] = useState<string>("");

  const handleChangeColor = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const handleClickImage = (index: number) => {
    setActiveImageIndex(index);
  };

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const { data } = await getSingleProduct(`${id}`);
        dispatch(saveProduct(data));
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <Box>
      <Paper sx={{ mt: 3, p: 2, m: 5 }}>
        <Box key={product?.id}>
          <Button
            sx={{ float: "right", backgroundColor: "#7a1dff", color: "#fff" }}
            onClick={handleBackHome}
          >
            {t("global.goBack")}
          </Button>
          <Box
            className="product-detail"
            sx={{ display: "flex", justifyContent: "flex-start", p: 3 }}
          >
            {product && (
              <Paper
                className="main-image-container"
                elevation={3}
                square
                sx={{
                  backgroundColor: color || "#fff",
                  p: 1,
                }}
              >
                <img
                  src={product.images[activeImageIndex]}
                  alt=""
                  className="product-image"
                />
              </Paper>
            )}
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              {/* <Typography variant="h6">{product?.brand}</Typography> */}
              <Typography variant="h6">
                {product.title.length > 30
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </Typography>
              <Typography>
                {parseFloat(product?.price.toString()).toFixed(2)}₾
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#f1e8ff",
                  color: "#7a1dff",
                  fontWeight: "bold",
                }}
                onClick={handleAddToCart}
              >
                {t("global.addToCart")}
              </Button>
              <Box sx={{ display: "flex", gap: "2px", mt: 1 }}>
                <Button
                  sx={{ backgroundColor: "black", color: "black" }}
                  onClick={() => handleChangeColor("black")}
                >
                  black
                </Button>
                <Button
                  sx={{ backgroundColor: "green", color: "green" }}
                  onClick={() => handleChangeColor("green")}
                >
                  green
                </Button>
                <Button
                  sx={{ backgroundColor: "red", color: "red" }}
                  onClick={() => handleChangeColor("red")}
                >
                  red
                </Button>
              </Box>
              <Accordion sx={{ mt: 3, ml: 10 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{t("global.description")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: "12px" }}>
                    {product?.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}
          >
            {product?.images.slice(0, 4).map((img, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 2,
                  border: activeImageIndex === index ? "2px solid" : "none",
                }}
              >
                <img
                  src={img}
                  alt="img"
                  onClick={() => handleClickImage(index)}
                  className="container-images"
                />
              </Paper>
            ))}
          </Box>
          {/* <Typography>Description: {product?.description}</Typography> */}
        </Box>
      </Paper>
      <ProductItemSlider title={product.title} />
    </Box>
  );
};

export default ProductItem;
