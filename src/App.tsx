import React from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import './App.css';
import { startTracking, stopTracking } from './Tracker/LocationTracker';
import { CSVLink } from "react-csv";

const useStyles = makeStyles({
  root: {
    margin: '2rem auto',
    display: 'block',
    width: '15rem',
  },
});

let watchID: number = 0; 

const App = () => {

  const classes = useStyles();

  const [loctionData, setLocationData] = React.useState([])

  const handleClickStartTracking = () => {
    watchID = startTracking() as number
  }

  const handleClickStopTracking = () => {
    stopTracking(watchID)
    const final = localStorage.getItem("locations") || "[]"
    setLocationData(JSON.parse(final))
  }

  return (
    <div className="App">
      <Button variant="outlined" color="primary" className={classes.root} onClick={handleClickStartTracking} >Start Tracking</Button>
      <Button variant="outlined" color="primary" className={classes.root} onClick={handleClickStopTracking} >Stop Tracking</Button>
      <CSVLink data={loctionData}>Download Data</CSVLink>
    </div>
  );
}

export default App;
