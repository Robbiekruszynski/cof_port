import React from 'react';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';
import './LinkCard.css'; // Import the CSS file

const LinkCard = ({ title, url }) => {
  return (
    <Card
      sx={{
        width: '30%',
        marginBottom: '1rem',
        color: 'white',
        backgroundColor: 'black',
        transition: 'transform 0.3s ease-in-out',
        borderRadius: '0px',
      }}
    >
      <CardActionArea
        className="custom-button" // Add the custom-button class to apply the CSS styles
        onClick={() => window.open(url, '_blank')}
      >
        <CardContent sx={{ position: 'relative' }}>
          <Typography variant="h6" align="center" component="span">
            {title}
          </Typography>
          <span className="custom-span"></span> {/* Add the custom-span class */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LinkCard;













