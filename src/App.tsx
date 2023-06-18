import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductItem from "./pages/productItem";
import Header from "./components/header";
import Cart from "./pages/cart";
import BreadCrumbs from "./components/breadCrumbs";
import { Box } from "@mui/material";
import Footer from "./components/footer";
import Admin from "./admin/Admin";
import Brand from "./pages/brand";
import Register from "./components/register";
import Login from "./components/login";
import User from "./pages/user";
import jwtDecode, { JwtPayload } from "jwt-decode";
import AdminHeader from "./admin/adminHeader";
import AdminFooter from "./admin/adminFooter";

interface CustomJwtPayload extends JwtPayload {
  isAdmin?: boolean;
}

function App() {
  const navigate = useNavigate();
  const [isReloaded, setIsReloaded] = useState(false);

  const { pathname } = useLocation();
  const showBreadcrumbs = pathname !== "/";
  const token = localStorage.getItem("token");

  const decodedToken = token ? jwtDecode<CustomJwtPayload>(token) : {};
  const isAdmin = decodedToken.isAdmin;

  console.log("admin", isAdmin);

  useEffect(() => {
    if (token && isAdmin && !isReloaded) {
      setIsReloaded(true);
      navigate("/admin");
    }
  }, [token, isAdmin, isReloaded, navigate]);

  if (token && isAdmin) {
    return (
      <Box className="">
        <AdminHeader />
        {showBreadcrumbs && <BreadCrumbs />}
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Navigate to="/admin" />} />
        </Routes>
        <AdminFooter />
      </Box>
    );
  }

  return (
    <Box className="">
      <Header />
      {showBreadcrumbs && <BreadCrumbs />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/brand/:brand" element={<Brand />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
