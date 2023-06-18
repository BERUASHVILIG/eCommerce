// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import { TransitionProps } from "@mui/material/transitions";
// import { Alert, Box, Slide, Snackbar } from "@mui/material";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const Register = () => {
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);
//   const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleCloseSnackbar = () => {
//     setErrorSnackbarOpen(false);
//   };

//   const { values, handleChange, submitForm, isSubmitting } =
//     useFormik<UserRegister>({
//       initialValues: {
//         firstName: "",
//         lastName: "",
//         phoneNumber: "",
//         email: "",
//         password: "",
//       },
//       //   onSubmit: async (values: UserRegister) => {
//       //     try {
//       //       const response = await fetch("http://localhost:8080/register", {
//       //         method: "POST",
//       //         headers: {
//       //           "Content-Type": "application/json",
//       //         },
//       //         body: JSON.stringify(values),
//       //       });
//       //       const data = await response.text();
//       //       const parsedData = data ? JSON.parse(data) : null;
//       //       // Check if the response was successful
//       //       if (response.ok) {
//       //         const token = parsedData?.token;
//       //         const userId = parsedData?.userId;

//       //         // Store the token and userId in localStorage
//       //         localStorage.setItem("token", token);

//       //         console.log(parsedData);
//       //         setOpen((prev) => !prev);
//       //         // navigate("/");
//       //       } else {
//       //         console.error(response.status);
//       //         setErrorSnackbarOpen(true);
//       //       }
//       //     } catch (error) {
//       //       console.error("error", error);
//       //       setErrorSnackbarOpen(true);
//       //     }
//       //   },
//       // });
//       onSubmit: async (values: UserRegister) => {
//         try {
//           const response = await fetch("http://localhost:8080/register", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//           });

//           if (response.ok) {
//             const data = await response.json();
//             const token = data.token;

//             // Store the token in local storage
//             localStorage.setItem("token", token);

//             setOpen(false);
//             // Navigate to the desired page
//             navigate("/");
//           } else {
//             console.error(response.status);
//             setErrorSnackbarOpen(true);
//           }
//         } catch (error) {
//           console.error("error", error);
//           setErrorSnackbarOpen(true);
//         }
//       },
//     });
//   return (
//     <div>
//       <Button color="success" variant="contained" onClick={handleClickOpen}>
//         Register
//       </Button>
//       <Dialog
//         TransitionComponent={Transition}
//         open={open}
//         onClose={handleClickOpen}
//       >
//         <DialogTitle>Register</DialogTitle>

//         <Box sx={{ display: "flex", width: "100%" }}>
//           <Box sx={{ width: "50%" }}>
//             {/* <img
//               style={{ borderRadius: "15px", margin: "28px 15px" }}
//               width={"100%"}
//               height={"300px"}
//               src="https://www.legalzoom.com/sites/lz.com/files/styles/related_article/public/articles/understanding_the_copyright_registration_process.jpg"
//               alt="img"
//             /> */}
//           </Box>
//           <Box sx={{ width: "50%" }}>
//             <DialogContent>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="firstName"
//                 name="firstName"
//                 label="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//               />
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="lastName"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 label="lastName"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//               />
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={values.phoneNumber}
//                 onChange={handleChange}
//                 label="phoneNumber"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//               />
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="email"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 label="Email Address"
//                 type="email"
//                 fullWidth
//                 variant="outlined"
//               />
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="password"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 variant="outlined"
//               />
//             </DialogContent>
//           </Box>
//         </Box>
//         <DialogActions>
//           <Button onClick={handleClickOpen} disabled={isSubmitting}>
//             Cancel
//           </Button>
//           <Button onClick={submitForm} disabled={isSubmitting}>
//             Register
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Snackbar
//         autoHideDuration={2000}
//         open={errorSnackbarOpen}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity="error"
//           sx={{
//             width: "40%",
//             top: "64px", // Add top position
//             right: "24px", // Add right position
//             position: "fixed",
//             backgroundColor: "#d32f2f",
//             color: "#fff",
//             "& .MuiAlert-icon": {
//               color: "white", // Change icon color to white
//             },
//           }}
//         >
//           Error occurred during registration.
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default Register;

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

  const [open, setOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseSnackbar = () => {
    setErrorSnackbarOpen(false);
  };

  const { values, handleChange, submitForm, isSubmitting } =
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
          // Check if the response was successful
          if (response.ok) {
            const token = parsedData?.token;
            const userId = parsedData?.userId;

            // Store the token and userId in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            console.log(parsedData);
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
      <Button color="success" variant="contained" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog
        TransitionComponent={Transition}
        open={open}
        onClose={handleClickOpen}
      >
        <DialogTitle>Register</DialogTitle>

        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ width: "50%" }}>
            {/* <img
              style={{ borderRadius: "15px", margin: "28px 15px" }}
              width={"100%"}
              height={"300px"}
              src="https://www.legalzoom.com/sites/lz.com/files/styles/related_article/public/articles/understanding_the_copyright_registration_process.jpg"
              alt="img"
            /> */}
          </Box>
          <Box sx={{ width: "50%" }}>
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
          </Box>
        </Box>
        <DialogActions>
          <Button onClick={handleClickOpen} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button onClick={submitForm} disabled={isSubmitting}>
            Register
          </Button>
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
