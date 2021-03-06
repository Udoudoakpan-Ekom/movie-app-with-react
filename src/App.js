import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

// 82042bb3

const API_URL = "http://www.omdbapi.com?apikey=82042bb3";
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  /*--- We can have as many useState as possible */
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) =>
            setsearchTerm(e.target.value)
          } /*To be able to change the value option instead of making it static */
        />
        <img
          src={SearchIcon}
          alt="search"
          /* -- onclick event so that the search button and work -- */
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* -- To collect all the movies using map METHOD */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        /* ---Where the name of the movies isn't found in the array---  */
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
