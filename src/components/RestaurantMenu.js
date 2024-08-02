import Shimmer from "./Shimmer";
import { def_res_menu_image, res_menu_image } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const dummy = "dummy data";
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[7].card.card;
  /*  console.log(
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[7].card.card
  );
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card
      .itemCards
      console.log(categories);
  );*/
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join()} - {costForTwoMessage}
      </p>
      {/* categories accordians  */}
      {categories.map((category, index) => (
        /*
        This is a controlled Component
        */
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
