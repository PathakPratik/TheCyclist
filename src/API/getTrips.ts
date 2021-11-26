
const getTrips = () => {

    return fetch(process.env.REACT_APP_API_ENDPOINT + "trips?" + new URLSearchParams({
        Uid: '1',
    }))
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getTrips