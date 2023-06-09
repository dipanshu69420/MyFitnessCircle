import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <><Box>
      <Navbar />
      <HeroBanner />
    </Box><Footer /></>
  );
};

export default Home;