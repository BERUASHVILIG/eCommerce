import React, { useRef } from "react";
import { TextField, Box, Typography } from "@mui/material";

import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_kj8yako",
        "template_3pcwt1f",
        form.current,
        "rsTiUGo_PMAmEpLvE"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", color: "#7a1dff" }}
      >
        Contact
      </Typography>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          flexDirection: "column",
          backgroundColor: "pruple",
          height: "400px",
        }}
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Your Name</label>
        <TextField type="text" name="user_name" />
        <label>Email</label>
        <TextField type="email" name="user_email" />
        <label>Message</label>
        <TextField name="message" />
        <input
          style={{
            backgroundColor: "#7a1dff",
            color: "white",
            marginTop: "10px",
            padding: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "6px",
            border: "2px solid #7a1dff",
          }}
          type="submit"
          value="Send"
        />
      </form>
    </Box>
  );
};

export default Contact;
