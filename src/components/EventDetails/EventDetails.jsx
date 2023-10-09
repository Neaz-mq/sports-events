import { useLoaderData, useParams } from "react-router-dom";




const EventDetails = () => {
    const events = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt);
    console.log(event); 
    return (
        <div className="card w-1/2 glass mx-auto my-10" >
  <figure><img src={event.image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{event.name}</h2>
    <p>{event.full_description}</p>
    <div className="card-actions">
      <button className="btn btn-primary text-white">$ {event.price}</button>
    </div>
  </div>
</div>
        
    );
};

export default EventDetails;








