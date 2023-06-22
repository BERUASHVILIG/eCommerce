import { Box, Button, styled } from "@mui/material";

export const MainLogin = styled(Button)`
  background-color: purple;
  &:hover {
    background-color: purple;
  }
`;

export const LoginContainer = styled(Box)`
  display: flex;
  width: 100%;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const LoginImage = styled(Box)`
  width: 50%;
  @media screen and (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const LoginTextFields = styled(Box)`
  width: 50%;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const LoginSubmit = styled(Button)`
  background-color: #6737c1;
  color: #fff;
  &:hover {
    background-color: #6737c1;
  }
`;

export const LoginCencel = styled(Button)`
  background-color: #8c8aa3;
  color: #fff;
  &:hover {
    background-color: #8c8aa3;
  }
`;
