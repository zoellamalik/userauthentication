import React, { useState } from 'react';
import { Card, Typography, Tabs, Tab, Box } from '@mui/material';
import pic1 from '../../../images/pic1.png';
import UserLogin from './UserLogin';
import './Loginreg.css'; // Import your custom CSS file
import UserRegistration from './UserRegistration';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const Loginreg = () => {
  const [value, setvalue] = useState(0);
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  
  return (
    <div className='loginreg-container'>
      <Card className='loginreg-card'>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              textColor='primary'
              indicatorColor='primary'
              onChange={handleChange}
            >
              <Tab
                label='Login'
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
              />
              <Tab
                label='Registration'
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <UserLogin />
          </TabPanel>
          <TabPanel value={value} index={1}>
          <UserRegistration/>
          </TabPanel>
        </Box>
      </Card>
    </div>
  );
};

export default Loginreg;
