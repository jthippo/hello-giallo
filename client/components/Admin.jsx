import Form from "../components/Form";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Admin() {
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
    <div className="database">
      {gialli.map((giallo) => {
        return (
          <div className="gialliAdmin" key={giallo._id}>
            <div className="gialliVertical">
              <div className="gialliTitleYear">
                <h2>{giallo.title}</h2>
                <h3>{giallo.year}</h3>
              </div>
              <Form giallo={giallo} getGialli={getGialli} />
            </div>
            <button
              className="gialloDelete"
              onClick={() => deleteGialli(giallo._id)}
            >
              DELETE GIALLO
            </button>
          </div>
        );
      })}
      <div className="newGiallo">
        <div className="gialliVertical">
          <h2>Add giallo</h2>
          <Form gialli={gialli} setGialli={setGialli} />
        </div>
      </div>
    </div>
  );
}
