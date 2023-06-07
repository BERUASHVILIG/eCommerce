import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadSearchResult } from "../../utils/ajax";
import { saveSearchResult } from "../../pages/Home/redux/actions";
import { Link } from "react-router-dom";

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
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: "15px",
        zIndex: "3",
      }}
    >
      <input type="text" value={input} onChange={handleInputChange} />
      {/* Render the search results here */}
      {debouncedInput && (
        <div
          style={{
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
            <div
              style={{
                display: "flex",
                height: "80px",
                marginTop: "55px",
                backgroundColor: "white",
              }}
              key={product.id}
            >
              <img height="50px" src={product.images[1]} alt="" />
              <Link to={`productdetail/${product.id}`}>{product.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
