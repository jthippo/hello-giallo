import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

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
    <>
      <h1>Hello Giallo</h1>
      {gialli.map((giallo) => {
        return (
          <div key={giallo._id}>
            <h2>{giallo.title}</h2>
            <p>{giallo.year}</p>
            <button onClick={() => deleteGialli(giallo._id)}>
              Delete giallo
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
