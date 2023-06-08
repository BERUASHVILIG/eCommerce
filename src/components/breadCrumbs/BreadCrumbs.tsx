import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Box, Breadcrumbs, Typography } from "@mui/material";

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
        m: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "40px",

          backgroundColor: "blue",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
        }}
      >
        <img
          width="25px"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYyLjI0NiA2Mi4yNDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYyLjI0NiA2Mi4yNDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNTcuNTQ4LDQ1LjEwN0gxOS45NjVjLTIuNTk1LDAtNC42OTksMi4xMDUtNC42OTksNC43MDFjMCwyLjU5NCwyLjEwNCw0LjY5OSw0LjY5OSw0LjY5OWgzNy41ODMgICBjMi41OTQsMCw0LjY5OC0yLjEwNSw0LjY5OC00LjY5OUM2Mi4yNDYsNDcuMjEzLDYwLjE0Miw0NS4xMDcsNTcuNTQ4LDQ1LjEwN3oiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik01Ny41NDgsMjYuNDAySDE5Ljk2NWMtMi41OTUsMC00LjY5OSwyLjEwNC00LjY5OSw0LjdjMCwyLjU5NSwyLjEwNCw0LjY5OSw0LjY5OSw0LjY5OWgzNy41ODMgICBjMi41OTQsMCw0LjY5OC0yLjEwNCw0LjY5OC00LjY5OVM2MC4xNDIsMjYuNDAyLDU3LjU0OCwyNi40MDJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNMTkuOTY1LDE3LjA5NmgzNy41ODNjMi41OTQsMCw0LjY5OC0yLjEwNCw0LjY5OC00LjdzLTIuMTA0LTQuNjk5LTQuNjk4LTQuNjk5SDE5Ljk2NWMtMi41OTUsMC00LjY5OSwyLjEwNC00LjY5OSw0LjY5OSAgIEMxNS4yNjYsMTQuOTkxLDE3LjM3LDE3LjA5NiwxOS45NjUsMTcuMDk2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPGNpcmNsZSBjeD0iNC43NyIgY3k9IjEyLjQzOSIgcj0iNC43NyIgZmlsbD0iI0ZGRkZGRiIvPgoJPGNpcmNsZSBjeD0iNC43NyIgY3k9IjMxLjEwMiIgcj0iNC43NjkiIGZpbGw9IiNGRkZGRkYiLz4KCTxjaXJjbGUgY3g9IjQuNzciIGN5PSI0OS44MDciIHI9IjQuNzciIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          alt=""
        />
        <Typography>Navigation</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "40px",
          backgroundColor: "orange",
          borderBottomRightRadius: "12px",
          borderTopRightRadius: "12px",
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
      </Box>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
