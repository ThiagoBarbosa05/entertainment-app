import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SearchForm } from "../form";
import { MediaCard } from "../recommended/MediaCard";

export const loader = async ({ params }) => {
  const apiKey = "56056247e98174b66164d88dab7b457a";
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${params.genreId}`
  );
  const data = await response.json();
  return data.results;
};

function ListTvSeries() {
  const series = useLoaderData();

  const [searchValue, setSearchValue] = useState("");

  const searchResults = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchForm searchResults={searchResults} />
      <section className="recommended-wrapper">
        {series
          .filter((tv) => {
            const titleNormalized = tv.name.toLowerCase();
            const searchValueNormalized = searchValue.toLowerCase();
            return titleNormalized.includes(searchValueNormalized);
          })
          .map((tv) => (
            <MediaCard data={tv} media="tv" key={tv.id} />
          ))}
      </section>
    </div>
  );
}

export default ListTvSeries;
