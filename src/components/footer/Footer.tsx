// import React from "react";
// import { Box, Typography } from "@mui/material";

// import logo from "../../images/ecomlogo-removebg-preview.png";

// const Footer = () => {
//   return (
//     <Box>
//       <Box sx={{ backgroundColor: "red", height: "25px" }}>vjs </Box>

//       <Box
//         sx={{
//           width: "100%",
//           backgroundColor: "grey",
//           height: "150px",
//           marginTop: "auto",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           alignItems: "center",
//         }}
//       >
//         <Box></Box>
//         <Box sx={{ display: "flex" }}>
//           <img height={"40px"} src={logo} alt="" />
//           <Typography>ALl right Reserved</Typography>
//           <Typography></Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Typography } from "@mui/material";

import logo from "../../images/ecomlogo-removebg-preview.png";

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "white", height: "25px" }}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
          Digital Tech
          <span style={{ display: "block", color: "white" }}>Since 2023</span>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          height: "150px",
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img height={"40px"} src={logo} alt="" />
          <Typography sx={{ color: "white" }}>All Rights Reserved</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
