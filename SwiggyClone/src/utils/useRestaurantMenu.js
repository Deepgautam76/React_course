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
      setResMenu(data);
    } catch (error) {
      console.log("Error encounter from useRestaurantMenu:" + error);
    }
  };
  return resMenu;
};

export default useRestaurantMenu;
