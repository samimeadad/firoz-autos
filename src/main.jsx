import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import RoadSafety from './pages/RoadSafety/RoadSafety.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Events from './pages/Events/Events.jsx';
import Products from './pages/Products/Products.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import Terms from './pages/Terms/Terms.jsx';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <PageNotFound />
  },
  {
    path: "/service",
    element: <Services />,
    errorElement: <PageNotFound />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <PageNotFound />
  },
  {
    path: "/roadSafety",
    element: <RoadSafety />,
    errorElement: <PageNotFound />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <PageNotFound />
  },
  {
    path: "/events",
    element: <Events />,
    errorElement: <PageNotFound />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    errorElement: <PageNotFound />
  },
  {
    path: "/terms",
    element: <Terms />,
    errorElement: <PageNotFound />
  }
] );

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <RouterProvider router={ router } basename="import.meta.env.BASE_URL"></RouterProvider>
  </React.StrictMode >,
)
