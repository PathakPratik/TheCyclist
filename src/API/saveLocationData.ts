import { Position } from "../Tracker/LocationTracker";
import { getRecordId } from "../utils/common"

const saveLocationData = (position: Position) => {

    const payload = { 
        UserId: 1,
        TripId: 2,
        RecordID: getRecordId(position.timestamp, 1, 2),
        ...position
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    return fetch(process.env.REACT_APP_API_ENDPOINT+"data/location", requestOptions)
    .then(response => console.log(response.json()))
    .catch(err => console.log(err))
}

export default saveLocationData