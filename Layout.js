import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { CssBaseline } from "@mui/material";




const layout = () => {
  return <>
  <CssBaseline/> 
  <Navbar /> 
  <Outlet />
  
 
  

  
  </>;
};

export default layout

