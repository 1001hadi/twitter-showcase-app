import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Random from "./components/Random";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// import { Button, Container, Navbar } from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/random" element={<Random />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
