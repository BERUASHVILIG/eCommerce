import { Box, Button, Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

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
              backgroundColor: "#7a1dff",
              border: "3px solid #7a1dff",
              borderRadius: "8px",
              right: "20px",
              bottom: "50px",
              fontSize: "50px",
              cursor: "pointer",
            }}
          >
            <KeyboardArrowUpSharpIcon style={{ color: "#ffffff" }} />
          </button>
        </Tooltip>
      )}
    </Box>
  );
};

export default BacktoTop;
