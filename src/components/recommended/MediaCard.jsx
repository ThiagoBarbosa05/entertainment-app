import { MdBookmarkBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { convert } from "../../utils/shortenNum";

export const MediaCard = ({ data, media }) => {
  const base_src = "https://image.tmdb.org/t/p/w500";


  if (data.backdrop_path !== null) {
    return (
      <Link to={`/details/${media}/${data.id}`} className="recommended-box">
        <div className="bookmark-box">
          <MdBookmarkBorder size={20} />
        </div>
        <img src={`${base_src}${data.backdrop_path}`} />
        <div className="info-movie">
          <span>
            {data.release_date
              ? data.release_date.substring(0, 4)
              : data.first_air_date.substring(0, 4)}
          </span>
          <span>{convert(data.popularity)}</span>
          <span>
            <AiFillStar /> {data.vote_average}
          </span>
        </div>
        <h4>{data.title ? data.title : data.name}</h4>
      </Link>
    );
  }
};
