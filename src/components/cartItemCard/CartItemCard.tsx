import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../pages/Home/redux/actions";

import { Typography, Button } from "@mui/material";

import {
  CartItem,
  CartItemContainer,
  ProductImage,
} from "./CartItemCart.Styles";

const CartItemCard = ({
  item,
  totalPrice,
}: {
  item: CartItem;
  totalPrice: number;
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleIncreaseQuantity = (item: CartItem) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <CartItemContainer key={item.product.id}>
      <CartItem>
        <ProductImage image={item.product.images[0]} />
        <Link to={`/productdetail/${item.product.id}`}>
          {item.product.title.length > 30
            ? item.product.title.slice(0, 15) + "..."
            : item.product.title}
        </Link>
        <Button onClick={() => handleIncreaseQuantity(item)}>+</Button>
        <Typography>{item.quantity}</Typography>
        <Button onClick={() => handleDecreaseQuantity(item)}>-</Button>
        <Typography variant="body1">
          {t("global.price")}:{" "}
          {parseFloat(item.product.price.toString()).toFixed(2)}₾
        </Typography>
        <Typography variant="body1">
          {t("global.totalPrice")}:{" "}
          {parseFloat(totalPrice.toString()).toFixed(2)}₾
        </Typography>
      </CartItem>
    </CartItemContainer>
  );
};

export default CartItemCard;
