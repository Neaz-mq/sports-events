import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="text-center py-60">
             <h2 className="text-5xl font-bold text-red-700 mb-8">404 Not Found!</h2>
            <Link className="text-3xl font-bold text-green-500" to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;