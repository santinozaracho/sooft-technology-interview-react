import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Container } from '@material-ui/core';
import ExerciseOne from './components/ExerciseOne';

function App() {
  return (
    <Container className='App'>
      <ExerciseOne />
    </Container>
  );
}

export default App;
