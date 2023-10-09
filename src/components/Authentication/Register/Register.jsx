/* eslint-disable no-unused-vars */
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/.test(password)) {
      toast.error(" Password is less then six characters, no capital letter & don't have a special character",);

    } else {

      toast.success("Successfully Register", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      signUp(email, password).then((result) => console.log(result.user));
    }
  };
  return (

    <div className="hero my-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero-content flex-col lg:flex-row-reverse w-2/3  ">

        <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-300 px-6 py-7">
          <h2 className="lg:text-3xl text-xl py-5 text-center font-bold">Please Register</h2>
          <div>
            <p>{error}</p>


            <div className="form-control w-36">
              <label className="label">
                <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input onChange={(e) => setEmail(e.target.value)}
                className="form-controls w-40 lg:w-72 md:w-56 rounded-md p-2"
                type="email"
                placeholder=" Type Email" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Password</span>
              </label>
              <input onChange={(e) => setPassword(e.target.value)}
                className="form-control w-40 lg:w-72 md:w-56 rounded-md p-2"
                type="password"
                placeholder=" Type Password" />

            </div>
            <div className="form-control mt-6">
              <button onClick={handleRegister} className="btn btn-primary w-1/3">Register</button>
            </div>
            <p className="mt-4 ml-1 font-semibold">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>



  );
};

export default Register;










