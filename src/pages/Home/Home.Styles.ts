import { Box, Button, Typography, styled } from "@mui/material";

export const ProductsContainerTitle = styled(Typography)`
  color: purple;
  margin-top: 10px;
  margin-left: 5%;
  font-weight: bold;
`;

export const LoadMoreButtonWrapper = styled(Box)`
  dispay: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
`;
export const LoadMoreButton = styled(Button)`
  background-color: purple;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 46%;
  color: #fff;
  height: 55px;
  font-weight: bold;
  &:hover {
    background-color: purple;
  }
`;

export const ProductsContainer = styled(Box)`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  gap: 30px;
  width: 80%;
  grid-template-columns: repeat(5, 250px);

  @media screen and (max-width: 1290px) {
    grid-template-columns: repeat(3, 350px);
  }

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media screen and (max-width: 890px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 80%);
  }
`;
