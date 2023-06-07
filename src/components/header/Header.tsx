import React from "react";
import { Badge, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchContainer from "../search/SearchContainer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const { cartItems }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "50px",
        backgroundColor: "grey",
      }}
    >
      <SearchContainer />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "50px",
          gap: "20px",
          mt: 2,
        }}
      >
        <Link to={"/"}>Home</Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Link
            style={{
              display: "flex",
              height: "50px",
              justifyContent: "center",
              alignContent: "center",
            }}
            to={"/cart"}
          >
            Cart
            <Badge badgeContent={cartItems.length} color="success">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
