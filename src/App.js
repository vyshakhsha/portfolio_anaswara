import "./App.css";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/home" element={<AllComponents />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
function AllComponents() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certification />
      <Contact />
    </div>
  );
}
export default App;
