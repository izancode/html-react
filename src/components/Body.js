import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //Whenever state varibles update, react triggers a reconsiliation cycle (re-render the component)
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
  /*Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }*/
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
              //Filter the restauant card and update the ui
              //SearcgText
              // console.log(searchResult);

              const filterRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchResult.toLowerCase());
              });
              // console.log(filterRestaurant);
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
