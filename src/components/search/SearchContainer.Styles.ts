import { Box, TextField, styled } from "@mui/material";

export const SearchingContainer = styled(Box)`
  position: absolute;
  display: flex;
  flexdirection: column;
  left: 30%;
  width: 600px;
  top: 35px;
  zindex: 3;
  height: 10px;
  @media screen and (max-width: 1280px) {
    width:400px;
  @media screen and (max-width: 1000px) {
    width:200px;
  @media screen and (max-width: 720px) {
    top: 5px;

    width:250px;
    @media screen and (max-width: 420px) {
        top: 5px;
        width:180px;
`;

export const SearchField = styled(TextField)`
  width: 600px;
  @media screen and (max-width: 1280px) {
    width:400px;
  @media screen and (max-width: 1000px) {
    width:200px;
  @media screen and (max-width: 720px) {
    top: 5px;
    width:250px;
    @media screen and (max-width: 420px) {
        top: 5px;
    
        width:180px;
`;
