import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadSearchResult } from "../../utils/ajax";
import { saveSearchResult } from "../../pages/Home/redux/actions";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";

import useDebounce from "../../utils/hooks";

import { SearchField, SearchingContainer } from "./SearchContainer.Styles";

const SearchContainer = () => {
  const dispatch = useAppDispatch();
  const { searchResult }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, 1000);

  useEffect(() => {
    const fetchSearchProduct = async (value: string) => {
      try {
        const { data } = await loadSearchResult(value);
        if (Array.isArray(data.products)) {
          const results = data.products.filter((product: ProductItem) =>
            product.title.toLowerCase().includes(value.toLowerCase())
          );
          dispatch(saveSearchResult(results));
        } else {
          dispatch(saveSearchResult([]));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchProduct(debouncedValue);
  }, [debouncedValue, dispatch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <SearchingContainer>
      <SearchField
        type="text"
        size="small"
        placeholder="ძიება..."
        value={input}
        sx={{ backgroundColor: "white" }}
        onChange={handleInputChange}
      />

      {debouncedValue && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "white",
            height: "450px",
            position: "absolute",
            top: "42px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            borderLeft: "0.5px solid grey",
            borderRight: "0.5px solid grey",
            borderBottom: "0.5px solid grey",
            width: "100%",
            p: 2,
            zIndex: "8",
          }}
        >
          {searchResult.map((product: ProductItem) => (
            <Box
              sx={{
                display: "flex",
                height: "50px",
                zIndex: "8",
                backgroundColor: "#fff",
              }}
              key={product.id}
            >
              <img height="50px" src={product.images[1]} alt="" />
              <Link to={`productdetail/${product.id}`}>
                {product.title.length > 30
                  ? product.title.slice(0, 25) + "..."
                  : product.title}
              </Link>
              <Typography sx={{ color: "#7a1dff", fontWeight: "bold" }}>
                {parseFloat(product.price.toString()).toFixed(2)}₾
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </SearchingContainer>
  );
};

export default SearchContainer;
