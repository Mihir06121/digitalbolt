import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound"
import Services from "./pages/Services";

const NavRoutes = () => (
  // <ParallaxProvider scrollAxis='vertical'>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  // </ParallaxProvider>
);

export default NavRoutes;