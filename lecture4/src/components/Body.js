import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import RestaurantCart from "../components/RestaurantCart";
import Shimmerui from "./Shimmerui";
import { SWIGGY_API } from "../utils/constant";

const Body = () => {
  //Local state variable
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  /**
   * Use Effiect render after the whole page rendered
   * Im using this first render the page then call the API for dynamic data
   */
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Swigqy API dynamic data
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const Data = await response.json();
      const restaurantCarts = Data?.data?.cards;
      const [card1, card2, card3, ...resCards] = restaurantCarts;
      console.log(resCards);
      setRestaurantData(resCards);
      setFilterRestaurant(resCards);
    } catch (error) {
      console.log("Error encounter restaurant card fetching:" + error);
    }
  };

  // Filter restaurant card based on rating
  const filterData = () => {
    const filtred = restaurantData.filter(
      (res) => res?.card?.card?.info?.avgRating > 4.1
    );
    setFilterRestaurant(filtred);
  };

  // Reset all filter that apply by user
  const reset = () => {
    setFilterRestaurant(restaurantData);
    console.log("reset clicked");
  };

  return restaurantData.length === 0 ? (
    <Shimmerui />
  ) : (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={filterData}>
          Top Restaurant
        </button>
        <button className="filter-btn" onClick={reset}>
          Reset filter
        </button>
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search foods"
        />
        <button
          className="search-btn"
          onClick={() => {
            /**
             * Filter the restaurant crad based on the search text entered
             * SearchText is the state which is holding the value of the search input
             * Here I am filtering the data based on the search text
             */
            const filterRestaurantData = restaurantData.filter((res) =>
              res?.card?.card?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            if (filterRestaurantData.length != 0) {
              setFilterRestaurant(filterRestaurantData);
            }
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((item) => (
          <NavLink
            key={item?.card?.card?.info?.id}
            to={`/restaurant/${item?.card?.card?.info?.id}`}
          >
            <RestaurantCart
              cardData={item?.card?.card}
              key={item?.card?.card?.info}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
