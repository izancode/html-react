import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  /* const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
    };
    console.log(data);
    console.log(setShowIndex);
    console.log(showItems);
    */

  const handleClick = () => {
    setShowIndex();
    showItems == true && false;
  };

  return (
    <div>
      {/*Header Section*/}
      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/*Accordian Body*/}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
