import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Form from "../components/Form";
import About from "../pages/About";
import Admin from "../pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [gialli, setGialli] = useState([]);

  useEffect(() => {
    getGialli();
  }, []);

  async function getGialli() {
    const API = `http://localhost:8080/gialli/`;
    const res = await axios.get(API);
    setGialli(res.data);
  }

  async function deleteGialli(id) {
    const API = `http://localhost:8080/gialli/${id}`;
    await axios.delete(API);
    getGialli();
  }

  return (
    <BrowserRouter>
      <h1>Hello Giallo</h1>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/admin" element={<Admin useAuth0={useAuth0} />} />
      </Routes>

      {gialli.map((giallo) => {
        return (
          <div key={giallo._id}>
            <h2>{giallo.title}</h2>
            <h3>{giallo.year}</h3>
            <button onClick={() => deleteGialli(giallo._id)}>
              Delete giallo
            </button>

            <Form giallo={giallo} getGialli={getGialli} />
          </div>
        );
      })}
      <h2>Add giallo</h2>
      <Form gialli={gialli} setGialli={setGialli} />
    </BrowserRouter>
  );
}

export default App;
