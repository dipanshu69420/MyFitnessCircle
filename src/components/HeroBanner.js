import React from 'react';
import { Box, Stack} from '@mui/material';
import '../assets/css/styles.css';
import { Navigate, useNavigate } from 'react-router-dom';


const HeroBanner = () => {
  const navigate = useNavigate();
  return (
  <Box position="relative" p="20px" width={"100%"} height={"650px"} color={"transparent"}>
      <Stack 
      marginTop={"150px"}
      marginLeft={"125px"}
      direction={"row"}
      width={"1600px"}>
      <div class="card" style={{ color: 'white', padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Reminder</h2>
          <p class="card-body">Don't miss your daily workout schedule.</p>
          <a><button class="button" onClick={() => navigate('/workoutreminder')}>Check out</button></a>
        </div>
      </div>
      <div class="card" style={{ color: 'white', marginLeft:"30px",padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">DietCharts</h2>
          <p class="card-body">Workout is not the only way to get fit , control your diet and be more fit.</p>
          <a><button class="button">Check out</button></a>
        </div>
      </div>
      <div class="card" style={{ color: 'white',marginLeft:"30px", padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Local Groups</h2>
          <p class="card-body">Join Local groups nearby and be fit together.</p>
          <a><button class="button" onClick={() => navigate('/localgroups')}>Check out</button></a>
        </div>
      </div>
      <div class="card" style={{ color: 'white', marginLeft:"30px",padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Trainer</h2>
          <p class="card-body">Want guidence check out for a trainer and get the best workout plan.</p>
          <a><button class="button">Check out</button></a>
      </div>
      </div>
      <div class="card" style={{ color: 'white', marginLeft:"30px",padding: '5rem 0 0rem', maxWidth: '35ch', borderRadius: '19px', overflow: 'hidden', transition: 'transform 500ms ease' }}>
        <div class="card-content">
          <h2 class="card-title">Feedback</h2>
          <p class="card-body">Give your Feedback to let us improve your.</p>
          <a><button class="button">Check out</button></a>
      </div>
      </div>
      </Stack>
  </Box>
  );
};

export default HeroBanner;