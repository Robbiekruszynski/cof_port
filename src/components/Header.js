import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import caron from "../assets/imgs/caron.png";

const Header = () => {
  return (
    <Box textAlign="center" padding="2rem" display="flex" flexDirection="column" alignItems="center">
      <Avatar alt="Profile Picture" src={caron} sx={{ width: 80, height: 80 }} />
      <Typography variant="h4" gutterBottom>
        Caron Schaller 
      </Typography>
    </Box>
  );
};

export default Header;
