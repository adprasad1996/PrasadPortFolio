import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import AboutPage from "./assets/pages/AboutPage";
import ProjectsPage from "./assets/pages/ProjectsPage";
import ContactPage from "./assets/pages/ContactPage";

function App() {
  return (
    <Router >
      <Navbar />
      <div className="pt-20"> </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
