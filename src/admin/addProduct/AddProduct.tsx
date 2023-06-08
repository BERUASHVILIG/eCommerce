import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addProduct } from "../redux/actions";

// Define the type for your form values
interface FormValues {
  title: string;
  description: string;
  images: [];
  brand: string;
  category: string;
  price: string;
  amount: string;
}

const AddProduct = () => {
  const dispatch = useAppDispatch();
  //   const { product }:  = useAppSelector(
  //     (state) => state.adminReducer
  //   );
  const { values, handleChange, handleSubmit, submitForm } =
    useFormik<FormValues>({
      initialValues: {
        title: "",
        description: "",
        images: [],
        brand: "",
        category: "",
        price: "",
        amount: "",
      },
      onSubmit: async (formValues) => {
        try {
          const response = await fetch("http://localhost:8080/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          });
          if (response.ok) {
            const data = await response.json();
            console.log("Product added:", data);
            // Dispatch an action to update the state if needed
            dispatch(addProduct(formValues));
          } else {
            console.error("Error adding product:", response.status);
            // Handle the error as needed
          }
        } catch (error) {
          console.error("Error adding product:", error);
          // Handle the error as needed
        }
        console.log(formValues);
      },
    });

  return (
    <Box
      sx={{
        width: "55%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "8px",
        p: 2,
      }}
    >
      <Typography>Add new Product</Typography>
      <Paper>
        <TextField
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          value={values.title}
          onChange={handleChange}
        />
      </Paper>
      <Paper>
        <TextField
          id="description"
          name="description"
          label="Description"
          variant="outlined"
          value={values.description}
          onChange={handleChange}
        />
      </Paper>
      <Paper>
        <TextField
          id="images"
          name="images"
          label="Images"
          variant="outlined"
          value={values.images}
          onChange={handleChange}
        />
      </Paper>
      <Paper>
        <TextField
          id="brand"
          name="brand"
          label="Brand"
          variant="outlined"
          value={values.brand}
          onChange={handleChange}
        />
      </Paper>
      <Paper>
        <TextField
          id="category"
          name="category"
          label="Category"
          variant="outlined"
          value={values.category}
          onChange={handleChange}
        />
      </Paper>
      <Paper>
        <TextField
          id="price"
          name="price"
          label="Price"
          variant="outlined"
          value={values.price}
          onChange={handleChange}
        />
      </Paper>
      <Paper>
        <TextField
          id="amount"
          name="amount"
          label="Amount"
          variant="outlined"
          value={values.amount}
          onChange={handleChange}
        />
      </Paper>
      <Button variant="contained" onClick={submitForm}>
        Add
      </Button>
    </Box>
  );
};

export default AddProduct;
