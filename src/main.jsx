import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page
import SpeciesDetail from "./Components/SpeciesDetail"; // Species detail page
import Layout from "./Layout";
import ContactUs from "./Components/Contactus";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
      {
        path: "SpeciesDetails/:id", // Dynamic route for species detail
        element: <SpeciesDetail />, // Show SpeciesDetail component in the Layout
      },
      {
        path: "Contact", // Dynamic route for species detail
        element: <ContactUs />, // Show SpeciesDetail component in the Layout
      },
      // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
