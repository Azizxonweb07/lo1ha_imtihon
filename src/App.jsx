import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import FreeGuide from "./pages/freeGuide/FreeGuide";
import About from "./pages/about/About";
import ExtraSales from "./pages/ExtraSales/ExtraSales";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/freeGuide" element={<FreeGuide />} />
        <Route path="/about" element={<About />} />
        <Route path="/ExtraSales" element={<ExtraSales />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
