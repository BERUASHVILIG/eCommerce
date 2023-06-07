import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadSliderProducts } from "../../utils/ajax";
import { saveSliderProducts } from "../../pages/Home/redux/actions";
import { Link } from "react-router-dom";

import "./Slider.scss";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="slider-container">
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
                src={slide.images[0]}
                alt={slide.brand}
              />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliderr;
