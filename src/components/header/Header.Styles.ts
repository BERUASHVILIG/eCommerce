import { Box, styled } from "@mui/material";

export const HeaderActions = styled(Box)`
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const HeaderWrapper = styled(Box)`
display:flex;
justify-Content:space-between;
background-Color:#7a1dff;
@media screen and (max-width: 750px) {
    display:none
`;

export const PopupWrapper = styled(Box)`
  position: absolute;
  display: flex;
  border-radius: 10px;
  width: 250px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  right: 36px;
  background-color: #e2e1ef;
  z-index: 35;
`;

export const CartContainer = styled(Box)`
  display: flex;
  align-items: center;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const ActionContainer = styled(Box)`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const ContactContainer = styled(Box)`
  display: flex;
  align-items: center;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const MenuItems = styled(Box)`
display: flex
justify-content: center
align-items: center
height: 40px
width: 90px
gap: 4px
background-color: purple
`;
