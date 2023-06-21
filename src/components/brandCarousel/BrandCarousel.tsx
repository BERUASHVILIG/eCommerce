import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, ButtonBase, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

import sony from "../../images/brand-img/sony-brand.png";
import jbl from "../../images/brand-img/brand-jbl.png";
import google from "../../images/brand-img/brand-google.png";
import apple from "../../images/brand-img/brand-apple.png";
import canon from "../../images/brand-img/brand-canon.png";
import xiaomi from "../../images/brand-img/brand-xiaomi.png";
import dyson from "../../images/brand-img/brand-dyson.png";
import { CarouselButton } from "./BrandCarousel.Styles";

const brandData = [
  { name: "Sony", link: "/brand/sony", image: sony },
  { name: "JBL", link: "/brand/jbl", image: jbl },
  { name: "Google", link: "/brand/google", image: google },
  { name: "Apple", link: "/brand/apple", image: apple },
  { name: "Canon", link: "/brand/canon", image: canon },
  { name: "Xiaomi", link: "/brand/xiaomi", image: xiaomi },
  { name: "Dyson", link: "/brand/dyson", image: dyson },
];

const BrandCarousel = () => {
  const { t } = useTranslation();
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
    <Box>
      <Box sx={{ m: 5 }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <Typography variant="h3">{t("global.brands")}</Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <CarouselButton onClick={() => sliderRef.current?.slickPrev()}>
                <ArrowBackIos />
              </CarouselButton>
              <CarouselButton onClick={() => sliderRef.current?.slickNext()}>
                <ArrowForwardIos />
              </CarouselButton>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "30px",
              backgroundColor: "#fff",
              gap: "10px",
              borderRadius: "15px",
            }}
          >
            <Slider ref={sliderRef} {...sliderSettings}>
              {brandData.map((brand) => (
                <Link key={brand.name} to={brand.link}>
                  <img src={brand.image} alt={brand.name} />
                </Link>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandCarousel;
