import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "50px",
        backgroundColor: "grey",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart</Link>
    </Box>
  );
};

export default Header;
