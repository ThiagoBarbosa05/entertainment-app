import { BiSearch } from "react-icons/bi";

export const SearchForm = ({ searchResults, searchMovies }) => {
  return (
    <form className="search-block">
      <span>
        <BiSearch />
      </span>
      <input
        onChange={(e) => {
          searchResults(e.target.value);
        }}
        type="text"
        placeholder="Search for movies or Tv series"
      />
    </form>
  );
};
