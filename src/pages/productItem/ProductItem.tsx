import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils/ajax";
import { saveProduct } from "../Home/redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Box, Typography, Paper, Button } from "@mui/material";
import ProductItemSlider from "../../components/productItemSlider";

const ProductItem = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product }: GlobalState = useAppSelector((state) => state.homeReducer);

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  console.log("i am pro", product);

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
        console.log("one data", data);
        console.log({ data });
        dispatch(saveProduct(data));
        console.log("save product", saveProduct(data.product));
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
              <Paper elevation={3} square sx={{ p: 1 }}>
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
          <Typography>Description: {product?.description}</Typography>
        </Box>
      </Paper>
      <ProductItemSlider brand={product.brand} />
    </Box>
  );
};

export default ProductItem;
