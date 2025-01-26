import React from 'react';
import { teal } from '@mui/material/colors';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const primary = teal[500];
  const buttonColor = teal[200]; 

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: primary }} 
      >
        <Toolbar>
            <span>
                <h3>Jithuze Blog App</h3>
            </span>
            <div className='menu'>
            <Link to="/">
          <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: teal[300],
              },
            }}
          >
            Home
          </Button>
          </Link>
          <Link to="/add-blog">
          <Button
            sx={{
              color: 'white', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: teal[300],
              },
            }}
          >
            Add Blog
          </Button>
          </Link>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;