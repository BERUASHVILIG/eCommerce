import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadSearchResult } from "../../utils/ajax";
import { saveSearchResult } from "../../pages/Home/redux/actions";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";

const SearchContainer = () => {
  const dispatch = useAppDispatch();
  const { searchResult }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  const [input, setInput] = useState<string>("");
  const [debouncedInput, setDebouncedInput] = useState<string>("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => {
      clearTimeout(delay);
    };
  }, [input]);

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
    fetchSearchProduct(debouncedInput);
  }, [debouncedInput, dispatch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        left: "40%",
        width: "350px",
        top: "70px",
        zIndex: "3",
        height: "10px",
      }}
    >
      <TextField
        sx={{ height: "10px" }}
        type="text"
        placeholder="ძიება..."
        value={input}
        onChange={handleInputChange}
      />
      {debouncedInput && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "white",
            height: "300px",
            // position: "absolute",
          }}
        >
          {searchResult.map((product: ProductItem) => (
            <Box
              sx={{
                display: "flex",
                height: "80px",
                marginTop: "55px",
                backgroundColor: "white",
              }}
              key={product.id}
            >
              <img height="50px" src={product.images[1]} alt="" />
              <Link to={`productdetail/${product.id}`}>{product.title}</Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchContainer;
