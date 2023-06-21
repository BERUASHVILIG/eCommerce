import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  TextField,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TransitionProps } from "@mui/material/transitions";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Token } from "@mui/icons-material";

import loginLogo from "../../images/login image2.png";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CustomJwtPayload extends JwtPayload {
  isAdmin?: boolean;
}

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

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
          setIsAuthenticated(true); // Set the authentication status to true
          window.location.reload(); // Reload the page
        } else {
          console.log("status", res.status);
        }
      } catch (error) {
        console.log("error", error);
      }
      setOpen((prev) => !prev);
      console.log("values", values);
    },
  });

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set the authentication status to false
    localStorage.removeItem("token");
    localStorage.removeItem("User");
    navigate("/");
    window.location.reload(); // Reload the page
  };

  const handleShowProfile = () => {
    navigate("/user");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleToggleSettings = () => {
    setShowSettings((prev) => !prev);
  };
  const [isReloaded, setIsReloaded] = useState(false);

  const token = localStorage.getItem("token");

  const decodedToken = token ? jwtDecode<CustomJwtPayload>(token) : {};
  const isAdmin = decodedToken.isAdmin;

  const handleAdminShow = () => {
    useEffect(() => {
      if (token && isAdmin && !isReloaded) {
        setIsReloaded(true);
        // navigate("/admin");
      }
    }, [token, isAdmin, isReloaded]);
  };

  return (
    <Box>
      {isAuthenticated ? (
        // Render the authenticated settings menu
        <Box sx={{ position: "relative" }}>
          <Button variant="contained" onClick={handleToggleSettings}>
            <AccountCircleIcon />
          </Button>
          {showSettings && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 15,
                top: "40px",
                right: 0,
                width: "150px",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <MenuItem>
                <Typography color="success" onClick={handleLogout}>
                  Logout
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography color="success" onClick={handleShowProfile}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography color="success">Settinges</Typography>
              </MenuItem>
            </Box>
          )}
        </Box>
      ) : (
        // Render the login button and dialog
        <>
          <Button variant="contained" onClick={handleOpen}>
            Login
          </Button>
          <Dialog
            TransitionComponent={Transition}
            open={open}
            onClose={handleOpen}
          >
            <DialogTitle>Login</DialogTitle>
            <DialogContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <img src={loginLogo} alt="" />
              <Box>
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
                  <Button onClick={handleOpen}>Cancel</Button>
                  <Button
                    onClick={() => {
                      submitForm();
                      handleAdminShow();
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </>
      )}
    </Box>
  );
};

export default Login;
