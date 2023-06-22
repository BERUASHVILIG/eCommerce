import { Box, Button, styled } from "@mui/material";

export const RegisterContainer = styled(Box)`
  display: flex;
  width: 100%;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const RegisterImage = styled(Box)`
  width: 50%;
  @media screen and (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const RegisterTextFields = styled(Box)`
  width: 50%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const RegisterCencel = styled(Button)`
  background-color: #8c8aa3;
  color: #fff;
  &:hover {
    background-color: #8c8aa3;
  }
`;

export const RegisterSubmit = styled(Button)`
  background-color: #6737c1;
  color: #fff;
  &:hover {
    background-color: #6737c1;
  }
`;

export const MainRegister = styled(Button)`
  background-color: purple;
  &:hover {
    background-color: purple;
  }
`;
