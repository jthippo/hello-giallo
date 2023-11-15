import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "../pages/About";
import Login from "../pages/Login";
import Admin from "../components/Admin";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <h1>Hello Giallo</h1>
          <p>
            <b>giallo </b>
            <i>noun </i>/d͡ʒal.lo/
            <br />
            <i>
              A genre of Italian cinema mixing mystery and thriller with
              psychological elements.
            </i>
          </p>
        </div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/login">ADMIN</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
