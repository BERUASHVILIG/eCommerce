import { Box, Paper, styled } from "@mui/material";

export const BrandImageContainer = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
`;

export const BrandCategory = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px;
  border-bottom: 1px solid grey;
  margin: auto;
`;

export const BrandContainer = styled(Box)`
  margin: 15px auto;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 20px;
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(3, 320px);
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 360px);
  }
  @media screen and (max-width: 790px) {
    grid-template-columns: repeat(1, 360px);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 320px);
  }
`;
