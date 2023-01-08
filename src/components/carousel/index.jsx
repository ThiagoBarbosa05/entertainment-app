import { TbMovie } from "react-icons/tb";
import { FiTv } from "react-icons/fi";
import { MdBookmarkBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Trending = () => {
  const api_key = "56056247e98174b66164d88dab7b457a";
  const base_src = "https://image.tmdb.org/t/p/w500";
  const [trending, setTrending] = useState([]);

  const getTrending = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => setTrending(data.results));
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      // centerMode={true}
      // centerSlidePercentage={70}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="nextButton"
          >
            <IoIosArrowForward />
          </button>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="prevButton"
          >
            <IoIosArrowBack />
          </button>
        )
      }
    >
      {trending.map((data) => (
        <Link
          to={`/details/${data.media_type}/${data.id}`}
          className="wrapper-trending-box"
          key={data.id}
        >
          <div>
            <img src={`${base_src}${data.backdrop_path}`} />
          </div>
          <div className="wrapper-treding-text">
            <div className="info-movie">
              <span>
                {data.media_type === "movie"
                  ? data.release_date.substring(0, 4)
                  : data.first_air_date.substring(0, 4)}
              </span>
              <span className="dot">&#9830;</span>
              <span>
                {data.media_type === "movie" ? (
                  <span>
                    <TbMovie /> Movie
                  </span>
                ) : (
                  <span>
                    <FiTv />
                    Tv Series
                  </span>
                )}
              </span>
              <span className="dot">&#9830;</span>
              <span>
                <AiFillStar />
                {data.vote_average.toFixed(1)}
              </span>
            </div>
            {data.title ? <h4>{data.title}</h4> : <h4>{data.name}</h4>}
          </div>
          <div className="bookmark-box">
            <MdBookmarkBorder size={20} />
          </div>
        </Link>
      ))}
    </Carousel>
  );
};
