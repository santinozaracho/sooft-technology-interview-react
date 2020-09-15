import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Container, Grid } from '@material-ui/core';
import ExerciseOne from './components/ExerciseOne';
import ExerciseTwo from './components/ExerciseTwo';

function App() {
  return (
    <Container className='App'>
      <Grid
        direction='row'
        alignContent='center'
        alignItems='center'
        justify='flex-start'
      >
        <ExerciseOne />
        <ExerciseTwo />
      </Grid>
    </Container>
  );
}

export default App;
