import { useContext } from "react";
import { CDN_URL, def_res_menu_image } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedinUser } = useContext(UserContext);
  console.log(loggedinUser);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} Minutes</h4>
      <h4>User : {loggedinUser} </h4>
    </div>
  );
};

/*High Order Components

input - Restauratn => RestaurantCardPromoted

*/

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Less Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
