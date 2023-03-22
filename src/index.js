import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Presentation from './components/Presentation';
import About from './components/About';
import Sidebar from './components/Sidebar';

const AppLayout = () => (
  <>
  <Sidebar />
  <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "#about",
        element: <About />
      }
    ],
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
