import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Dialog, TextField, Button, DialogContent } from "@mui/material";
import { loadAllProducts } from "../../utils/ajax";

interface EditProductProps {
  productId: string;
  product: ProductItem;
}

const EditProduct: React.FC<EditProductProps> = ({ productId, product }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState({
    id: "", // Change the type of the ID field to string
    title: "",
    description: "",
    images: [] as string[],
    brand: "",
    category: "",
    price: 0,
    rating: "",
    amount: "",
  });

  const fetchProduct = async (productId: string) => {
    try {
      const token = localStorage.getItem("token");

      // const response = await axios.get(
      //   `http://localhost:8080/product/${productId}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      // const productData = response.data; // Adjust this based on the API response structure

      setValues({
        id: productId,
        title: product.title,
        description: product.description,
        images: product.images,
        brand: product.brand,
        category: product.category,
        price: product.price,
        rating: product.rating,
        amount: product.amount,
      });

      setOpen(true); // Open the dialog after fetching the product
    } catch (error) {
      console.log("Error fetching product data", error);
    }
  };

  const handleOpen = () => {
    fetchProduct(productId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const { id, ...editedProduct } = values;

      console.log("Request URL:", `http://localhost:8080/product/${id}`);
      console.log("Request Body:", editedProduct);

      const response = await fetch(`http://localhost:8080/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, ...editedProduct }),
      });

      console.log("Response:", response);
      const data = await response.json();
      console.log("Response Data:", data);

      // Fetch the updated product data
      await fetchProduct(id);
      handleClose();
    } catch (error) {
      console.log("Error editing product", error);
    }
  };

  return (
    <Box>
      <Button onClick={handleOpen}>Edit Product</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            id="id"
            name="id"
            label="ID"
            variant="outlined"
            value={values.id}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
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
            value={values.images}
            onChange={handleChange}
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
            id="rating"
            name="rating"
            label="Rating"
            variant="outlined"
            value={values.rating}
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
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
          >
            Edit
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EditProduct;
