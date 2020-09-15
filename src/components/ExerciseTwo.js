import React, { useEffect, useState } from 'react';
import {
  CardContent,
  Typography,
  Card,
  CardHeader,
  Paper,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { frequencyHistogram } from '../functions/frequencyHistogram';
import { exGrapher } from '../functions/exGrapher';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: 20,
  },
  content: {
    height: '100%',
    textAlign: 'center',
  },
});

/**
 * @description This component is responsible for render the fields of Episode.
 * @return {component}
 */

const ExerciseTwo = (props) => {
  const [number, setNumber] = useState(5);
  const [exMatrix, setExMatrix] = useState([['_']]);
  const styles = useStyles();

  useEffect(() => {
    setNumber(5);
    const matrix = exGrapher(5);
    setExMatrix(matrix);
  }, []);

  const handleNumber = ({ target }) => {
    const newNumber = parseInt(target.value);
    if (newNumber > 0) {
      setNumber(newNumber);
      const matrix = exGrapher(newNumber);
      setExMatrix(matrix);
    }
  };
  console.log(exMatrix);
  return (
    <Paper className={styles.root}>
      <Card>
        <Typography component='h1'>X Grapher:</Typography>
        <TextField
          type='number'
          placeholder='Intert one Number'
          value={number}
          onChange={handleNumber}
        />

        <CardContent className={styles.content}>
          <Typography component='h1'>Graphic:</Typography>
          {exMatrix.map((row) => (
            <Typography>{row.join('')}</Typography>
          ))}
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ExerciseTwo;
