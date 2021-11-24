import { Position } from "../Tracker/LocationTracker";
import saveLocationAPIRequest from "../API/saveLocationData"

const saveData = (position: Position) => {
    saveInLocalStorage(position)
    saveLocationAPIRequest(position)
}

const saveInLocalStorage = (position: Position) => {
    let locations = localStorage.getItem("locations") || "[]";

    locations = JSON.parse(locations);

    // @ts-ignore
    locations.push(position);

    localStorage.setItem("locations", JSON.stringify(locations));
}

export { saveData }