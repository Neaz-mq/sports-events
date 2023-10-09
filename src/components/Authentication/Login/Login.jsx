
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { googleSignIn, user, signIn } = useContext(AuthContext);
  
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => console.log(result.user));

  };
  const handleLogin = () => {
    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          console.log(prevLocation);
          console.log(location);
          console.log(navigate);
          navigate(from, { replace: true });
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Password or email doesn't match", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        });
    } else {
      toast.error("Do not keep empty any field", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     
    }
 
   
  };


    return (
      <div className="bg-gradient-to-r from-orange-200 from-10% via-violet-400 via-30% to-emerald-500 to-90% my-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-2/3 ml-20  lg:ml-60 md:ml-40">
       
        <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-300 px-6 py-7">
        <h2 className="lg:text-3xl text-xl py-5 text-center font-bold">Please Login</h2>
          
        <div>
                <p>{error}</p>
                
         
            <div className="form-control w-36">
              <label className="label">
                <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input  onChange={(e) => setEmail(e.target.value)}
                  className="form-controls w-40 lg:w-72 md:w-56 rounded-md p-2"
                  type="email"
                  placeholder=" Type Email" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Password</span>
              </label>
              <input  onChange={(e) => setPassword(e.target.value)}
                  className="form-control w-40 lg:w-72 md:w-56 rounded-md p-2"
                  type="password"
                  placeholder=" Type Password" />
              
            </div>
            <div className="form-control mt-6">
              <button onClick={handleLogin} className="btn btn-primary w-1/3">Login</button>
              <br />
              <br />
              <button onClick={handleGoogleLogin} className="btn btn-secondary"> Google Login</button>
            </div>
            <p className="mt-4 pb-8 lg:text-xl font-semibold">Don't have an account! Please <Link className="text-red-600 font-bold" to="/register">Register</Link></p>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
      
    );
};

export default Login;

