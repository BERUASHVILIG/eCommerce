import { Paper, Box, Button, styled } from "@mui/material";

export const CartContainer = styled(Box)`
  display: grid;
  margin-left: 25px;
  grid-template-columns: 70% 25%;
  @media screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Cartitems = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  margin: 23px;
  padding: 10px;
`;

export const BuyContainer = styled(Box)`
  @media screen and (max-width: 940px) {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const CheckoutButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  width: 90%;
  border-radius: 6px;
  color: #fff;
  border: none;
  font-weight: bold;
  background-color: #7a1dff;
  &:hover {
    background-color: #7a1dff;
  }
`;
