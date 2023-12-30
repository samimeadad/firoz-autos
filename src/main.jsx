import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <PageNotFound />
  }
] );

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>,
)
