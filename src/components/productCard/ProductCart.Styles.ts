import { styled, Box, Button, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export const ProductContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
  background-color: white;
  height: 350px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  &:hover .arrow {
    opacity: 1;
  }
`;

export const AddCartButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  width: 90%;
  border-radius: 6px;
  color: #7a1dff;
  border: none;
  font-weight: bold;
  background-color: #f1e8ff;
  &:hover {
    background-color: #d3c9f5;
  }
  position: absolute;
  bottom: 7;
`;

export const SliderArrowLeft = styled(ArrowLeft)`
  position: absolute;
  left: 0px;
  top: 30%;
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 5;
  background-color: purple;
  color: white;
  opacity: 0;
`;

export const SliderArrowRight = styled(ArrowRight)`
  position: absolute;
  right: 0px;
  top: 30%;
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 5;
  color: white;
  background-color: purple;
  opacity: 0;
`;

export const ProductTitle = styled(Typography)`
  &:hover {
    color: purple;
  }
`;
