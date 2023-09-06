import { Typography, Container, Paper } from "@mui/material";

const Home = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 8 }}>
        <Typography variant="h3" sx={{ color: '#2196F3', marginBottom: 3 }}>
          Welcome to Our Authentication System
        </Typography>
        <Typography variant="body1">
          Authentication is the process of validating if a person is who they say they are.
          <br /><br />
          In the authentication process, a person has to prove their identity to gain access to a resource. A security system seeks to answer the question: Is this person who they claim to be? Once the system ensures the person is who they say they are, the person is authenticated and gains access to a resource.
          <br /><br />
          To prove your identity, you may use:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Password – a series of characters you must provide to gain access.</Typography>
          </li>
          <li>
            <Typography variant="body1">Authenticator App – an application you install on your smartphone and then use to identify yourself to a system or another application.</Typography>
          </li>
          <li>
            <Typography variant="body1">Biometrics – a fingerprint or facial recognition to prove your identity.</Typography>
          </li>
        </ul>
        <Typography variant="body1">
          Passwords can be:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">pre-defined (e.g., the PIN associated with your debit card)</Typography>
          </li>
          <li>
            <Typography variant="body1">one-time (e.g., a one-time password sent via an SMS message)</Typography>
          </li>
        </ul>
      </Paper>
    </Container>
  );
};

export default Home;

