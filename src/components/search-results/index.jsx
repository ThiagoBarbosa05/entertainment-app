import React from "react";
import { MediaCard } from "../recommended/MediaCard";

function SearchResults({ data }) {
  console.log(data);
  return (
    <section className="recommended-wrapper">
      {data.map((data) => {
        if (data.media_type !== "person")
          return (
            <MediaCard data={data} media={data.media_type} key={data.id} />
          );
      })}
    </section>
  );
}

export default SearchResults;
