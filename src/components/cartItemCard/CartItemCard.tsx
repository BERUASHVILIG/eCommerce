import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Paper, CardMedia } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../pages/Home/redux/actions";

const CartItemCard = ({
  item,
  totalPrice,
}: {
  item: CartItem;
  totalPrice: number;
}) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = (item: CartItem) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <Box
      key={item.product.id}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "25px",
          width: "550px",
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="Product Image"
          height="60"
          sx={{ width: "100px" }}
          image={item.product.images[0]}
        />
        <Link to={`/productdetail/${item.product.id}`}>
          {item.product.title}
        </Link>
        <Button onClick={() => handleIncreaseQuantity(item)}>+</Button>
        <Typography>{item.quantity}</Typography>
        <Button onClick={() => handleDecreaseQuantity(item)}>-</Button>
        <Typography>
          Price:
          {parseFloat(item.product.price.toString()).toFixed(2)} ₾
        </Typography>
        <Typography>
          Total Price: {parseFloat(totalPrice.toString()).toFixed(2)}₾
        </Typography>
      </Paper>
    </Box>
  );
};

export default CartItemCard;
