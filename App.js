import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Loginreg from "./components/pages/Auth/Loginreg";
import SendpwResetEmail from "./components/pages/Auth/SendpwResetEmail";
import Resetpw from "./components/pages/Auth/Resetpw";
import Dashboard from "./components/pages/Dashboard"; // Import the Dashboard component without curly braces
import UserRegistration from "./components/pages/Auth/UserRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Loginreg" element={<Loginreg />} />
          <Route path="sendpasswordresetemail" element={<SendpwResetEmail />} />
          <Route path="Registration" element={<UserRegistration />} />
          <Route path="reset" element={<Resetpw />} />    
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
