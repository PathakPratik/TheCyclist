import { useEffect, useState } from "react";
import getTrips from "../API/getTrips";
import TripPath from "./TripPath";

const MyTrips = () => {

  const [trips, setTrips] = useState<Array<any>>([]);

  useEffect(() => {
    getTrips().then((res) => setTrips(res))
  },[])

  return (
  <>
    { trips[0] && <TripPath data={trips} />}
  </>
  );
}
 
export default MyTrips;