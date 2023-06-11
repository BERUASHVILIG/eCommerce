import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  TextField,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
  const [open, setopen] = useState<boolean>(false);
  const { handleChange, submitForm, values } = useFormik<UserLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: UserLogin) => {
      try {
        const res = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (res.ok) {
          const data = await res.json();
          console.log("data", data.AccessToken);
          localStorage.setItem("token", data.AccessToken);
          localStorage.setItem("User", JSON.stringify(data.User));
        } else {
          console.log("status", res.status);
        }
      } catch (error) {
        console.log("error", error);
      }
      setopen((prev) => !prev);
      console.log("values", values);
    },
  });

  const handleOpen = () => {
    setopen((prev) => !prev);
  };
  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Login
      </Button>
      <Dialog TransitionComponent={Transition} open={open} onClose={handleOpen}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            id="email"
            name="email"
            label="Email"
            margin="dense"
            value={values.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            label="password"
            margin="dense"
            value={values.password}
            onChange={handleChange}
            fullWidth
          />
          <Box>
            <Button onClick={handleOpen}>Cencel</Button>
            <Button onClick={submitForm}>Login</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Login;
