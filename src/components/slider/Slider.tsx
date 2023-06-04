import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadSliderProducts } from "../../utils/ajax";
import { saveSliderProducts } from "../../pages/Home/redux/actions";
import { Link } from "react-router-dom";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Autoplay]);

const Slider = () => {
  const dispatch = useAppDispatch();
  const { slider }: GlobalState = useAppSelector((state) => state.homeReducer);

  useEffect(() => {
    const fetchSliderProducts = async () => {
      try {
        const { data } = await loadSliderProducts();
        dispatch(saveSliderProducts(data.products));
        console.log("slider", saveSliderProducts(data.products));
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchSliderProducts();
  }, []);

  return (
    <div>
      <Swiper
        style={{ height: "300px", backgroundColor: "#5cccc5" }}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`/productdetail/${slide.id}`}>
              <img
                style={{
                  width: "157px",
                  height: "157px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
                src={slide.images[0]}
                alt={`Product Image ${index + 1}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
