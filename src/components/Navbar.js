import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (data.status === 'ok') {
        const user = data.data;
        setUserName(`${user.fname} ${user.lname}`);
      }
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserName('');
    setAnchorEl(null);
    history.push('/login');
  };

  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        mt: { sm: '32px', xs: '20px' },
        px: '20px',
        fontFamily: 'Alegreya',
        fontSize: '24px',
        flexDirection: { xs: 'column', sm: 'row' }, // Responsive flex direction
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: '48px', height: '48px', margin: '0px 20px' }}
          />
        </Link>
        <Link
          to="/home"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
            marginRight: '20px',
            marginLeft: '1400px'
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', marginRight: '20px' }}>
          ContactUs
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {userName ? (
          <div style={{ marginRight: '20px' }}>
            <Typography
              fontFamily="Alegreya"
              fontSize="24px"
              alignContent="center"
              sx={{ color: '#3A1212', textTransform: 'capitalize', cursor: 'pointer' }}
              onClick={handleMenuOpen}
            >
              {userName}
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              getContentAnchorEl={null}
            >
              <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            to="/signup"
            style={{
              textDecoration: 'none',
              color: '#3A1212',
              cursor: 'pointer',
              marginRight: '20px',
            }}
          >
            Login
          </Link>
        )}
      </div>
    </Toolbar>
  );
};

export default Navbar;
