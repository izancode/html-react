import { useState, useEffect } from "react";
import { res_menu_api } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(res_menu_api + resId);

    const json = await data.json();

    console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[9]);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

/*

 const [resInfo, setResInfo] = useState(null);
useEffect(() => {
     fetchMenu();
   }, []);

   const fetchMenu = async () => {
     const data = await fetch(res_menu_api + resId);

     const json = await data.json();
  
     console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[9]);
     setResInfo(json.data);
*/
