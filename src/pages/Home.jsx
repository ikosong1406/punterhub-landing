import React from 'react';
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/Howitwork";
import Categories from "../components/Categories";
import Cta from "../components/Cta"


const Home = () => {
  return (
    <main>
      <Hero />
      <Features/>
      <HowItWorks/>
      <Categories/>
      <Cta/>
    </main>
  );
};

export default Home;