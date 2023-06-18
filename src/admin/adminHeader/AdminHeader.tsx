import React from "react";
import logo from "../../images/ecomlogo-removebg-preview.png";

import Login from "../../components/login";

const AdminHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff", //"#8080b2",
        height: "60px",
      }}
    >
      <img style={{ marginTop: "3px" }} src={logo} alt="" />
      <h1>Header</h1>
      <Login />
    </div>
  );
};

export default AdminHeader;
