import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayouts from "./layouts/HomeLayouts.jsx";
import Services from "./Pages/Services/Services.jsx";
import About from "./Pages/About/About.jsx";
import Products from "./Pages/Products/Products.jsx";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route element={<HomeLayouts />}>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);
