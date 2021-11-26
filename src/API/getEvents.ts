
const getEvents = () => {

    return fetch(process.env.REACT_APP_API_ENDPOINT + "events")
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getEvents