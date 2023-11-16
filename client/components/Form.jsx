import axios from "axios";
import { useState } from "react";

export default function Form({ gialli, setGialli, giallo, getGialli }) {
  const [formData, setFormData] = useState(
    giallo ?? {
      title: "",
      year: "",
    }
  );

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function addGiallo(event) {
    event.preventDefault();
    const API = "http://localhost:8080/gialli";
    const res = await axios.post(API, formData);
    setGialli([...gialli, res.data]);
  }

  async function updateGiallo(event) {
    event.preventDefault();
    const API = `http://localhost:8080/gialli/${giallo._id}`;
    await axios.put(API, formData);
    getGialli();
  }

  return (
    <form onSubmit={giallo?.title ? updateGiallo : addGiallo}>
      <input
        className="inputTitle"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        className="inputYear"
        name="year"
        placeholder="Year"
        maxlength="4"
        onChange={handleChange}
        value={formData.year}
      />
      <button className="updateAdd">{giallo?.title ? "Update" : "Add"}</button>
    </form>
  );
}
