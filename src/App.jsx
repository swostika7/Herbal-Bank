import { useState } from "react";
import "./App.css";
import Hero from "./Pages/Home/Hero";
import Product from "./Pages/Home/Product";
import AboutHome from "./Pages/Home/AboutHome";
import BestService from "./Pages/Home/BestService";
import FlagShip from "./Pages/Home/FlagShip";
import Header from "./layouts/Header";
import Promotion from "./Pages/Home/Promotion";
import Footer from "./layouts/Footer";
// import Accordian from "./Pages/Home/Accordian";
import AccordianMain from "./Pages/Home/AccordianMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col space-y-10">
        <Product />
        <AboutHome />
        <BestService />
        <FlagShip />
        <AccordianMain />
        <Promotion />
      </div>
      <Footer />
    </>
  );
}

export default App;
