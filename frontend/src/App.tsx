import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Store from "./pages/Store";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Nav from "./components/Nav/Nav";
import NavContact from "./components/NavContact/NavContact";

function App() {
  return (
    <>
      <NavContact />
      <Nav />

      <h1>This is MotorBike...</h1>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="servicios" element={<Services />} />
        <Route path="tienda" element={<Store />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
