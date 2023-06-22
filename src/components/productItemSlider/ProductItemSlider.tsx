import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadProductItemSlider } from "../../utils/ajax";
import { saveProductItemSlider } from "../../pages/Home/redux/actions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, ButtonBase } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "../productCard";

import "./ProductItemSlider.css";

const ProductItemSlider = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();
  const { productItemSlider }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  useEffect(() => {
    const fetchProductItemSlider = async () => {
      try {
        const { data } = await loadProductItemSlider(title);
        dispatch(saveProductItemSlider(data.products));
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchProductItemSlider();
  }, [title]);

  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ m: 5 }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
          }}
        >
          <h1>Similar Products</h1>
          <div style={{ display: "flex" }}>
            <ButtonBase
              style={{
                width: 35,
                height: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
                borderRadius: 7,
                boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                cursor: "pointer",
              }}
              className="buttons"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ArrowBackIos />
            </ButtonBase>
            <ButtonBase
              style={{
                width: 35,
                height: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
                boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                cursor: "pointer",
              }}
              className="buttons"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ArrowForwardIos />
            </ButtonBase>
          </div>
        </div>
        <div
          style={{
            margin: "30px",
            backgroundColor: "#ffc15",
            gap: "10px",
          }}
        >
          <Slider ref={sliderRef} {...sliderSettings}>
            {productItemSlider.map((slide, index) => {
              return (
                <div key={index}>
                  <ProductCard product={slide} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </Box>
  );
};

export default ProductItemSlider;
