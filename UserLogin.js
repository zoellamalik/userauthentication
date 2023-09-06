import { TextField, Button, Box, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pic1 from "../../../images/pic1.png";
import "./Loginreg.css";
import UserRegistration from "./UserRegistration";
import axios from "axios";

const UserLogin = () => {
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
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login success", type: "success" });
      navigate("/dashboard");
    } else {
      setError({ status: true, msg: "All Fields Are Required", type: "error" });
    }
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "/login",
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <div className="center-image">
          <img src={pic1} alt="" width="150" height="150" />
        </div>
        <Box sx={{ maxWidth: 530 }}>
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
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" sx={{ mb: 1, px: 18 }}>
            Login
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
          <Button type="submit" variant="contained" sx={{ mt: 1, px: 10 }}>
            Continue with Google
          </Button>
        </Box>
        <Box textAlign="center" sx={{ mt: 2 }}>
          Don't you have an account?{" "}
          <NavLink to="/Registration">Register</NavLink>
        </Box>
      </Box>
    </>
  );
};

export default UserLogin;
