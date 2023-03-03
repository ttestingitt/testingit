import React from "react";
import Dynamic from "../../Dynamic/Dynamic";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Subscribe from "../../Subscribe/Subscribe";
import Why from "../../Why/Why";

import "../../App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Dynamic />
      <Why />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
