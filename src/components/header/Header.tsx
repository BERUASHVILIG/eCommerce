import React from "react";
import { Badge, Box, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchContainer from "../search/SearchContainer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppSelector } from "../../redux/hooks";
import Register from "../register";
import Login from "../login";

const Header = () => {
  const languages = [
    {
      value: "Geo",
      label: "Geo",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACCCAMAAADovAORAAAAZlBMVEX/////AAD/tLT/Bgb/8vL/T0//5OT/QED//Pz/EhL/4OD/np7/7u7/zc3/+Pj/U1P/NDT/qan/09P/IyP/iIj/Y2P/x8f/e3v/bm7/R0f/vLz/dHT/W1v/l5f/wsL/Gxv/goL/LCx0YrvxAAACGklEQVR4nO2b2W6DMBBFgYYlLAlbQhYoyf//ZFtw+lIZ2YYLcXXPU1KN5RPXDPZI4ziL4X24EvzdcrMsBnWRUBcJdZFQFwl1kWytm2ZB5DjRLs4OKuFzdYMsHaYrSzPdci+mC5XC5+pmr/CTmW5w1Bo/Vzd+hRdmutFdjK9X0Q1yEW64GZxajPdW0U1bEZ4a6nZaP3eu7qEZo3tT3UJMp5QY5icysTqhadr7FKlBLXq2rlidk9rq/KXst9BtIi3JKCnOwfApqIbx1fj34DOZTDGGunHileNuvY3R3fDlEHud2jOTu30e+pdHl4yr+yzq5uSHee+2AN2scqv82l4eSTPuvUtS39tr+Ny7NyVdXzbtdAI2Xd1QOt1ZSfcoHd8hdK8zdVvp+ASgG8j/mf9S17LNsO6jVs591PKfzGJNInuX18RN8TXxy0YvYdMzg2VHHMsOkJYdz+26/Fh2tdzq4j75qpdjWVlkLDp9J2w7ik6abF3S04S6SKiLhLpIqIuEukhuUt2jXgl0CtkU7wl1kVAXCXWRUBcJdZFQFwl1kVAXCXWRUBcJdZFQF4ltusuxStFpOSwr6VEXCXWRUBcJdZFQVwt2VE3BjiqkLjuqkLrsqILqsqNqeV12VL1gRxU7qt5b17LNwI6qiWHsqFKCHVV6WHaAtOx4btflx7KrJTuqpmBH1RRbl/Q0oS4S6iKhLhLqIqEukjV0vwCWeUnpZDgJKQAAAABJRU5ErkJggg==",
    },
    {
      value: "Eng",
      label: "Eng",
      img: "data:image/png;base64,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",
    },
  ];
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
          marginLeft: "250px",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              alignItems: "flex-end",
              // marginLeft: "700px",
            }}
          >
            <Login />
            <Register />
          </Box>
        </Box>
      </Box>
      <Box sx={{}}>
        <TextField
          id="outlined-select-currency"
          select
          defaultValue="Geo"
          size="small"
          InputProps={{
            style: {
              outline: "none",
            },
          }}
          sx={{
            backgroundColor: "#fff",
            m: 1,
            mr: 2,
            borderRadius: "5px",
            border: "2px solid",
            height: "40px",
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        >
          {languages.map((language) => (
            <MenuItem
              sx={{ display: "flex", gap: "3px" }}
              key={language.value}
              value={language.value}
            >
              {language.label}
              <img width={"20px"} src={language.img} alt="" />
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default Header;
