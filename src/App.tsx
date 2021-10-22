import React from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import './App.css';
import { startTracking, stopTracking } from './Tracker/LocationTracker';

const useStyles = makeStyles({
  root: {
    margin: '2rem auto',
    display: 'block',
    width: '15rem',
  },
});

const App = () => {
  let watchID: number = 0; 

  const classes = useStyles();

  const handleClickStartTracking = () => {
    const watchID = startTracking()
    console.log(watchID)
  }

  const handleClickStopTracking = () => {
    stopTracking(watchID)
  }

  return (
    <div className="App">
      <Button variant="outlined" color="primary" className={classes.root} onClick={handleClickStartTracking} >Start Tracking</Button>
      <Button variant="outlined" color="primary" className={classes.root} onClick={handleClickStopTracking} >Stop Tracking</Button>
    </div>
  );
}

export default App;
