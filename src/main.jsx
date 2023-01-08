import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import TvSeries from "./routes/TvSeries";
import Marked from "./routes/Marked";

import { loader as getGenres } from "./components/movies/Genres";
import { loader as getMoviesByGenreId } from "./components/movies/ListMovies";
import { loader as getGenresTv } from "./components/tvseries/GenresTv";
import { loader as getTvSeriesByGenreId } from "./components/tvseries/ListTvSeries";
import { loader as getDetails } from "./routes/Details";

import Genres from "./components/movies/Genres";
import ListMovies from "./components/movies/ListMovies";
import GenresTv from "./components/tvseries/GenresTv";
import ListTvSeries from "./components/tvseries/ListTvSeries";
import Details from "./routes/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,

        children: [
          {
            index: true,
            element: <Genres />,
            loader: getGenres,
          },
          {
            path: "/movies/getmoviebyid/:genreId",
            element: <ListMovies />,
            loader: getMoviesByGenreId,
          },
        ],
      },
      {
        path: "/tvseries",
        element: <TvSeries />,

        children: [
          {
            index: true,
            element: <GenresTv />,
            loader: getGenresTv,
          },
          {
            path: "/tvseries/getseriesbyid/:genreId",
            element: <ListTvSeries />,
            loader: getTvSeriesByGenreId,
          },
        ],
      },
      {
        path: "/marked",
        element: <Marked />,
      },
    ],
  },
  {
    path: "/details/:mediatype/:mediaId",
    element: <Details />,
    loader: getDetails,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
