import { AppBar,Box,Toolbar,Typography,Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return <>
 <Box sx={{flexGrow:1}}> 
 <AppBar position="static" color="primary">
 <Toolbar>
 <Typography variant='h5' component="div" sx={{flexGrow:1}}>
 Lambda-Theta
 </Typography>
 <Button component={NavLink} to='/' style={({ isActive }) => {return {backgroundColor: isActive ? 'black':''}}} sx={{color:"white", textTransform: 'none'}}>Home</Button>
 <Button component={NavLink} to='/contact' style={({ isActive }) => {return {backgroundColor: isActive ? 'black':''}}} sx={{color:"white", textTransform: 'none'}}>Contact</Button>

 <Button component={NavLink} to='/Loginreg' style={({ isActive }) => {return {backgroundColor: isActive ? 'black':''}}} sx={{color:"white", textTransform: 'none'}}>Login/registration</Button>
 

 </Toolbar>
 </AppBar>
 </Box>

 
 </>;
  
};

export default navbar