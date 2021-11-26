import { useEffect, useState } from "react";
import getTrips from "../API/getTrips";

const MyTrips = () => {

  const [trips, setTrips] = useState<Array<any>>([]);

  useEffect(() => {
    getTrips().then((res) => setTrips(res))
  },[])

  return (
  <>
    {
        trips && trips.map((trip) => (
            <div>{"Lat: "+trip.Latitude+"Long: "+trip.Longitude}</div>
        ))
    }   
  </>
  );
}
 
export default MyTrips;