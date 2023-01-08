import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Video({ mediaId, mediatype }) {
  const [videos, setVideos] = useState([]);
  const api_key = "56056247e98174b66164d88dab7b457a";

  const getVideos = () => {
    fetch(
      `https://api.themoviedb.org/3/${mediatype}/${mediaId}/videos?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.results));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
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
      {videos.map((video) => (
        <div key={video.id} className="video">
          <iframe
            width="100%"
            height="240"
            src={`https://www.youtube.com/embed/${video.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default Video;
