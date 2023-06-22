import React from "react";
import logo from "../../images/ecomlogo-removebg-preview.png";

import Login from "../../components/login";
import { Box, Typography } from "@mui/material";

const AdminHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff", //"#8080b2",
        height: "60px",
      }}
    >
      <img style={{ marginTop: "3px" }} src={logo} alt="" />
      <Typography variant="h4"> Admin</Typography>
      <Login />
    </Box>
  );
};

export default AdminHeader;
