import { useEffect, useState } from "react";
import getTrips from "../API/getTrips";
import TripPath from "./TripPath";
import TripsCard from "./common/TripsCard";

const MyTrips = () => {

  const [trips, setTrips] = useState<Array<any>>([]);

  function timeConverter(UNIX_timestamp: number){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  useEffect(() => {
    getTrips().then((res) => setTrips(res))
  },[])

  const tripId = new URLSearchParams(window.location.search).get("tripId")
  
  return (
  <>
    {/* <div>All Trips</div> */}
    { tripId ? trips[0] && 
        trips.map((trip) => {
            if(trip[0].TripId == tripId) return <TripPath data={trip} /> 
        })
      : trips[0] && trips.map((trip) => <TripsCard TripId={trip[0].TripId} Timestamp={timeConverter(trip[0].Timestamp)} />  
    )}
  </>
  );
}
 
export default MyTrips;