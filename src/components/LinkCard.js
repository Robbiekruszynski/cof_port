import React from 'react';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';

const LinkCard = ({ title, url }) => {
  return (
    <Card
      sx={{
        marginBottom: '1rem',
        color: 'white', // Text color set to white
        backgroundColor: 'black',
        transition: 'transform 0.3s ease-in-out',
        borderRadius: '0px',
        '&:hover': {
          transform: 'scale(1.1)',
          color: 'red',
        },
      }}
    >
      <CardActionArea
        sx={{
          height: '60px',
          background: 'none',
          border: 'none',
          padding: '0 60px',
          color: 'white', // Text color set to white
          fontSize: '24px',
          outline: 'none',
          position: 'relative',
          display: 'flex', // Added for centering text
          alignItems: 'center', // Center text vertically
          justifyContent: 'center', // Center text horizontally
          '&:before': {
            content: '""',
            width: '85%',
            height: '30px',
            display: 'block',
            borderTop: '2px solid white', // Border color set to white
            borderRight: '2px solid white', // Border color set to white
            position: 'absolute',
            right: 0,
            top: 0,
          },
          '&:after': {
            content: '""',
            width: '85%',
            height: '30px',
            display: 'block',
            borderBottom: '2px solid white', // Border color set to white
            borderLeft: '2px solid white', // Border color set to white
            position: 'absolute',
            left: 0,
            bottom: 0,
          },
          '&:hover': {
            color: 'red',
            '&:before, &:after': {
              borderColor: 'red',
            },
          },
        }}
        onClick={() => window.open(url, '_blank')}
      >
        <CardContent sx={{ position: 'relative' }}>
          <Typography variant="h6" align="center" component='span'>
            {title}
          </Typography>
          <span sx={{
            '&:before': {
              content: '""',
              width: '38px',
              height: '2px',
              background: 'white', // Background color set to white
              position: 'absolute',
              left: '-5px',
              top: '14px',
              transform: 'rotate(-46deg)',
            },
            '&:after': {
              content: '""',
              width: '38px',
              height: '2px',
              background: 'white', // Background color set to white
              position: 'absolute',
              right: '-5px',
              bottom: '14px',
              transform: 'rotate(-46deg)',
            },
            '&:hover:before, &:hover:after': {
              background: 'red',
            },
          }}></span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LinkCard;













