import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayouts from "./layouts/HomeLayouts.jsx";
import Services from "./Pages/Services/Services.jsx";
import About from "./Pages/About/About.jsx";
import Products from "./Pages/Products/Products.jsx";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Openings from "./Pages/Career/Openings";
import WorkingAtMuktinath from "./Pages/Career/WorkingAtMuktinath";
import ForStudents from "./Pages/Career/ForStudents";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<App />} />
      <Route element={<HomeLayouts />}>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/openings" element={<Openings />} />
        <Route path="/working" element={<WorkingAtMuktinath />} />
        <Route path="/students" element={<ForStudents />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
