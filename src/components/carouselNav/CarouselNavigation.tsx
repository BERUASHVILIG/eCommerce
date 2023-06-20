// import React, { useEffect, useState } from "react";
// import "./CarouselNavigation.scss";
// import {
//   Box,
//   Container,
//   FormControl,
//   InputLabel,
//   List,
//   ListItem,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   Typography,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// // Replace the following imports with your own action and selector
// import { saveBrands } from "../../pages/Home/redux/actions";
// import { getAllBrands } from "../../utils/ajax";
// import { useAppSelector } from "../../redux/hooks";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const CarouselNavigation = () => {
//   const navigate = useNavigate();
//   const { Brand } = useParams();

//   return (
//     <Container className="carousel-navigation">
//       {/* {brands.length > 0 && ( */}
//       <List
//         className="list"
//         sx={{
//           backgroundColor: "#ff5000",
//           height: "100%",
//           position: "absolute",
//           top: 0,
//           // ml: 15,
//           zIndex: 3,
//           width: "227px",
//         }}
//       >
//         <Typography sx={{ backgroundColor: "#ff5000" }}>Brands</Typography>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           Apple
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           samsung
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           Lg
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           sony
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           microsoft
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           google
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           Jbl
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           Boya
//         </ListItem>
//         <ListItem sx={{ backgroundColor: "#fff", cursor: "pointer" }}>
//           Canon
//         </ListItem>
//       </List>
//     </Container>
//   );
// };

// export default CarouselNavigation;

import React, { useEffect, useState } from "react";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Brand from "../../pages/brand";
import "./CarouselNavigation.scss";
import { useTranslation } from "react-i18next";

const CarouselNavigation = () => {
  const { t } = useTranslation();

  const brands = [
    "Apple",
    "nokia",
    "dyson",
    "Sony",
    "Microsoft",
    "Google",
    "JBL",
    "amazon",
    "Canon",
  ];

  return (
    <Container className="carousel-navigation">
      <List
        className="list"
        sx={{
          backgroundColor: "#5e35b1", //"#ff5000",
          height: "100%",
          position: "absolute",
          top: 0,
          zIndex: 3,
          width: "227px",
        }}
      >
        <Typography sx={{ backgroundColor: "#5e35b1" }}>
          {t("global.brands")}
        </Typography>
        {brands.map((brand) => (
          <ListItem
            key={brand}
            sx={{ backgroundColor: "#fff", cursor: "pointer" }}
            component={Link}
            to={`/brand/${brand}`}
          >
            {brand}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CarouselNavigation;

// import React, { useEffect } from "react";
// import { Box, Container, List, ListItem, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const CarouselNavigation = ({ visible }: any) => {
//   const { t } = useTranslation();

//   useEffect(() => {
//     const handleResize = () => {
//       const windowWidth = window.innerWidth; // Get the current window width
//       if (windowWidth < 1000 && !visible) {
//         // If the window width is below 1000px and the component is not already visible, set the visible prop to true
//         visible(true);
//       } else if (windowWidth >= 1000 && visible) {
//         // If the window width is 1000px or above and the component is still visible, set the visible prop to false
//         visible(false);
//       }
//     };

//     handleResize(); // Call the function initially to set the initial state

//     window.addEventListener("resize", handleResize); // Add event listener for window resize

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup by removing event listener
//     };
//   }, [visible]);

//   const brands = [
//     "Apple",
//     "samsung",
//     "Huawei",
//     "Sony",
//     "Microsoft",
//     "Google",
//     "JBL",
//     "amazon",
//     "Canon",
//   ];

//   if (!visible) {
//     return null; // Return null if visible is false (do not render the CarouselNavigation component)
//   }

//   return (
//     <Container className="carousel-navigation">
//       <List
//         className="list"
//         sx={{
//           backgroundColor: "#5e35b1", //"#ff5000",
//           height: "100%",
//           position: "absolute",
//           top: 0,
//           zIndex: 3,
//           width: "227px",
//         }}
//       >
//         <Typography sx={{ backgroundColor: "#5e35b1" }}>
//           {t("global.brands")}
//         </Typography>
//         {brands.map((brand) => (
//           <ListItem
//             key={brand}
//             sx={{ backgroundColor: "#fff", cursor: "pointer" }}
//             component={Link}
//             to={`/brand/${brand}`}
//           >
//             {brand}
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default CarouselNavigation;
