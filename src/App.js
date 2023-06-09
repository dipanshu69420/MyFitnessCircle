import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/home';
import WorkoutReminder from './components/WorkoutReminder';
import LocalGroups from './components/LocalGroup';
import SignUp from './components/SignUp';
import MainPage from './components/Main';
import Login from './components/Login';

const App = () => {
  return (
    <Box width="400px" sx={{xl:"1488px"}} m="0">
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="exercise/:id" element={<ExerciseDetail/>} />
      <Route path="/workoutreminder" element={<WorkoutReminder/>} />
      <Route path="/localgroups" element={<LocalGroups/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/mainpage" element={<MainPage/>} />
      </Routes>
    </Box>
  )
}

export default App;
