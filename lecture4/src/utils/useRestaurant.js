import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "./constant";

const useRestaurant = () => {
  const [restaurantCard, setRestaurantCard] = useState([]);

  /**
   * Use Effiect render after the whole page rendered
   * I'm using this for first render the page then
   * Call the API for dynamic data
   */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const Data = await response.json();
      const restaurantCarts = Data?.data?.cards;
      const [card1, card2, card3, ...resCards] = restaurantCarts;
      console.log(resCards);
      setRestaurantCard(resCards);
    } catch (error) {
      console.log("Error encounter form restaurant card fetching:" + error);
    }
  };
  return restaurantCard;
};

export default useRestaurant;
