import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";


const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout().then((result) => console.log(result));
  };
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/experiences'>Our Experiences</NavLink>
      </li>
      <li>
        <NavLink to='/news'>News</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
    
    </>
  );


  return (
    <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a href='/' className=" normal-case lg:text-3xl md:mx-64 font-bold lg:mx-10 mx-24">Entertainment Events</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-base font-semibold">{links}</ul>
      </div>
      <div>
        {user && (
          <button className="btn btn-success mr-3" onClick={handleLogout}>
            logout
          </button>
        )}
      
        <p className="text-xl font-semibold">{user?.email}</p>
       
       
      </div>
      
    </div>
  );
};

export default Header;