import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return(
  <Stack
    direction="row"
    justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
    alignItems="center"
    sx={{
      gap: { xs: '20px', sm: '1000px' },
      mt: { sm: '32px', xs: '20px' },
      paddingX: '20px',
      backgroundColor: '#fff',
      // boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack direction="row" gap="20px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      <Link
        to="/home"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
          marginLeft: '20px',
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
        ContactUs
      </a>
      {/* <a onClick={() => navigate('/signup')} style={{ textDecoration: 'none', color: '#3A1212' , cursor:'pointer'}}>
        Login
      </a> */}
        <Link
        to="/signup"
        style={{ textDecoration: 'none', color: '#3A1212' , cursor:'pointer'}}
      >
        Login
      </Link>
    </Stack>
  </Stack>);
};

export default Navbar;
