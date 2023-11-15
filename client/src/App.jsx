import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "../pages/About";
import Login from "../pages/Login";
import Admin from "../components/Admin";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello Giallo</h1>
      <p>Murder is bad</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Admin Zone</Link>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
