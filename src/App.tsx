import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductItem from "./pages/productItem";
import Header from "./components/header";
import Cart from "./pages/cart";
import BreadCrumbs from "./components/breadCrumbs";
import { Box } from "@mui/material";
import Footer from "./components/footer";
import Admin from "./admin";

function App() {
  const { pathname } = useLocation();
  const showBreadcrumbs = pathname !== "/";

  return (
    <Box className="">
      <Header />
      {/* <BreadCrumbs /> */}
      {showBreadcrumbs && <BreadCrumbs />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
