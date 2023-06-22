import React, { useState, useEffect } from "react";
import { Badge, Box, MenuItem, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

import { useAppSelector } from "../../redux/hooks";
import Register from "../register";
import Login from "../login";

import logo from "../../images/ecomlogo-removebg-preview.png";
import responsiveLogo from "../../images/ecom-logo-responsive.png";
import geo from "../../images/geo-flag.png";
import eng from "../../images/usa-flag.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Header.Styles";
import SearchContainer from "../search/SearchContainer";
import burgerMenu from "../../images/burger-menu-removebg-preview.png";
import Burgermenu from "../../images/burgerMenu-removebg-preview.png";

import {
  HeaderActions,
  HeaderWrapper,
  PopupWrapper,
  ActionContainer,
  CartContainer,
  MenuItems,
  ContactContainer,
} from "./Header.Styles";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { cartItems }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  const reloadPage = () => {
    navigate("/");
  };

  // const [isSignInOpen, setIsSignInOpen] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("User");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handlePopupOpen = () => {
    setIsPopupOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 750);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+032222225"; // Replace with your actual hotline number
  };

  return (
    <Box>
      <HeaderWrapper>
        <Typography
          onClick={handleCall}
          sx={{
            ml: 20,
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneEnabledIcon />
          {t("global.hotline")}: +032 22 22 25
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
            {t("global.branches")}
          </Typography>
          <button
            style={{ backgroundColor: "white", cursor: "pointer" }}
            onClick={() => i18next.changeLanguage("en")}
          >
            ENG <img src={eng} width={"20px"} alt="EN" />
          </button>
          <button
            style={{ backgroundColor: "white", cursor: "pointer" }}
            onClick={() => i18next.changeLanguage("ge")}
          >
            GEO <img src={geo} width={"20px"} alt="ge" />
          </button>
        </Box>
      </HeaderWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "10px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box>
          <Link to="/" onClick={reloadPage}>
            {isMobileView && window.innerWidth < 450 ? (
              <img
                src={responsiveLogo}
                alt=""
                height={"40px"}
                className="logo"
              />
            ) : (
              <img src={logo} alt="Logo" height={"40px"} className="logo" />
            )}
          </Link>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <SearchContainer />
          </form>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ContactContainer>
            <Link
              style={{
                listStyle: "none",
                color: "#7a1dff",
                fontWeight: "bold",
                marginRight: "4px",
                textDecoration: "none",
              }}
              to={"/contact"}
            >
              {t("global.contact")}
            </Link>
          </ContactContainer>
          <CartContainer>
            <Link to="/cart" className="cart-link">
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </CartContainer>
          <div>
            {isMobileView && (
              <button onClick={handlePopupOpen}>
                <img
                  width="25px"
                  style={{ cursor: "pointer" }}
                  src={Burgermenu}
                  alt=""
                />
              </button>
            )}
            {isPopupOpen && (
              <PopupWrapper>
                <div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      listStyle: "none",
                      gap: "10px",
                    }}
                  >
                    <li onClick={handlePopupOpen}>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "130px",
                          cursor: "pointer",
                          color: "#fff",
                          gap: "4px",
                          backgroundColor: "purple",
                        }}
                        onClick={() => i18next.changeLanguage("en")}
                      >
                        ENG <img src={eng} width={"20px"} alt="EN" />
                      </button>
                    </li>
                    <li onClick={handlePopupOpen}>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "130px",
                          color: "#fff",
                          cursor: "pointer",
                          gap: "4px",
                          backgroundColor: "purple",
                        }}
                        onClick={() => i18next.changeLanguage("ge")}
                      >
                        GEO <img src={geo} width={"20px"} alt="ge" />
                      </button>
                    </li>
                    <li>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "130px",
                          gap: "4px",
                          backgroundColor: "purple",
                        }}
                      >
                        <Login />
                      </button>
                    </li>
                    <li>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "130px",
                          gap: "4px",
                          backgroundColor: "purple",
                        }}
                      >
                        <Register />
                      </button>
                    </li>
                    <li onClick={handlePopupOpen}>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "130px",
                          gap: "4px",
                          backgroundColor: "purple",
                        }}
                      >
                        <Link
                          style={{
                            listStyle: "none",
                            color: "white",
                            textDecoration: "none",
                          }}
                          to={"/contact"}
                        >
                          {t("global.contact")}
                        </Link>
                      </button>
                    </li>
                    <li onClick={handlePopupOpen}>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "40px",
                          width: "130px",
                          gap: "4px",
                          backgroundColor: "purple",
                        }}
                      >
                        <Link to="/cart" className="cart-link">
                          <Badge
                            badgeContent={cartItems.length}
                            color="primary"
                          >
                            <ShoppingCartOutlinedIcon
                              style={{ color: "#fff" }}
                            />
                          </Badge>
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </PopupWrapper>
            )}
          </div>
          <ActionContainer sx={{ ml: 2 }}>
            <MenuItem>
              <Typography variant="body1">
                <HeaderActions sx={{ display: "flex", gap: "10px" }}>
                  <Login />
                  <Register />
                </HeaderActions>
              </Typography>
            </MenuItem>
          </ActionContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
