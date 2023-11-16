import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("1963");
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
      <h2 className="topH2">Find me a giallo...</h2>
      <main>
        <section>
          <form className="options" onSubmit={handleAPI}>
            <div className="criteriaBox">
              <div className="labelInputBox">
                <label for="from">Released in or after...</label>
                <input
                  className="survey"
                  id="from"
                  maxlength="4"
                  placeholder="1963"
                  onChange={(event) => setFrom(event.target.value)}
                ></input>
              </div>

              <p className="hint">
                HINT: The Girl Who Knew Too Much, generally accepted as the
                first giallo, was released in 1963
              </p>
            </div>
            <div className="criteriaBox">
              <div className="labelInputBox">
                <label for="to">Released in or before... </label>
                <input
                  className="survey"
                  id="to"
                  maxlength="4"
                  placeholder="1975"
                  onChange={(event) => setTo(event.target.value)}
                ></input>
              </div>

              <p className="hint">
                HINT: 1975 marks the end of the gialli "glory days" but genre
                entries and homages are still made today
              </p>
            </div>
            <div className="criteriaBox">
              <div className="labelInputBox">
                <label for="rating">
                  With a TMDB user rating of at least...{" "}
                </label>
                <input
                  className="survey"
                  id="rating"
                  maxlength="3"
                  step="0.1"
                  size="4"
                  placeholder="5.0"
                  onChange={(event) => setRating(event.target.value)}
                ></input>
              </div>

              <p className="hint">
                HINT: Rating is out of 10; The Bird with the Crystal Plumage,
                considered the most significant giallo ever, has a TMDB user
                rating of 7.2
              </p>
            </div>
            <div className="criteriaBox">
              <div className="labelInputBox">
                <label for="sort">Make my suggestion the... </label>
                <select
                  id="sort"
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="popularity.desc">Most popular</option>
                  <option value="popularity.asc">Least popular</option>
                  <option value="vote_average.desc">Highest rated</option>
                  <option value="vote_average.asc">Lowest rated</option>
                  <option value="primary_release_date.desc">Newest</option>
                  <option value="primary_release_date.asc">Oldest</option>
                </select>
              </div>
              <p className="hint">
                HINT: Popularity is determined by how many views a film receives
                on themoviedb.org
              </p>
            </div>
            <button className="submit">HELLO GIALLO</button>
          </form>
        </section>
        {giallo.title && (
          <div className="result">
            <div className="image">
              <img className="poster" src={giallo.poster} />
            </div>
            <div className="details">
              <div className="title">
                <h2 className="titleAndYear">
                  {giallo.title} ({gialloDate.getFullYear()})
                </h2>
              </div>
              <div className="ratingLinkBox">
                <div className="ratingBox">{giallo.rating}</div>
                <a target="_blank" href={giallo.link}>
                  View on TMDB
                </a>
              </div>
              <p>{giallo.overview}</p>
              <button disabled className="addGiallo"></button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
