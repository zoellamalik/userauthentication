import { Button, CssBaseline, Grid, Typography, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/loginreg');
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 8, backgroundColor: '#2196F3', color: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Welcome, Zoella Malik
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Email: zoailamalik20@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}></Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleLogout}
          sx={{ mt: 3, backgroundColor: '#ffffff', color: '#2196F3' }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
};

export default Dashboard;
