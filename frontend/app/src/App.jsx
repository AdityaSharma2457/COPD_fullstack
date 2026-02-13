import InputForm from "./components/InputForm";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import "./components/Navbar.css";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input-form" element={<InputForm />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
