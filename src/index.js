import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Islamabad from './Cities/islamabad';
import Rawalpindi from './Cities/rawalpindi';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Shifa from './Hospitals/shifa';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from './Components/signup/signup';
import Timing from './Doctime/timing';
import Bookpage from './Doctime/bookpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "islamabad",
    element: <Islamabad/>,
  },
  {
    path: "rawalpindi",
    element: <Rawalpindi/>,
  },
  {
    path: "shifa",
    element: <Shifa/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "select_time",
    element: <Timing/>,
  },
  {
    path: "booked",
    element: <Bookpage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

