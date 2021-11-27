import { saveData } from '../Data/LocationData'
import { getTripId } from "../utils/common"

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

  return { latitude, longitude, timestamp, speed: speed || -1 }
}

const success = (geolocation: GeolocationPosition) => saveData(getPosition(geolocation));

const error = (err:any) => {
  console.log(err);
}

const createTripId = () => {
  const id = getTripId(Date.now())
  localStorage.setItem("TripId", JSON.stringify(id));
}

const resetTripId = () => {
  localStorage.removeItem("TripId");
}

const startTracking = () => {
  if(!navigator.geolocation) {
    alert('Geolocation is not supported! Please try again!')
  } else {
    alert('Locating ...')
    createTripId()
    return navigator.geolocation.watchPosition(success, error, trackingOptions)
  }
}

const stopTracking = (watchID: number) => {
  resetTripId()
  navigator.geolocation.clearWatch(watchID)
  alert('Stopped Tracking')
}

const getCurrentPosition = (fn: (position: Position) => void) => {
  navigator.geolocation.getCurrentPosition((geolocation: GeolocationPosition) => fn(getPosition(geolocation)), error, trackingOptions);
}

export { startTracking, stopTracking, getCurrentPosition }