// import React from "react";
// import { Box } from "@mui/material";
// import { Swiper, SwiperSlide, Navigation, Autoplay } from "swiper/react";
// import "swiper/swiper.min.css";
// Swiper.use([Navigation, Autoplay]);

// const ProductCard = ({ product }: { product: ProductItem }) => {
//   return (
//     <Box>
//       <Box>
//         <Swiper
//           slidesPerView={1}
//           navigation
//           autoplay={{ delay: 3000 }}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//             width: "200px",
//             border: "3px solid",
//             gap: "10px",
//           }}
//         >
//           {product.images.map((image, i) => (
//             <SwiperSlide key={i}>
//               <img
//                 style={{
//                   width: "157px",
//                   height: "157px",
//                   display: "flex",
//                   justifyContent: "center",
//                   margin: "auto",
//                 }}
//                 src={image}
//                 alt={`Product Image ${i + 1}`}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { useAppDispatch } from "../../redux/hooks";
import { updateCart } from "../../pages/Home/redux/actions";

const ProductCard = ({ product }: { product: ProductItem }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(updateCart(product, 1)); // Adjust the quantity as needed
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: "200px",
          border: "3px solid",
          gap: "10px",
        }}
      >
        <Swiper slidesPerView={1} navigation>
          {product.images.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                style={{
                  width: "157px",
                  height: "157px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
                src={image}
                alt={`Product Image ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box>
        <Typography>
          {parseFloat(product.price.toString()).toFixed(2)}
        </Typography>
        <Typography>
          <Link to={`/productdetail/${product.id}`}>See Detail</Link>
        </Typography>
        <Button sx={{ cursor: "pointer" }} onClick={handleAddToCart}>
          add cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import "swiper/swiper.min.css";
// // import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, { Navigation, Autoplay } from "swiper";

// // Install Swiper modules
// SwiperCore.use([Navigation, Autoplay]);

// const ProductCard = ({ product }: { product: ProductItem }) => {
//   return (
//     <Box>
//       <Box>
//         <Swiper
//           slidesPerView={1}
//           // navigation
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//             width: "200px",
//             border: "3px solid",
//             gap: "10px",
//           }}
//         >
//           {product.images.map((image, i) => (
//             <SwiperSlide key={i}>
//               <img
//                 style={{
//                   width: "157px",
//                   height: "157px",
//                   display: "flex",
//                   justifyContent: "center",
//                   margin: "auto",
//                 }}
//                 src={image}
//                 alt={`Product Image ${i + 1}`}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
//       <Box>
//         <Typography>
//           <Link to={"/"}>See Details</Link>
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;
