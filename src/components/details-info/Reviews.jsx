import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import src from "../../default-profile.png";
import moment from "moment/moment";

function Reviews({ mediaId, mediatype, setShowReview }) {
  const [reviews, setReviews] = useState([]);
  const api_key = "56056247e98174b66164d88dab7b457a";
  const base_src = "https://image.tmdb.org/t/p/w500";

  const getReviews = () => {
    fetch(
      `https://api.themoviedb.org/3/${mediatype}/${mediaId}/reviews?api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => setReviews(data.results));
  };

  useEffect(() => {
    getReviews();
  }, []);

  console.log(reviews);

  return (
    <div className="review-container">
      {/* <button
        onClick={() => {
          setShowReview(false);
        }}
      >
        close <AiOutlineClose size={16} />
      </button> */}
      <div className="review-box-content">
        {reviews.map((review) => {
          const avatar = review.author_details.avatar_path?.length !== 32;

          return (
            <div key={review.id}>
              <div className="review-header">
                {review.author_details.avatar_path ? (
                  <img
                    src={
                      avatar
                        ? `${review.author_details.avatar_path?.slice(1)}`
                        : `${base_src}${review.author_details.avatar_path}`
                    }
                  />
                ) : (
                  <img src={src} />
                )}
                <span>
                  {review.author_details.name ? (
                    <p className="profile-name">{review.author_details.name}</p>
                  ) : (
                    <p>anonymous</p>
                  )}

                  <p className="username">{review.author_details.username}</p>
                </span>
              </div>
              <div className="review-content">
                <p>" {review.content.substring(0, 400)}... "</p>
              </div>
              <p className="review-created-at">
                {moment(review.created_at).fromNow()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Reviews;
