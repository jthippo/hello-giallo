import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("1963");
  const [to, setTo] = useState("1987");
  const [rating, setRating] = useState(5.0);
  const [sort, setSort] = useState("vote_average.desc");
  const [giallo, setGiallo] = useState({});

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
          placeholder="1963"
          onChange={(event) => setFrom(event.target.value)}
        ></input>
        <input
          placeholder="1987"
          onChange={(event) => setTo(event.target.value)}
        ></input>
        <input
          placeholder="5.0"
          onChange={(event) => setRating(event.target.value)}
        ></input>
        <select onChange={(event) => setSort(event.target.value)}>
          <option value="vote_average.desc">Highest rating</option>
          <option value="vote_average.asc">Lowest rating</option>
          <option value="primary_release_date.desc">Newest</option>
          <option value="primary_release_date.asc">Oldest</option>
        </select>
        <button>Hello Giallo</button>

        {giallo.title && (
          <div className="results">
            <img src={giallo.poster} />
            {giallo.title}
            {giallo.year}
            {giallo.rating}
            <a href={giallo.link}>View on TMDB</a>
          </div>
        )}
      </form>
    </>
  );
}
