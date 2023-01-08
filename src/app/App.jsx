import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navigation } from "../components/navigation";
import { SearchForm } from "../components/form";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SearchResults from "../components/search-results";

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searchData, setSearchData] = useState([])
  const apiKey = "56056247e98174b66164d88dab7b457a";

   const searchResults = (value) => {
      setSearchValue(value.trim())   
 }

 const getSearch = () => {
  fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchValue}`)
  .then(response => response.json())
  .then(data => setSearchData(data.results))
 }

 useEffect(() => {
  if(searchValue.length > 1) {
    getSearch()
  }
 }, [searchValue])
  
  return (
    <div className="App">
      <Navigation />

      {/*Search form */}
      {/* <SearchForm searchResults={searchResults} /> */}
      {/*Search form */}
      <Outlet />
      
    </div>
  );
}

export default App;
