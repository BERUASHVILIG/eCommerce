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
import Brand from "./pages/brand";
import Register from "./components/register";
import Login from "./components/login";

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
        <Route path="/brand/:brand" element={<Brand />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

// import React, { useEffect } from "react";
// import "./App.scss";
// import Home from "./pages/Home";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import ProductItem from "./pages/productItem";
// import Header from "./components/header";
// import Cart from "./pages/cart";
// import BreadCrumbs from "./components/breadCrumbs";
// import { Box } from "@mui/material";
// import Footer from "./components/footer";
// import Admin from "./admin";
// import Brand from "./pages/brand";
// import Register from "./components/register";
// import Login from "./components/login";

// import jwtDecode from "jwt-decode";
// import { isUserAuthenticated } from "./utils/auth";

// interface DecodedToken {
//   isAdmin: boolean;
//   // Add other properties from your token payload
// }

// const InnerRoute: React.FC = () => {
//   const { pathname } = useLocation();
//   const showBreadcrumbs = pathname !== "/";

//   return (
//     <Box className="">
//       <Header />
//       {/* <BreadCrumbs /> */}
//       {/* {showBreadcrumbs && <BreadCrumbs />}{" "} */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/productdetail/:id" element={<ProductItem />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/brand/:Brand" element={<Brand />} />
//         {/* <Route path="/admin" element={<Admin />} /> */}
//       </Routes>
//       <Footer />{" "}
//     </Box>
//   );
// };

// function App() {
//   const navigate = useNavigate();

//   // Add your admin state logic here
//   const token = localStorage.getItem("token");
//   let isAdminLoggedIn = false;

//   if (token) {
//     // Decode the token to get the payload
//     const decodedToken: DecodedToken = jwtDecode(token);
//     // Check if the isAdmin property is true
//     isAdminLoggedIn = decodedToken.isAdmin;
//   }

//   useEffect(() => {
//     if (!token) {
//       navigate("/admin");
//     }
//   }, [navigate, token]);

//   return (
//     <>
//       {/* <Header /> */}
//       <Routes>
//         <Route
//           path="/*"
//           element={isAdminLoggedIn ? <Admin /> : <InnerRoute />}
//         />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       // <Footer />
//     </>
//   );
// }

// export default App;
