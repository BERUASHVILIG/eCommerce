import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils/ajax";
import { saveProduct, updateCart } from "../Home/redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

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
          <Button sx={{ float: "right" }} onClick={handleBackHome}>
            Back Home
          </Button>
          <Box sx={{ display: "flex", justifyContent: "flex-start", p: 3 }}>
            {product && (
              <Paper
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
                  style={{
                    width: "400px",
                    marginTop: "10px",
                  }}
                />
              </Paper>
            )}
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <Typography variant="h6">{product?.brand}</Typography>
              <Typography variant="h6">{product?.title}</Typography>
              <Typography>
                {parseFloat(product?.price.toString()).toFixed(2)}₾
              </Typography>
              <Button onClick={handleAddToCart}>Add to cart</Button>
              <Box>
                <Button onClick={() => handleChangeColor("black")}>
                  black
                </Button>
                <Button onClick={() => handleChangeColor("green")}>
                  green
                </Button>
                <Button onClick={() => handleChangeColor("red")}>red</Button>
              </Box>
              <Accordion sx={{ mt: 3, ml: 10 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Description</Typography>
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
                  alt=""
                  onClick={() => handleClickImage(index)}
                  style={{
                    width: "70px",
                    cursor: "pointer",
                    margin: "0 5px",
                  }}
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
