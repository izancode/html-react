import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0738955&lng=72.886596&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchFilter(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks Like you're offline!! Please check your internet connection</h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchResult.toLowerCase());
              });

              setSearchFilter(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = searchFilter.filter((res) => {
              return res.info.avgRating > 4;
            });
            setSearchFilter(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {searchFilter.map((list) => (
          <Link key={list.info.id} to={"restaurant/" + list.info.id}>
            <RestaurantCard resData={list.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
