import React, { useEffect, useState } from "react";
import { Trending } from "../components/carousel/index";
import { RecommendedMovie } from "../components/recommended/RecommendedMovie";
import { RecommendedSeries } from "../components/recommended/RecommendedSeries";

import SearchResults from "../components/search-results";
import { SearchForm } from "../components/form";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const apiKey = "56056247e98174b66164d88dab7b457a";

  const searchResults = (value) => {
    setSearchValue(value.trim());
  };

  const getSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setSearchData(data.results));
  };

  useEffect(() => {
    if (searchValue.length > 1) {
      getSearch();
    }
  }, [searchValue]);

  console.log(searchData);
  return (
    <main>
      <SearchForm searchResults={searchResults} />
      {searchValue ? (
        <SearchResults data={searchData} />
      ) : (
        <div>
          {/* Trending */}
          <h2 className="title">Trending</h2>
          <section className="trending">
            <Trending />
          </section>
          {/* Trending */}
          {/*Recommended */}
          <h2 className="title">Recommended Movies</h2>
          <RecommendedMovie />

          {/*Recommended */}
          {/*Recommended */}
          <h2 className="title">Recommended Tv Series</h2>
          <RecommendedSeries />
          {/*Recommended */}
        </div>
      )}
    </main>
  );
};

export default Home;
