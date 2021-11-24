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

const START_TRIP_BTN = 'startTrip'
const STOP_TRIP_BTN = 'stopTrip'

const App = () => {

  const classes = useStyles();

  const [loctionData, setLocationData] = React.useState([])
  const [disabledBtn, setDisabledBtn] = React.useState(STOP_TRIP_BTN)

  const handleClickStartTracking = () => {
    watchID = startTracking() as number
    setDisabledBtn(START_TRIP_BTN)
  }

  const handleClickStopTracking = () => {
    stopTracking(watchID)
    const final = localStorage.getItem("locations") || "[]"
    setLocationData(JSON.parse(final))
    localStorage.removeItem("locations")
    setDisabledBtn(STOP_TRIP_BTN)
  }

  return (
    <div className="App">
      <Button variant="outlined" color="primary" className={classes.root} onClick={handleClickStartTracking} disabled={disabledBtn === START_TRIP_BTN}>Start Tracking</Button>
      <Button variant="outlined" color="primary" className={classes.root} onClick={handleClickStopTracking} disabled={disabledBtn === STOP_TRIP_BTN}>Stop Tracking</Button>
      <CSVLink data={loctionData}>Download Data</CSVLink>
    </div>
  );
}

export default App;
