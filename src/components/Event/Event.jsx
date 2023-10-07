import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";


const Event = ({event}) => {
    const { id, name, image, price, description } = event;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
          
           
            <div className="mt-4 flex">
                
                <h2 className="flex"> <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {price}</h2>
            </div>
            <div className="card-actions">
                <Link to={`/event/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Event;