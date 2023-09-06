import { Typography, Container, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 8 }}>
        <Typography variant="h3" sx={{ color: '#2196F3', marginBottom: 3 }}>
          Contact Us
        </Typography>
        <Typography variant="body1">
          For further inquiries, please don't hesitate to reach out to us at <strong>LAMBDATHETA</strong>.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
