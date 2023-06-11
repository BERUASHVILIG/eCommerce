import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadSliderProducts } from "../../utils/ajax";
import { saveSliderProducts } from "../../pages/Home/redux/actions";
import { Link } from "react-router-dom";

import "./Slider.scss";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselNavigation from "../carouselNav";

const Sliderr = () => {
  const dispatch = useAppDispatch();
  const { slider }: GlobalState = useAppSelector((state) => state.homeReducer);

  useEffect(() => {
    const fetchSliderProducts = async () => {
      try {
        const { data } = await loadSliderProducts();
        dispatch(saveSliderProducts(data.products));
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchSliderProducts();
  }, []);

  const PreviousBtn = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos className="arrow-back" />
      </div>
    );
  };

  const NextBtn = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos className="arrow-next" />
      </div>
    );
  };

  return (
    <Box>
      <div className="slider-container">
        <CarouselNavigation />
        <Slider
          autoplay
          autoplaySpeed={3000}
          // dots
          initialSlide={2}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {slider.map((slide) => {
            return (
              <Link key={slide.id} to={`productdetail/${slide.id}`}>
                <img
                  className="slider-image"
                  key={slide.id}
                  src="data:image/jpeg;base64,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"
                  //{slide.images[0]}
                  alt={slide.brand}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </Box>
  );
};

export default Sliderr;
