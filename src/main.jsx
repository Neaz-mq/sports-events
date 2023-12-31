import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import EventDetails from './components/EventDetails/EventDetails';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import AuthProvider from './Hook/AuthProvider';
import PrivateRoute from './utility/PrivateRoute';
import Experiences from './components/Experiences/Experiences';
import News from './components/News/News';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/event/:id',
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
          
        ),
        loader: () => fetch('/events.json')
      },
      {
        path: '/experiences',
        element: (
          <PrivateRoute>
            <Experiences></Experiences>
          </PrivateRoute>
          
        )
        
      },

      {
        path: '/news',
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
          
        )
        
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login> ,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
