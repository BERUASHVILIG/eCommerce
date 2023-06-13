import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllProducts } from "../utils/ajax";
import {
  saveProducts,
  setPage,
  setTotalProducts,
} from "../pages/Home/redux/actions";

import AddProduct from "./addProduct";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { deleteProduct, editProduct } from "../pages/Home/redux/actions";
import { isUserAuthenticated } from "../utils/auth";
import EditProduct from "./editProduct";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products, page, totalProducts, product }: GlobalState =
    useAppSelector((state) => state.homeReducer);

  // useEffect(() => {
  //   if (!isUserAuthenticated()) navigate("/login");
  //   // if (isUserAuthenticated()) {
  //   //   window.location.href = '/';
  //   // }
  //   console.log("authend", isUserAuthenticated);
  // }, [isUserAuthenticated()]);

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`http://localhost:8080/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await dispatch(deleteProduct(product.id, id));
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getAllProducts(page);
        dispatch(saveProducts(data.products));
        dispatch(setTotalProducts(data.total_found));
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchProducts();
  }, [page]);

  const handleLoadMore = async () => {
    if (products.length < totalProducts) {
      const newPage = page + 10;
      try {
        const { data } = await getAllProducts(newPage);
        dispatch(saveProducts(data.products));
        dispatch(setTotalProducts(data.total_found));
        dispatch(setPage(newPage));
      } catch (error) {
        console.log("err", error);
      }
    }
  };

  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleEdit = (productId: string) => {
    // setSelectedProductId(productId);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit((prev) => !prev);
  };

  return (
    <TableContainer sx={{}}>
      <AddProduct />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="product">
                {product.id}
              </StyledTableCell>
              <TableCell>
                <img width="50px" src={product.images[0]} alt="Product" />
              </TableCell>
              <StyledTableCell align="right">{product.brand}</StyledTableCell>
              <StyledTableCell align="right">
                {product.title.length > 30
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                {parseFloat(product.price.toString()).toFixed(2)}₾
              </StyledTableCell>
              <StyledTableCell align="right">{product.amount}</StyledTableCell>
              <StyledTableCell align="right">
                <EditProduct product={product} productId={product.id} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => handleDelete(product.id)} color="error">
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px auto",
        }}
        variant="contained"
        onClick={handleLoadMore}
      >
        Load more
      </Button>
    </TableContainer>
  );
};

export default Admin;
