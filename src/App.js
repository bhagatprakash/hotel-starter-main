import React, { createContext } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

// pages
import Home from "../src/pages/Home";
import RoomDetails from "../src/pages/RoomDetails";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
