import { useEffect, useState } from "react";
import getEvents from "../API/getEvents";
import Card from './common/EventsCard';
const Events = () => {

  const [events, setEvents] = useState<Array<any>>([]);

  useEffect(() => {
    getEvents().then((res) => setEvents(res))
  },[])

  return (
  <>
    {
        events && events.map(({Eventname, EventURL, EventDate, EventCity, EventAddress}) => (
            <Card Eventname={Eventname} EventURL={EventURL} EventDate={EventDate} EventCity={EventCity} EventAddress={EventAddress} />
        ))
    }   
  </>
  );
}
 
export default Events;