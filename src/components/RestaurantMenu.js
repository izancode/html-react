import Shimmer from "./Shimmer";
import { def_res_menu_image, res_menu_image } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[7].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join()} - {costForTwoMessage}
      </p>
      <h2>Recommended ({itemCards.length})</h2>
      <div className="main-rest-menu-card">
        {itemCards.map((itemCard) => {
          return (
            <div key={itemCard.card.info.id} className="rest-menu-card">
              <img
                src={
                  itemCard.card.info.imageId === undefined
                    ? def_res_menu_image
                    : res_menu_image + itemCard.card.info.imageId
                }
                alt=""
              />
              <p>{itemCard.card.info.name}</p>
              <p>₹ {itemCard.card.info.price / 100}</p>
              <p>
                {itemCard.card.info.ratings.aggregatedRating.rating} Out of (
                {itemCard.card.info.ratings.aggregatedRating.ratingCountV2})
              </p>
              <p>{itemCard.card.info.category}</p>
              <p>{itemCard.card.info.description}</p>
            </div>
          );
          console.log(itemCard.card.info.name);
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
