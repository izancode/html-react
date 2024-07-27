import useRestaurantBody from "../utils/useRestaurantBody";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyTwo = () => {
  const {
    searchFiltered2,
    searchInput2,
    handleFilter,
    handleSearch,
    inputSearch,
  } = useRestaurantBody();
  /*
  const { listOfRestaurants2, topFiltered2 } = useRestaurantBody();
  console.log(topFiltered2);
  */
  console.log(searchFiltered2);

  return searchFiltered2.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput2}
            onChange={inputSearch}
          />
          <button onClick={handleSearch}>Search</button>
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {searchFiltered2.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res.info} />;
        })}
      </div>
    </div>
  );
};

export default BodyTwo;
