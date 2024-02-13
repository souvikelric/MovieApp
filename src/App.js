import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

// 7aac7ca0

// const movie1 = {
//   Title: "Batman v Superman: Dawn of Justice",
//   Year: "2016",
//   imdbID: "tt2975590",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
// };

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const movieSearch = async (title) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=7aac7ca0&s=${title}`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    movieSearch("Superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies"
          value={searchTerm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              movieSearch(searchTerm);
            }
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search Icon"
          onClick={() => {
            movieSearch(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie1) => {
            return <MovieCard key={movie1.Title} movie1={movie1} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}
