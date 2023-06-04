// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { Breadcrumbs, Typography } from "@mui/material";
// const BreadCrumbs = () => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   const pathnames = pathname.split("/").filter((x) => x);
//   const handleHome = () => {
//     navigate("/");
//   };
//   return (
//     <Breadcrumbs
//       sx={{
//         marginTop: "90px",
//         height: "40px",
//         backgroundColor: "orange",
//         borderRadius: "12px",
//         m: 3,
//       }}
//     >
//       {pathnames.length > 0 ? (
//         <Typography sx={{ cursor: "pointer" }} onClick={handleHome}>
//           Home
//         </Typography>
//       ) : (
//         <Typography> Home </Typography>
//       )}
//       {pathnames.map((name, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathnames.length - 1;
//         return isLast ? (
//           <Typography sx={{ cursor: "pointer" }} key={name}>
//             {name}
//           </Typography>
//         ) : (
//           <Link to={`${routeTo}`} key={name}>
//             {name}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// };

// export default BreadCrumbs;

import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

const BreadCrumbs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);
  const handleHome = () => {
    navigate("/");
  };

  return (
    <Breadcrumbs
      sx={{
        marginTop: "90px",
        height: "40px",
        backgroundColor: "orange",
        borderRadius: "12px",
        m: 3,
      }}
    >
      {pathnames.length > 0 ? (
        <Typography sx={{ cursor: "pointer" }} onClick={handleHome}>
          Home
        </Typography>
      ) : (
        <Typography>Home</Typography>
      )}
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;

        if (name === "productdetail") {
          return null; // Skip the "productdetail" segment
        }

        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

        return isLast ? (
          <Typography sx={{ cursor: "pointer" }} key={name}>
            {name}
          </Typography>
        ) : (
          <Link to={routeTo} key={name}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
