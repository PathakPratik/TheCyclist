import { saveData } from '../Data/LocationData'

const FIVE_SECS = 5000;
const ONE_SEC = 1000;

const trackingOptions = {
  enableHighAccuracy: true,
  maximumAge: FIVE_SECS,
  timeout: ONE_SEC,
};

const success = (e: GeolocationPosition) => {

  const {
    coords: {
      latitude,
      longitude
    },
    timestamp
  } = e;

  const position = { latitude, longitude, timestamp }

  saveData(position);
}

const error = (err:any) => {
  console.log(err);
}

const startTracking = () => {
  if(!navigator.geolocation) {
    alert('Geolocation is not supported! Please try again!')
  } else {
    alert('Locating ...')
    return navigator.geolocation.watchPosition(success, error, trackingOptions)
  }
}

const stopTracking = (watchID: number) => {
  navigator.geolocation.clearWatch(watchID)
  alert('Stopped Tracking')
}

export { startTracking, stopTracking }