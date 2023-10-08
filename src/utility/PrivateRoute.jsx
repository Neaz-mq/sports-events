

import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Hook/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;
