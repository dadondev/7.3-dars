import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Home;
