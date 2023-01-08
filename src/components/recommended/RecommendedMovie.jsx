import { useState, useEffect } from "react";
import { MediaCard } from "./MediaCard";

export const RecommendedMovie = () => {
  const api_key = "56056247e98174b66164d88dab7b457a";

  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="recommended-wrapper">
      {movies.slice(0, 13).map((movie) => {
        return <MediaCard data={movie} media="movie" key={movie.id} />;
      })}
    </section>
  );
};
