import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Box, Dialog, TextField, Button, DialogContent } from "@mui/material";
import { updateProduct } from "../../pages/Home/redux/actions";

interface EditProductProps {
  productId: string;
  product: ProductItem;
}

const EditProduct: React.FC<EditProductProps> = ({ productId, product }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState({
    id: "",
    title: "",
    description: "",
    images: [] as string[],
    brand: "",
    category: "",
    price: 0,
    rating: "",
    amount: "",
  });

  useEffect(() => {
    const storedProduct = localStorage.getItem("editedProduct");
    if (storedProduct) {
      setValues(JSON.parse(storedProduct));
      setOpen(true);
    }
  }, []);

  const fetchProduct = async (productId: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8080/product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const productData = response.data;
      setValues({
        id: productId,
        title: productData.title,
        description: productData.description,
        images: productData.images,
        brand: productData.brand,
        category: productData.category,
        price: productData.price,
        rating: productData.rating,
        amount: productData.amount,
      });
      setOpen(true);
    } catch (error) {
      console.log("Error fetching product data", error);
    }
  };

  const handleOpen = () => {
    fetchProduct(productId);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("editedProduct");
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
      await axios.put(`http://localhost:8080/product/${id}`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedProduct = {
        // id: productId, // Use the `productId` from the props
        ...values,
      };

      dispatch(updateProduct(updatedProduct)); // Dispatch the updateProduct action

      localStorage.setItem("editedProduct", JSON.stringify(values));
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
