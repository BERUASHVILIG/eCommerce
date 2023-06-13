import React, { useRef } from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const BrandCarousel = () => {
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
            <Typography variant="h3">Brands</Typography>
            <Box sx={{ display: "flex" }}>
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
            </Box>
          </Box>
          <Box
            sx={{
              margin: "30px",
              backgroundColor: "#fff", //"#ffc15",
              gap: "10px",
              borderRadius: "15px",
            }}
          >
            <Slider ref={sliderRef} {...sliderSettings}>
              <img
                src={
                  "https://img.zoommer.ge/zoommer-images/thumbs/0192345_sony.png"
                }
                alt=""
              />
              <img
                src="https://img.zoommer.ge/zoommer-images/thumbs/0160609_jbl.png"
                alt=""
              />
              <img
                src="https://img.zoommer.ge/zoommer-images/thumbs/0125036_google.png"
                alt=""
              />
              <img
                src="https://img.zoommer.ge/zoommer-images/thumbs/0160158_boya.png"
                alt=""
              />
              <img
                src="https://img.zoommer.ge/zoommer-images/thumbs/0124554_apple.png"
                alt=""
              />
              <img
                src="https://img.zoommer.ge/zoommer-images/thumbs/0164271_canon.png"
                alt=""
              />
              <img
                src="https://img.zoommer.ge/zoommer-images/thumbs/0144108_xiaomi.png"
                alt=""
              />
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandCarousel;
