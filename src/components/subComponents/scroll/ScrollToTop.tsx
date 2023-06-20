import { Box, Button, Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";

const BacktoTop = () => {
  const [backtoTop, setBacktoTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTop(true);
      } else {
        setBacktoTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box>
      {backtoTop && (
        <Tooltip title="Scroll to Top" placement="top">
          <button
            onClick={scrollUp}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              width: "40px",
              height: "40px",
              backgroundColor: "#ff5000",
              border: "3px solid #ff5000",
              borderRadius: "8px",
              right: "20px",
              bottom: "50px",
              fontSize: "50px",
              cursor: "pointer",

              // clear: "both",
              // backgroundColor: "#ff5000",
              // float: "right",
              // marginBottom: "7px",
              // cursor: "pointer",
              // color: "#fff",
              // textAlign: "center",
              // display: "flex",
            }}
          >
            <img
              style={{ width: "10px", margin: "0 auto" }}
              src="https://zoommer.ge/themes/zoommer/assets/images/white_up.svg"
              alt=""
            />
          </button>
        </Tooltip>
      )}
    </Box>
  );
};

export default BacktoTop;
