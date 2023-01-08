import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SearchForm } from "../form";
import { MediaCard } from "../recommended/MediaCard";

export const loader = async ({ params }) => {
  const apiKey = "56056247e98174b66164d88dab7b457a";
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${params.genreId}&page=1`
  );
  const data = await response.json();

  return data;
};

function ListMovies() {
  const movie = useLoaderData();
  const [searchValue, setSearchValue] = useState("");

  const searchResults = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchForm searchResults={searchResults} />
      <section className="recommended-wrapper">
        {movie.results
          .filter((movie) => {
            const titleNormalized = movie.title.toLowerCase();
            const searchValueNormalized = searchValue.toLowerCase();
            return titleNormalized.includes(searchValueNormalized);
          })
          .map((movie) => (
            <MediaCard data={movie} media="movie" key={movie.id} />
          ))}
      </section>
    </div>
  );
}

export default ListMovies;
