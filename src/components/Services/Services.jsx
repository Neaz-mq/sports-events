import { useEffect, useState } from "react";
import Event from "../Event/Event";


const Services = () => {
    const [events, setEvents] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);
  
    
    useEffect(() => {
      fetch("events.json")
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }, []);
    return (
        <div>
        <div className="text-center">
          <h2 className="text-5xl p-14 mb-5">Our Services</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {events.slice(0, dataLength).map((event) => (
            <Event key={event.id} event={event}></Event>
          ))}
        </div>
        <div className={dataLength === events.length ? "hidden" : ""}>
          <button
            onClick={() => setDataLength(events.length)}
            className="btn btn-primary"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    );
};

export default Services;