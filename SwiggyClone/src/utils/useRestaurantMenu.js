import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const data = await response.json();
      const menu =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      /**  Filter the menuCard based on ItemCategory */
      const filteredcard = menu.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      setResMenu(filteredcard);
    } catch (error) {
      console.log("Error encounter frome useRestaurantMenu:" + error);
    }
  };
  return resMenu;
};

export default useRestaurantMenu;
