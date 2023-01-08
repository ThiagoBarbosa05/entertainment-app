import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { MdMovie, MdBookmark } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { FiTv } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <section className="navigation">
      <div className="home-nav">
        <Link className="home" to="/">
          <MdMovie />
        </Link>
      </div>
      <div className="topics-nav">
        <Link className="topics" to="/">
          <AiFillHome />
        </Link>
        <Link className="topics" to="/movies">
          <TbMovie />
        </Link>
        <Link className="topics" to="/tvseries">
          <FiTv />
        </Link>
        <Link className="topics" to="/marked">
          <MdBookmark />
        </Link>
      </div>
      <div className="users-nav">
        <Link className="users" to="/sigin">
          <AiOutlineUser />
        </Link>
      </div>
    </section>
  );
};
