import { Position } from "../Tracker/LocationTracker";
import { getRecordId } from "../utils/common"

const saveLocationData = (position: Position) => {

    const payload = { 
        UserId: 1,
        TripId: localStorage.getItem("TripId") || "-1",
        RecordID: getRecordId(position.timestamp, 1, 2),
        Timer: localStorage.getItem("timerValue") || '00:00:00',
        ...position
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    return fetch(process.env.REACT_APP_API_ENDPOINT+"data/location", requestOptions)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

export default saveLocationData