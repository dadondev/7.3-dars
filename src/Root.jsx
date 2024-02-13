import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Main from "./layout/Main";

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Root;
