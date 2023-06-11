// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { Box, Dialog, TextField, Button, DialogContent } from "@mui/material";
// import { loadAllProducts } from "../../utils/ajax";

// interface EditProductProps {
//   productId: string;
// }

// const EditProduct: React.FC<EditProductProps> = ({ productId }) => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [values, setValues] = useState({
//     id: "",
//     title: "",
//     description: "",
//     images: [],
//     brand: "",
//     category: "",
//     price: "",
//     rating: "",
//     amount: "",
//   });

//   const { handleChange, submitForm } = useFormik({
//     initialValues: values,
//     onSubmit: async (values) => {
//       try {
//         const token = localStorage.getItem("token");
//         const { id, ...editedProduct } = values;

//         await loadAllProducts.put(
//           `http://localhost:8080/product/${id}`,
//           editedProduct,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//       } catch (error) {
//         console.log("Error editing product", error);
//       }
//     },
//   });

//   useEffect(() => {
//     const fetchProduct = async (productId: string) => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           `http://localhost:8080/product/${productId}`,

//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("id", productId);

//         const productData = response.data; // Adjust this based on the API response structure

//         setValues({
//           id: productData.id,
//           title: productData.title,
//           description: productData.description,
//           images: productData.images,
//           brand: productData.brand,
//           category: productData.category,
//           price: productData.price,
//           rating: productData.rating,
//           amount: productData.amount,
//         });
//       } catch (error) {
//         console.log("Error fetching product data", error);
//       }
//     };

//     fetchProduct(productId);
//   }, [productId]);

//   const handleOpen = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <Box>
//       <Button onClick={handleOpen}>Edit Product</Button>
//       <Dialog open={open} onClose={handleOpen}>
//         <DialogContent>
//           <TextField
//             id="id"
//             name="id"
//             label="ID"
//             variant="outlined"
//             value={values.id}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="title"
//             name="title"
//             label="Title"
//             variant="outlined"
//             value={values.title}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="description"
//             name="description"
//             label="Description"
//             variant="outlined"
//             value={values.description}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="images"
//             name="images"
//             label="Images"
//             variant="outlined"
//             value={values.images}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="brand"
//             name="brand"
//             label="Brand"
//             variant="outlined"
//             value={values.brand}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="category"
//             name="category"
//             label="Category"
//             variant="outlined"
//             value={values.category}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="price"
//             name="price"
//             label="Price"
//             variant="outlined"
//             value={values.price}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="rating"
//             name="rating"
//             label="Rating"
//             variant="outlined"
//             value={values.rating}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />
//           <TextField
//             id="amount"
//             name="amount"
//             label="Amount"
//             variant="outlined"
//             value={values.amount}
//             onChange={handleChange}
//             fullWidth
//             margin="dense"
//           />

//           <Button
//             onClick={submitForm}
//             type="submit"
//             fullWidth
//             variant="contained"
//           >
//             Edit
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default EditProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Dialog, TextField, Button, DialogContent } from "@mui/material";
import { loadAllProducts } from "../../utils/ajax";

interface EditProductProps {
  productId: string;
}

const EditProduct: React.FC<EditProductProps> = ({ productId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState({
    id: "",
    title: "",
    description: "",
    images: [],
    brand: "",
    category: "",
    price: "",
    rating: "",
    amount: "",
  });

  useEffect(() => {
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

        const productData = response.data; // Adjust this based on the API response structure

        setValues({
          id: productData.id,
          title: productData.title,
          description: productData.description,
          images: productData.images,
          brand: productData.brand,
          category: productData.category,
          price: productData.price,
          rating: productData.rating,
          amount: productData.amount,
        });
      } catch (error) {
        console.log("Error fetching product data", error);
      }
    };

    fetchProduct(productId);
  }, [productId]);

  const handleOpen = () => {
    setOpen(true);
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

      await loadAllProducts.put(
        `http://localhost:8080/product/${id}`,
        editedProduct,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Optionally, you can update the UI or perform any other actions after successful submission

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
