import React from "react";
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
import { Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Register = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const { values, handleChange, handleSubmit, submitForm } =
    useFormik<UserRegister>({
      initialValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
      },
      onSubmit: async (values: UserRegister) => {
        try {
          const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data);
          } else {
            console.error(response.status);
          }
        } catch (error) {
          console.error(error);
        }
        console.log(values);
        setOpen((prev) => !prev);
        // navigate("/");
      },
    });

  return (
    <div>
      <Button color="success" variant="contained" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={handleClickOpen}
      >
        <DialogTitle>Register</DialogTitle>
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen}>Cancel</Button>
          <Button onClick={submitForm}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
