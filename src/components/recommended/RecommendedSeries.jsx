import { useState, useEffect } from "react";
import { MediaCard } from "./MediaCard";

export const RecommendedSeries = () => {
  const api_key = "56056247e98174b66164d88dab7b457a";

  const [series, setSeries] = useState([]);

  const getTvSeries = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => setSeries(data.results));
  };

  useEffect(() => {
    getTvSeries();
  }, []);

  return (
    <section className="recommended-wrapper">
      {series.slice(0, 13).map((serie) => {
        return <MediaCard data={serie} media="tv" key={serie.id} />;
      })}
    </section>
  );
};
