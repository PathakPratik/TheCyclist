import { saveData } from '../Data/LocationData'

const FIVE_SECS = 5000;
const ONE_SEC = 1000;

const trackingOptions = {
  enableHighAccuracy: true,
  maximumAge: FIVE_SECS,
  timeout: ONE_SEC,
};

export type Position = {
  latitude: number,
  longitude: number,
  timestamp: number
}
const success = (geolocation: GeolocationPosition) => {

  const {
    coords: {
      latitude,
      longitude
    },
    timestamp
  } = geolocation;

  const position: Position = { latitude, longitude, timestamp }

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