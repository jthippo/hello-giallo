import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "../pages/About";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello Giallo</h1>
      <p>Murder is bad</p>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer>Link to About page here, surely?</footer>
    </BrowserRouter>
  );
}

export default App;
