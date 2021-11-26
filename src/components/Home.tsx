import React from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import Map from '../components/Map'
import { Position, startTracking, stopTracking, getCurrentPosition } from '../Tracker/LocationTracker';
// import { CSVLink } from "react-csv";

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

const Home = () => {

  const classes = useStyles();

  const [loctionData, setLocationData] = React.useState<Array<Position>>([])
  const [disabledBtn, setDisabledBtn] = React.useState(STOP_TRIP_BTN)
  const [currentPosition, setCurrentPosition] = React.useState<Position>({latitude: 53.3402793, longitude: -6.2886687, timestamp: 1634990177125})

  React.useEffect(() => {
    const id = window.setInterval(() => getCurrentPosition(setCurrentPosition),1000)
    return () => clearInterval(id)
  })

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
    <>
      <Map location={currentPosition} />
      <Button variant="contained" color="primary" className={classes.root} onClick={handleClickStartTracking} disabled={disabledBtn === START_TRIP_BTN}>Start Trip</Button>
      <Button variant="contained" color="primary" className={classes.root} onClick={handleClickStopTracking} disabled={disabledBtn === STOP_TRIP_BTN}>Stop Trip</Button>
      {/* <CSVLink data={loctionData}>Download Data</CSVLink> */}
    </>
  );
}

export default Home;