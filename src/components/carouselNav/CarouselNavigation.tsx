import React, { useEffect, useState } from "react";
import "./CarouselNavigation.scss";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// Replace the following imports with your own action and selector
import { saveBrands } from "../../pages/Home/redux/actions";
import { getAllBrands } from "../../utils/ajax";
import { useAppSelector } from "../../redux/hooks";
import { Link, useNavigate, useParams } from "react-router-dom";

const CarouselNavigation = () => {
  const navigate = useNavigate();
  const { Brand } = useParams();
  const [brand, setBrand] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  const handleBrand = () => {
    navigate("/brand/:Brand");
  };

  const dispatch = useDispatch();
  const { brands }: GlobalState = useAppSelector((state) => state.homeReducer); // Replace 'state.brands' with your actual selector

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data } = await getAllBrands(); // Replace 'getBrandsData' with your own function
        dispatch(saveBrands(data.brands));
      } catch (error) {
        console.log(error);
      }
    };

    fetchBrands();
  }, [dispatch]);

  return (
    <Container className="carousel-navigation">
      {brands.length > 0 && (
        <List
          className="list"
          sx={{
            backgroundColor: "#ff5000",
            height: "100%",
            position: "absolute",
            top: 0,
            // ml: 15,
            zIndex: 3,
            width: "227px",
          }}
        >
          <Typography sx={{ backgroundColor: "#ff5000" }}>Brands</Typography>
          {brands.slice(0, 9).map((brand: string, index: any) => (
            <ListItem
              // onClick={handleBrand}
              sx={{ backgroundColor: "#fff", cursor: "pointer" }}
              key={index}
            >
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/brand/${brand}`}
              >
                {brand}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default CarouselNavigation;
