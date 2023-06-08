// import React from "react";
// import { Box, Paper, Typography } from "@mui/material";

// const CarouselNavigation = () => {
//   return (
//     <Box sx={{ position: "absolute", left: "250px", zIndex: 5 }}>
//       <Typography sx={{ backgroundColor: "orange" }}>Brands</Typography>
//       <Paper square sx={{ width: "200px", p: 3, height: "100%" }}>
//         <Typography>Samsung</Typography>
//         <Typography>Sony</Typography>
//         <Typography>LG</Typography>
//         <Typography>Apple</Typography>
//         <Typography>Microsoft</Typography>
//         <Typography>Dyson</Typography>
//         <Typography>Google</Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default CarouselNavigation;

import React from "react";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const CarouselNavigation = () => {
  return (
    <Container
      sx={{
        height: "280px",
        position: "absolute",
        ml: 25,
        zIndex: 3,
        width: "250px",
      }}
    >
      <Typography sx={{ backgroundColor: "orange" }}>Brands</Typography>
      <List
        sx={{ backgroundColor: "#fff" }}
        component="nav"
        aria-label="mailbox folders"
      >
        <ListItem button>
          <ListItemText primary="samsung" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Sony" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Lg" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Apple" />
        </ListItem>
        <Divider light />
        {/* <ListItem button>
          <ListItemText primary="Apple" />
        </ListItem> */}
      </List>
    </Container>
  );
};

export default CarouselNavigation;
