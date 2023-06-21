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
    "Huawei",
    "Realme",
    "Dyson",
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
          backgroundColor: "#5e35b1",
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
