import { useEffect, useState } from "react";

import RestaurantCart from "../components/RestaurantCart";
import Data from "../utils/mockData";
import Shimmerui from "./Shimmerui";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [reataurantData, setRestaurantData] = useState([]);

  // Use Effiect render after the page render
  // Im using this first render the page then call the API for dynamic data
  useEffect(() => {
    fetchData();
  }, []);

  // //Swigy API data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=1012175&catalog_qa=undefined&submitAction=ENTER"
      );
      const Data = await response.json();
      const resCarts = Data?.data?.cards;
      console.log(resCarts);
      // setRestaurantData(resCarts);
    } catch (error) {
      console.log("Error encounter:" + error);
    }
  };

  /**
   * Filter the data based on the rating
   */
  const filterData = () => {
    const fil = reataurantData.filter(
      (res) => res.card.card.info.avgRating > 4.1
    );
    setRestaurantData(fil);
  };

  /**
   * Reset the filter data
   */
  const resetFilter = () => {
    setRestaurantData(Data);
  };

  return reataurantData.length === 0 ? (
    <Shimmerui />
  ) : (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={filterData}>
          Filter Top reataurent
        </button>
        <button className="filter-btn" onClick={resetFilter}>
          Reset filter
        </button>
        <input type="text" placeholder="Search here food or reataurant" />
        <span>Enter food or restaurant name </span>
      </div>
      <div className="res-container">
        {reataurantData.map((item) => (
          <RestaurantCart
            key={item?.card?.card?.info?.id}
            cardData={item?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
