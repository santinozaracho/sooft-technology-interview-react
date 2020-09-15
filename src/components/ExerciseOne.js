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

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  content: {
    height: 140,
    textAlign: 'left',
  },
});

/**
 * @description This component is responsible for render the fields of Episode.
 * @return {component}
 */
const myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];

const ExerciseOne = (props) => {
  const [string, setString] = useState('');
  const [frequencies, setFrequencies] = useState({});
  const styles = useStyles();
  useEffect(() => {
    setString(myArray.toString());
    const newFrequencies = frequencyHistogram(myArray);
    setFrequencies(newFrequencies);
  }, []);

  const caputureArray = ({ target }) => {
    console.log(target.value);
    setString(target.value);
    const newArray = target.value.split(',');
    const newFrequencies = frequencyHistogram(newArray);
    setFrequencies(newFrequencies);
  };

  return (
    <Paper className={styles.root}>
      <Card>
        <Typography component='h1'>Array to Histogram:</Typography>
        <TextField
          placeholder='Inserte un array de items'
          value={string}
          onChange={caputureArray}
        />

        <CardContent className={styles.content}>
          <Typography component='h1'>Frequencies:</Typography>
          <Typography>{'1:' + frequencies['1']}</Typography>
          <Typography>{'2:' + frequencies['2']}</Typography>
          <Typography>{'3:' + frequencies['3']}</Typography>
          <Typography>{'4:' + frequencies['4']}</Typography>
          <Typography>{'5:' + frequencies['5']}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ExerciseOne;
