import { Box, Container, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";

const SendPwResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: " ",
    type: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    
    };
    if (actualData.email) {
      console.log(actualData);
      document.getElementById("password-reset-form").reset();
      setError({ status: true, msg: "Password Reset Email Sent. Check Your Email ! ", type: "success" });
    } else {
      setError({ status: true, msg: "please Provide Valid Email", type: "error" });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh", // Adjust the height as needed
          gap: 2,
          padding: 2,
        }}
        id="password-reset-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Send
        </Button>

        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </Container>
  );
};

export default SendPwResetEmail;
