import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Sports from "../components/Sports";
import Sample from "../components/Sample";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Sports />
      <Sample />
      <Pricing />
      <FAQ />
      <Cta />
    </main>
  );
};

export default Home;
