import React from 'react';
import { Button, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    border: 'none',
    height: '60px',
    background: 'none',
    padding: '0 60px',
    color: '#000000',
    fontSize: '24px',
    outline: 'none',
    position: 'relative',
    '&:before': {
      content: '""',
      width: '85%',
      height: '30px',
      display: 'block',
      borderTop: '2px solid',
      borderRight: '2px solid',
      position: 'absolute',
      right: 0,
      top: 0,
    },
    '&:after': {
      content: '""',
      width: '85%',
      height: '30px',
      display: 'block',
      borderBottom: '2px solid',
      borderLeft: '2px solid',
      position: 'absolute',
      left: 0,
      bottom: 0,
    },
    '& span': {
      display: 'block',
    },
    '& span:before': {
      content: '""',
      width: '38px',
      height: '2px',
      background: '#000',
      position: 'absolute',
      left: '-5px',
      top: '14px',
      transform: 'rotate(-46deg)',
    },
    '& span:after': {
      content: '""',
      width: '38px',
      height: '2px',
      background: '#000',
      position: 'absolute',
      right: '-5px',
      bottom: '14px',
      transform: 'rotate(-46deg)',
    },
    '&:hover': {
      color: 'red',
      '&:before, &:after': {
        borderColor: 'red',
      },
      '& span:before, & span:after': {
        background: 'red',
      },
    },
  },
}));

const StyledButton = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} {...props}>
      <span>{children}</span>
    </Button>
  );
};

export default StyledButton;
