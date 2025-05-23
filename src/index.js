import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "submit",
    element: <SignUp/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
=======
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 814956bfd4d361085a46cea18e557be32a0b7f18
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
