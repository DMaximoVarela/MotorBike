import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Store from "./pages/Store";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Nav from "./components/Nav/Nav";
import NavContact from "./components/NavContact/NavContact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavContact />
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="servicios" element={<Services />} />
            <Route path="tienda" element={<Store />} />
            <Route path="galeria" element={<Gallery />} />
            <Route path="contacto" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
