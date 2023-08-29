import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Typography } from '@mui/material';

const LocalGroups = () => {
    const groups = [
        ["Fit", "Valsad", "www...."],
        ["Fit", "Valsad", "www...."],
        ["Fit", "Valsad", "www...."],
        ["Fit", "Valsad", "www...."],
        ["Fit", "Valsad", "www...."]
      ];

  return (
      <><Navbar /><Typography variant="h5" sx={{ fontSize: { lg: '22px', xs: '20px' } }} marginX={79} marginY={5} position="fixed">
      Local Groups
    </Typography><div style={{ display: 'flex', alignItems: 'center', marginTop: 95 }}>
        <Typography sx={{ fontSize: { lg: '18px', xs: '20px' } }} marginLeft={26}>
          Name
        </Typography>
        <Typography sx={{ fontSize: { lg: '18px', xs: '20px' } }} marginLeft={53}>
          City
        </Typography>
        <Typography sx={{ fontSize: { lg: '18px', xs: '20px' } }} marginLeft={55}>
          Link
        </Typography>
      </div><Box
        width="70%"
        display="flex"
        position="fixed"
        flexDirection='column'
        justifyContent="space-between" // Add this line to evenly distribute items
        paddingY={5}
        paddingX={2}
        marginX={25}
        backgroundColor="white"
      >
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {group.map((item, itemIndex) => (
                <Typography key={itemIndex} style={{ padding: '8px', marginRight: 410 }}>{item}</Typography>
              ))}
            </div>
          </div>
        ))}
      </Box><Footer /></>
  );
};

export default LocalGroups;
