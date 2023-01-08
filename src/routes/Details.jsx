import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Credit from "../components/details-info/Credit";
import Video from "../components/details-info/Video";
import Overview from "../components/details-info/Overview";

import { IoMdArrowRoundBack } from "react-icons/io";
import {
  AiFillStar,
  AiOutlinePlayCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { BsInfoLg } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import Reviews from "../components/details-info/Reviews";

export const loader = async ({ params }) => {
  const api_key = "56056247e98174b66164d88dab7b457a";
  const response = await fetch(`
  https://api.themoviedb.org/3/${params.mediatype}/${params.mediaId}?api_key=${api_key}&language=en-US`);
  const data = await response.json();
  console.log(params);
  return data;
};

function Details() {
  const mediaData = useLoaderData();
  const { mediatype } = useParams();
  const base_src = "https://image.tmdb.org/t/p/w500";

  const [showOverview, setShowOverview] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showReview, setShowReview] = useState(false);

  return (
    <section className="video-container">
      <Link className="back-home" to="/">
        <IoMdArrowRoundBack />
        Back
      </Link>
      <div className="wrapper-media-poster">
        <div
          className="bg-media-poster"
          style={{
            backgroundImage: `url(${base_src}${mediaData.backdrop_path})`,
          }}
        ></div>
        <div className="media-poster">
          <img src={`${base_src}${mediaData.poster_path}`} />
          <div className="text-media">
            <div className="title-media">
              <h3>{mediaData.title ? mediaData.title : mediaData.name}</h3>
            </div>

            <div className="vote-release-media">
              {mediaData.release_date
                ? mediaData.release_date.substring(0, 4)
                : mediaData.first_air_date.substring(0, 4)}

              <div>
                <p>
                  <AiFillStar className="all-fill-star" />
                  {mediaData.vote_average.toFixed(1)}
                </p>
              </div>
              <span>{mediaData.runtime && mediaData.runtime + " min"}</span>
            </div>
            <div className="genres">
              <span>
                {mediaData.genres.map((genre) => (
                  <small key={genre.id} className="genre">
                    {genre.name.toLowerCase()}
                  </small>
                ))}
              </span>
            </div>

            <p className="tagline">
              <em>{mediaData.tagline && mediaData.tagline}</em>
            </p>

            <button
              className="overview-button"
              onClick={() =>
                setShowOverview(() => {
                  if (!showOverview) return true;
                })
              }
            >
              <BsInfoLg className="info-overview" />
              overview
            </button>
          </div>
        </div>
        {showOverview && <Overview info={mediaData.overview} />}
      </div>

      <Credit mediaId={mediaData.id} mediatype={mediatype} />
      <div className="watch-providers">
        <button
          className={!showVideo ? "watch" : "close-videos"}
          onClick={() =>
            setShowVideo(() => {
              setShowReview(false);
              if (!showVideo) return true;
            })
          }
        >
          {showVideo ? (
            <div>
              Close <AiOutlineClose size={18} />
            </div>
          ) : (
            <div>
              Watch <AiOutlinePlayCircle size={18} />
            </div>
          )}
        </button>
        <button
          className="review"
          onClick={() => {
            setShowReview(() => {
              setShowVideo(false);
              if (!showReview) return true;
            });
          }}
        >
          Reviews <BiCommentDetail size={18} />
        </button>
      </div>

      {showVideo && <Video mediaId={mediaData.id} mediatype={mediatype} />}
      {showReview && (
        <Reviews
          mediaId={mediaData.id}
          mediatype={mediatype}
          setShowReview={setShowReview}
        />
      )}
    </section>
  );
}

export default Details;
