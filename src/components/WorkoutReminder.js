import { Stack } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const WorkoutReminder = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAddReminder = () => {
    console.log(`Added Reminder: Name - ${name}, Time - ${time}`);
  };

  return (
    <>
      <Stack>
        <Navbar />
        <div style={{ position: 'absolute', top: '35%', left: '15%', transform: 'translate(-50%, -50%)', width: '300px', height: '250px', border: '1px solid #000', padding: '20px' }}>
          <label htmlFor="Reminder" style={{ fontSize: '30px' }}>Add Reminder</label>
          <div>
            <label htmlFor="name">Reminder Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div style={{marginTop:'10px'}}>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" value={time} onChange={handleTimeChange} />
          </div>
          <button onClick={handleAddReminder} style={{marginTop:'10px'}}>Add Reminder</button>
        </div>
      </Stack>
      <Footer />
    </>
  );
};

export default WorkoutReminder;
