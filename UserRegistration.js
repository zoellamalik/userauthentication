import { TextField, FormControlLabel, Button, Checkbox, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pic1 from '../../../images/pic1.png';

const UserRegistration = () => {
  const [error, setError] = useState({
    status: false,
    msg: " ",
    type: " ",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"), // Capture Confirm Password
      tc: data.get('tc'),
    };

    if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        setError({ status: true, msg: "Registration Successful", type: 'success' });
        navigate('/Dashboard');
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' });
      }
    } else {
      setError({ status: true, msg: "All Fields Are Required", type: "error" });
    }
  };

  return (
    <Box
    component="form"
    noValidate
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center form elements horizontally
      maxWidth: 400, // Adjust the maximum width as needed
      margin: '0 auto', // Center the form horizontally on the page
    }}
      id="registration-form"
      onSubmit={handleSubmit}
    >
      <div className="center-image">
        <img src={pic1} alt="Your Image" width="150" height="150" />
      </div>
      <Box sx={{ maxWidth: 530 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
          sx={{ marginBottom: -1 }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          sx={{ marginBottom: 1 }}
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          sx={{ marginBottom: 1 }}
        />
        <TextField
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password" // Remove the extra space
          sx={{ marginBottom: 1 }}
        />
        <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to terms and conditions." />
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      <Box textAlign="center" sx={{ mt: 3 }}>
        <Button type="submit" variant="contained" sx={{ mb: 1, px: 18 }}>
          Join
        </Button>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ my: 1 }}
        >
          <hr style={{ width: "100%", borderColor: "rgba(0,0,0,0.2)" }} />
          <Box px={2}>or</Box>
          <hr style={{ width: "100%", borderColor: "rgba(0,0,0,0.2)" }} />
        </Box>
      </Box>

      <Box textAlign="center" sx={{ mt: 2 }}>
        Already have an account? <NavLink to="/login">SignIn</NavLink>
      </Box>
    </Box>
  );
};

export default UserRegistration;
