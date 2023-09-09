import * as React from "react";
import * as ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SideNav from './components/SideNav/sideNav';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Root from './Pages/Root'
import Home from './Pages/Home'

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element:<Register />,
          }
        ],
      },
      {
        path: "/defaultlayout",
        element: <Home />,
      },
]

export default routes