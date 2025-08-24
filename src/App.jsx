import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/Howitwork";
import Categories from "./components/Categories";
import Cta from "./components/Cta"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <HowItWorks/>
      <Categories/>
      <Cta/>
      <Footer/>
    </>
  );
}

export default App;
