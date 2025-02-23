import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
// import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
