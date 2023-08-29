import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo2 from '../assets/icons/instagram.png';
import Logo3 from '../assets/icons/facebook.png';

const Footer = () => (
  <Box
    bgcolor="#ffdb7f"
    width="100%"
    position="fixed"
    bottom={0}
    left={0}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    paddingY={2}
    paddingX={4}
  >
    <Typography variant="h5" sx={{ fontSize: { lg: '22px', xs: '20px' } }}>
      Fitness Circle
    </Typography>
    <div>
      <p style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: 'black', display: 'inline' }}>
        Contents:
      </p>
      <a href="https://example.com" style={{ marginLeft: '10px', textDecorationLine: 'underline', color: 'black', display: 'inline' }}>
        Reminder
      </a>
      <a href="https://example.com" style={{ marginLeft: '10px', textDecorationLine: 'underline', color: 'black', display: 'inline' }}>
        DietCharts
      </a>
      <a href="https://example.com" style={{ marginLeft: '10px', textDecorationLine: 'underline', color: 'black', display: 'inline' }}>
        Local Groups
      </a>
      <a href="https://example.com" style={{ marginLeft: '10px', textDecorationLine: 'underline', color: 'black', display: 'inline' }}>
        Trainer
      </a>
      <a href="https://example.com" style={{ marginLeft: '10px', textDecorationLine: 'underline', color: 'black', display: 'inline' }}>
        Feedback
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/your_instagram_handle/" style={{ marginRight: '10px' }}>
        <img src={Logo3} alt="Facebook" width="20px" height="20px" style={{ marginRight: '5px' }} />
        Facebook
      </a>
      <a href="https://www.facebook.com/your_facebook_page/">
        <img src={Logo2} alt="Instagram" width="20px" height="20px" style={{ marginRight: '5px' }} />
        Instagram
      </a>
    </div>
  </Box>
);

export default Footer;
