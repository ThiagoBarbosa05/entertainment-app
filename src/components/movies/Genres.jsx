import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const apiKey = "56056247e98174b66164d88dab7b457a";
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.genres;
}

function Genres() {
  const genres = useLoaderData();
  return (
    <section className="genres-box">
      {genres.map((genre) => (
        <Link
          to={`/movies/getmoviebyid/${genre.id}`}
          className="link"
          key={genre.id}
        >
          {genre.name}
        </Link>
      ))}
    </section>
  );
}

export default Genres;
