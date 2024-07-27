import { useEffect, useState } from "react";

const useRestaurantBody = () => {
  const [listOfRestaurants2, setListOfRestaurants2] = useState([]);
  const [searchFiltered2, setSearchFiltered2] = useState([]);
  const [searchInput2, setSearchInput2] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0738955&lng=72.886596&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants2(restaurants);
    setSearchFiltered2(restaurants);

    // console.log(resultFilter);
    /*
    setTopFiltered2(restaurants);
    
 setTopFiltered2(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );*/
  };
  const handleFilter = () => {
    const filteredList = searchFiltered2.filter(
      (res) => res.info.avgRating > 4.3
    );
    setSearchFiltered2(filteredList);
  };
  const handleSearch = () => {
    const filterRestaurant = listOfRestaurants2.filter((res) => {
      return res.info.name.toLowerCase().includes(searchInput2.toLowerCase());
    });

    setSearchFiltered2(filterRestaurant);
  };
  const inputSearch = (e) => {
    setSearchInput2(e.target.value);
  };
  /*
    
    */

  return {
    searchFiltered2,
    searchInput2,
    handleFilter,
    handleSearch,
    inputSearch,
  };
};

export default useRestaurantBody;
