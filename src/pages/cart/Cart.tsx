import React from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux/hooks";
import CartItemCard from "../../components/cartItemCard";

import { Box, Paper, Typography, CardMedia, Button } from "@mui/material";

import {
  CartContainer,
  Cartitems,
  BuyContainer,
  CheckoutButton,
} from "./Cart.Styles";

const Cart = () => {
  const { t } = useTranslation();

  const { cartItems }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  const handleCheckout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const calculateTotalSum = (cartItems: CartItem[]): number => {
    if (cartItems.length > 0) {
      const totalSum =
        cartItems.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ) + 10;
      return totalSum;
    } else {
      return 0;
    }
  };

  const totalSum = calculateTotalSum(cartItems);

  return (
    <Box>
      <CartContainer>
        <Cartitems square>
          <Typography>{t("global.cart")}</Typography>
          {cartItems.length === 0 ? (
            <Typography>{t("global.emptyCart")}</Typography>
          ) : (
            cartItems.map((item: CartItem) => {
              if (item.quantity > 0) {
                const totalPrice = item.product.price * item.quantity;
                return (
                  <CartItemCard
                    key={item.product.id}
                    item={item}
                    totalPrice={totalPrice}
                  />
                );
              }
              return null;
            })
          )}
        </Cartitems>
        <BuyContainer>
          <Paper square sx={{ p: 2, m: 3, width: "100%" }}>
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#7a1dff" }}
                variant="h4"
              >
                {t("global.sum")}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography>
                  {t("global.totalMoney")}
                  {parseFloat(totalPrice.toString()).toFixed(2)}₾
                </Typography>
                <Typography>{t("global.delivery")}:10₾</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#7a1dff" }}>
                  {t("global.sum")}:{parseFloat(totalSum.toString()).toFixed(2)}
                  ₾
                </Typography>
              </Box>
            </Box>
            <CheckoutButton
              onClick={handleCheckout}
              sx={{ mt: 3, width: "100%" }}
            >
              {t("global.checkout")}
            </CheckoutButton>
          </Paper>
        </BuyContainer>
      </CartContainer>
    </Box>
  );
};

export default Cart;
