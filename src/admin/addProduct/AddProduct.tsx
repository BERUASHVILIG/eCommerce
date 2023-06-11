import React, { useState } from "react";
import { Box, TextField, Button, Dialog, DialogContent } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { values, handleChange, submitForm } = useFormik({
    initialValues: {
      title: "",
      description: "",
      images: [],
      brand: "",
      category: "",
      price: 0,
      amount: 0,
    },
    onSubmit: async (values: AddProductItem) => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:8080/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("data", data);
          dispatch(addProduct(values));
          setOpen(false); // Close the dialog after successful submission
        } else {
          console.error("status", response.status);
          // Handle error scenarios or provide feedback to the user
        }
      } catch (error) {
        console.error("error", error);
        // Handle error scenarios or provide feedback to the user
      }
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen}>Add Product</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            value={values.title}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            value={values.description}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            id="images"
            name="images"
            label="Images"
            variant="outlined"
            value={values.images.join(", ")}
            onChange={(event) => {
              const imageValues = event.target.value.split(", ");
              handleChange({
                target: {
                  name: "images",
                  value: imageValues,
                },
              });
            }}
            fullWidth
            margin="dense"
          />

          <TextField
            id="brand"
            name="brand"
            label="Brand"
            variant="outlined"
            value={values.brand}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            id="category"
            name="category"
            label="Category"
            variant="outlined"
            value={values.category}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            id="price"
            name="price"
            label="Price"
            variant="outlined"
            value={values.price}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <TextField
            id="amount"
            name="amount"
            label="Amount"
            variant="outlined"
            value={values.amount}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />

          <Button onClick={submitForm} fullWidth variant="contained">
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddProduct;
