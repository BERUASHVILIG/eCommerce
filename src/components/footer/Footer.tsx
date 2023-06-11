import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "grey",
        // position: "absolute",
        height: "150px",
        bottom: 0,
      }}
    >
      <Typography>Footer</Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Footer;
