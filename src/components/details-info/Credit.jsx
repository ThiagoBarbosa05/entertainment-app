import React, { useEffect, useState } from "react";

import src from "../../default-profile.png";

function Credit({ mediaId, mediatype }) {
  const [credit, setCredit] = useState([]);

  const api_key = "56056247e98174b66164d88dab7b457a";
  const base_src = "https://image.tmdb.org/t/p/w500";

  const getCredits = () => {
    fetch(
      `https://api.themoviedb.org/3/${mediatype}/${mediaId}/credits?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setCredit(data.cast));
  };

  useEffect(() => {
    getCredits();
  }, []);

  return (
    <section className="cast-container">
      {credit.map((credit) => (
        <div className="cast" key={credit.id}>
          {credit.profile_path ? (
            <img src={`${base_src}${credit.profile_path}`} />
          ) : (
            <img src={src} />
          )}

          <p>{credit.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Credit;
