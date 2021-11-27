import { useEffect, useState } from "react";
import getEvents from "../API/getEvents";
import Card from './common/EventsCard';
const Events = () => {

  const [events, setEvents] = useState<Array<any>>([]);

  function timeConverter(UNIX_timestamp: string){
    
    const ts = UNIX_timestamp.match(
      /(?<=\()(.*?)(?=\-)/
    ) || ['1638045768265'];
    var a = new Date(parseInt(ts[1]));
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }

  useEffect(() => {
    getEvents().then((res) => setEvents(res))
  },[])

  return (
  <>
    {
        events && events.map(({Eventname, EventURL, EventDate, EventCity, EventAddress}) => (
            <Card Eventname={Eventname} EventURL={EventURL} EventDate={timeConverter(EventDate)} EventCity={EventCity} EventAddress={EventAddress} />
        ))
    }   
  </>
  );
}
 
export default Events;