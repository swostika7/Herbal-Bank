import { useState } from "react";
import "./App.css";
import Hero from "./Pages/Home/Hero";
import Product from "./Pages/Home/Product";
import BestService from "./Pages/Home/BestService";
import FlagShip from "./Pages/Home/FlagShip";
import Header from "./layouts/Header";
import Promotion from "./Pages/Home/Promotion";
import Footer from "./layouts/Footer";
import AccordianMain from "./Pages/Home/AccordianMain";
import Summary from "./Pages/Home/Summary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Summary />
      <BestService />
      <FlagShip />
      <AccordianMain />
      <Promotion />
      <Footer />
    </>
  );
}

export default App;
