import { AppBar, Toolbar,Container, Typography, MenuItem,StyledEngineProvider, Button,Menu } from '@mui/material';
import { useState } from 'react';
import React from 'react'
import {  useNavigate } from 'react-router-dom';
import logo from '../logo2.png'

const Header = () => {
  let navigate =useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <div>
      <StyledEngineProvider injectFirst>
      <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>

                        <Typography variant="h6" className='title' onClick = {()=>navigate("/")}><img src={logo} alt="logo" className='logo'/> <span>Estatery</span></Typography>
                        
                        <Typography className='nav-item'>Rent</Typography>
                        <Typography className='nav-item'>Buy</Typography>
                        <Typography className='nav-item'>Sell</Typography>
                       
                        <Button
                        className='nav-item'
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          Dashboard
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        <Button
                        className='nav-item'
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          Resource
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}>Agent List</MenuItem>
                          <MenuItem onClick={handleClose}>Contact Info</MenuItem>
                          <MenuItem onClick={handleClose}>About us</MenuItem>
                        </Menu>
                        <div className='userButtons'>
                          <Button variant="outlined" className='login'>Login</Button>
                        <Button variant="contained" className='signup'>Sign Up</Button>
                        </div>
                        

                    </Toolbar>          
                </Container>
        </AppBar>
        </StyledEngineProvider>
    </div>
  )
}

export default Header;
