import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

type UserInfo = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password?: string;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
});

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInfo | []>([]);
  const [editUser, setEditUser] = useState<boolean>(false);

  useEffect(() => {
    const showProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await fetch("http://localhost:8080/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            setUser(data);

            console.log("Profile data", data);
          } else {
            console.log("Failed to fetch profile", res.status);
          }
        } catch (error) {
          console.log("Error fetching profile", error);
        }
      }
    };

    showProfile();
  }, []);

  const handleSaveUser = async (values: UserInfo) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values), // Send the updated user data in the request body
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        navigate("/");
        console.log("Profile data", data);
      } else {
        console.log("Failed to update profile", res.status);
      }
    } catch (error) {
      console.log("Error updating profile", error);
    }
    setEditUser(false); // Reset the edit mode
  };

  const handleEditUser = () => {
    setEditUser(true);
  };

  return (
    <Box>
      {!editUser ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {/* <Typography>ID: {user.id}</Typography> */}
          <Typography>Email: {user.email}</Typography>
          <Typography>First Name: {user.firstName}</Typography>
          <Typography>Last Name: {user.lastName}</Typography>
          <Typography>Phone: {user.phoneNumber}</Typography>
          <Typography>password: {user.password}</Typography>
          <Button
            sx={{ backgroundColor: "#7a1dff", color: "white" }}
            onClick={handleEditUser}
          >
            Edit user
          </Button>
        </Box>
      ) : (
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          onSubmit={handleSaveUser}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <div>
              <Field name="firstName">
                {({ field, form }) => (
                  <TextField
                    label="First Name"
                    {...field}
                    error={form.errors.firstName && form.touched.firstName}
                    helperText={
                      form.errors.firstName &&
                      form.touched.firstName &&
                      form.errors.firstName
                    }
                  />
                )}
              </Field>
            </div>

            <div>
              <Field name="lastName">
                {({ field, form }) => (
                  <TextField
                    label="Last Name"
                    {...field}
                    error={form.errors.lastName && form.touched.lastName}
                    helperText={
                      form.errors.lastName &&
                      form.touched.lastName &&
                      form.errors.lastName
                    }
                  />
                )}
              </Field>
            </div>

            <div>
              <Field name="email">
                {({ field, form }) => (
                  <TextField
                    label="Email"
                    {...field}
                    error={form.errors.email && form.touched.email}
                    helperText={
                      form.errors.email &&
                      form.touched.email &&
                      form.errors.email
                    }
                  />
                )}
              </Field>
            </div>

            <div>
              <Field name="phoneNumber">
                {({ field, form }) => (
                  <TextField
                    label="Phone Number"
                    {...field}
                    error={form.errors.phoneNumber && form.touched.phoneNumber}
                    helperText={
                      form.errors.phoneNumber &&
                      form.touched.phoneNumber &&
                      form.errors.phoneNumber
                    }
                  />
                )}
              </Field>
            </div>
            {/* <div>
              <Field name="password">
                {({ field, form }) => (
                  <TextField
                    label="password"
                    {...field}
                    error={form.errors.password && form.touched.password}
                    helperText={
                      form.errors.password &&
                      form.touched.password &&
                      form.errors.password
                    }
                  />
                )}
              </Field>
            </div> */}

            <Button onClick={() => setEditUser(false)}>Cancel</Button>
            <Button
              sx={{ backgroundColor: "#7a1dff", color: "#fff" }}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Formik>
      )}
    </Box>
  );
};

export default User;
