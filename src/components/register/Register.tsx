import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { TransitionProps } from "@mui/material/transitions";
import { Alert, Box, Slide, Snackbar } from "@mui/material";

import signUp from "../../images/register_image2-removebg-preview.png";

import * as Yup from "yup";

import {
  RegisterContainer,
  RegisterTextFields,
  RegisterImage,
  RegisterCencel,
  RegisterSubmit,
  MainRegister,
} from "./Register.Styles";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseSnackbar = () => {
    setErrorSnackbarOpen(false);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string()
      .min(9, "Phone Number must be at least 9 digits")
      .max(15, "Phone Number can't exceed 15 digits")
      .required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        "Password must contain at least one uppercase letter, one number, and be at least 6 characters long"
      ),
  });

  const { values, handleChange, submitForm, isSubmitting, errors } =
    useFormik<UserRegister>({
      initialValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values: UserRegister) => {
        try {
          // Perform any necessary validation before storing the password in local storage
          // ...

          // Store the password in local storage
          localStorage.setItem("password", values.password);
          console.log("parol", values.password);

          // Proceed with other registration logic

          const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await response.text();
          const parsedData = data ? JSON.parse(data) : null;
          if (response.ok) {
            setOpen((prev) => !prev);
            // navigate("/");
          } else {
            console.error(response.status);
            setErrorSnackbarOpen(true);
          }
        } catch (error) {
          console.error("error", error);
          setErrorSnackbarOpen(true);
        }
      },
    });

  return (
    <div>
      <MainRegister variant="contained" onClick={handleClickOpen}>
        {t("global.signUp")}
      </MainRegister>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={handleClickOpen}
      >
        <DialogTitle>Register</DialogTitle>

        <RegisterContainer sx={{ display: "flex", width: "100%" }}>
          <RegisterImage sx={{ width: "50%" }}>
            <img
              style={{
                borderRadius: "15px",
                margin: "28px 15px",
                objectFit: "contain",
              }}
              width={"100%"}
              height={"300px"}
              src={signUp}
              alt="img"
            />
          </RegisterImage>
          <RegisterTextFields sx={{ width: "50%" }}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                name="firstName"
                label="firstName"
                value={values.firstName}
                onChange={handleChange}
                type="text"
                fullWidth
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                autoFocus
                margin="dense"
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                label="lastName"
                type="text"
                fullWidth
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
              <TextField
                autoFocus
                margin="dense"
                id="phoneNumber"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                label="phoneNumber"
                type="text"
                fullWidth
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password}
              />
            </DialogContent>
          </RegisterTextFields>
        </RegisterContainer>
        <DialogActions>
          <RegisterCencel onClick={handleClickOpen} disabled={isSubmitting}>
            {t("global.cencel")}
          </RegisterCencel>
          <RegisterSubmit onClick={submitForm} disabled={isSubmitting}>
            {t("global.signIn")}
          </RegisterSubmit>
        </DialogActions>
      </Dialog>
      <Snackbar
        autoHideDuration={2000}
        open={errorSnackbarOpen}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{
            width: "40%",
            top: "64px", // Add top position
            right: "24px", // Add right position
            position: "fixed",
            backgroundColor: "#d32f2f",
            color: "#fff",
            "& .MuiAlert-icon": {
              color: "white", // Change icon color to white
            },
          }}
        >
          Error occurred during registration.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
