import React from "react";
import { Hero } from "../Hero";
import Cards from "../Cards/Cards";
import CardImage from "../CardImage/CardImage";
import { Services } from "../Services";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Hero />
      <Cards />
      <Services />
      <CardImage />
    </div>
  );
};

export default Home;
