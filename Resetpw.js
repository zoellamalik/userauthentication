import { Box, Container, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Resetpw = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: " ",
    type: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };

    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-reset-form").reset();
        setError({
          status: true,
          msg: "Password Reset Successfully. Redirecting to Login Page...",
          type: "success",
        });
        setTimeout(() => {
          navigate("/loginreg"); // Use navigate with a lowercase "n"
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Don't Match",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "All Fields Are Required",
        type: "error",
      });
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
        <h1>Reset Password</h1>
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="New Password"
          type="password"
          sx={{ marginBottom: 1 }}
        />
        <TextField
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation" 
          label="New Confirm Password"
          type="password" 
          sx={{ marginBottom: 1 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Save
        </Button>

        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </Container>
  );
};

export default Resetpw;
