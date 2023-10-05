import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import caron from "../assets/imgs/caron.png";

const Header = () => {
  return (
    <Box textAlign="center" padding="2rem" display="flex" flexDirection="column" alignItems="center">
      <Box mb={2}> {/* Add margin to create spacing between Avatar and Typography */}
        <Avatar alt="Profile Picture" src={caron} sx={{ width: 80, height: 80 }} />
      </Box>
      <Box mt={2}> {/* Add margin to create spacing between Typography and Avatar */}
        <Typography variant="h4" gutterBottom>
          Caron Fire
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

