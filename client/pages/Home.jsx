import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("1968");
  const [to, setTo] = useState("1975");
  const [rating, setRating] = useState(5.0);
  const [sort, setSort] = useState("popularity.desc");
  const [giallo, setGiallo] = useState({});
  const gialloDate = new Date(giallo.year);

  async function handleAPI(event) {
    event.preventDefault();
    const API = `http://localhost:8080/API?from=${from}&to=${to}&rating=${rating}&sort=${sort}`;
    const res = await axios.get(API);
    setGiallo(res.data);
  }

  return (
    <>
      <form onSubmit={handleAPI}>
        <input
          placeholder="1968"
          onChange={(event) => setFrom(event.target.value)}
        ></input>
        <input
          placeholder="1975"
          onChange={(event) => setTo(event.target.value)}
        ></input>
        <input
          placeholder="5.0"
          onChange={(event) => setRating(event.target.value)}
        ></input>
        <select onChange={(event) => setSort(event.target.value)}>
          <option value="popularity.desc">Most popular</option>
          <option value="popularity.asc">Least popular</option>
          <option value="vote_average.desc">Highest rating</option>
          <option value="vote_average.asc">Lowest rating</option>
          <option value="primary_release_date.desc">Newest</option>
          <option value="primary_release_date.asc">Oldest</option>
        </select>
        <button>Hello Giallo</button>

        {giallo.title && (
          <div className="results">
            <img src={giallo.poster} />
            {giallo.title}({gialloDate.getFullYear()}){giallo.rating}
            <a target="_blank" href={giallo.link}>
              View on TMDB
            </a>
            {/* ADD TO DATABASE */}
          </div>
        )}
      </form>
    </>
  );
}
