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
  Latitude?: number,
  longitude: number,
  Longitude?: number,
  timestamp: number,
  speed?: number | null
}

const getPosition = (geolocation: GeolocationPosition) => {
  const {
    coords: {
      latitude,
      longitude,
      speed
    },
    timestamp
  } = geolocation;

  return { latitude, longitude, timestamp, speed }
}

const success = (geolocation: GeolocationPosition) => saveData(getPosition(geolocation));

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

const getCurrentPosition = (fn: (position: Position) => void) => {
  navigator.geolocation.getCurrentPosition((geolocation: GeolocationPosition) => fn(getPosition(geolocation)), error, trackingOptions);
}

export { startTracking, stopTracking, getCurrentPosition }