import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  /*
  
  State Varible - super powerfull varible
  const [listOfRestaurant] = useState();
  Normal JS Varible
  let listOfRestaurant=[];
  
  */
  //Normal JS Varible

  const [listOfRestaurants, setListOfRestaurant] = useState( );
  /*  
  

  const arr = useState(resList);
  const [listOfRestaurants, setListOfRestaurant] = arr;

  const arr = useState(resList);
  const listOfRestaurants = arr[0];
  const setListOfRestaurant = arr[1];

*/

  // let listOfRestaurantJS = [
  //   {
  //     info: {
  //       id: "112487",
  //       name: "Chinese Wok",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 3.2,
  //       deliveryTime: 36,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "112557",
  //       name: "Chinese Wok",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 4.2,
  //       deliveryTime: 36,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "1123457",
  //       name: "albaik",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 4.1,
  //       deliveryTime: 36,
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurant(filteredList);
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((list) => (
          <RestaurantCard key={list.info.id} resData={list} />
        ))}
      </div>
    </div>
  );
};
export default Body;
