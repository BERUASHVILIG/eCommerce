import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { Box, Paper, Typography, CardMedia, Button } from "@mui/material";
import CartItemCard from "../../components/cartItemCard";

const Cart = () => {
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
      <Box sx={{ display: "grid", gridTemplateColumns: "70% 25%" }}>
        <Paper
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "40px",
            m: 3,
            p: 2,
          }}
        >
          <Typography>Cart</Typography>
          {cartItems.length === 0 ? (
            <Typography>There are no items in the cart.</Typography>
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
        </Paper>
        <Box>
          <Paper square sx={{ p: 2, m: 3, width: "100%" }}>
            <Box>
              <Typography variant="h4">ჯამი</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography>
                  სულ თანხა:
                  {parseFloat(totalPrice.toString()).toFixed(2)}₾
                </Typography>
                <Typography>მიტანის სერვისი:10₾</Typography>
                <Typography>
                  ჯამი:
                  {parseFloat(totalSum.toString()).toFixed(2)}₾
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={handleCheckout}
              sx={{ mt: 3, width: "100%" }}
              color="warning"
              variant="contained"
            >
              Checkout
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
