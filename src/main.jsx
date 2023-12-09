import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portofolio from './pages/Portofolio.jsx';
import Home from './pages/Home.jsx';
import App from './App.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error message="Oops, something went wrong!" />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/portofolio",
        element: <Portofolio></Portofolio>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
