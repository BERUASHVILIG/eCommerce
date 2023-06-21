import { Paper, Box, CardMedia, styled } from "@mui/material";

export const CartItemContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const CartItem = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 550px;
  padding: 10px;
  border: 3px solid #7a1dff;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    width: 350px;
  }
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

export const ProductImage = styled(CardMedia)`
  width: 100px;
  height: 40px;
  @media screen and (max-width: 680px) {
    width: 100px;
    height: 120px;
  }
`;
