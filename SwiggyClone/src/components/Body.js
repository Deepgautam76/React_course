import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import RestaurantCart, { withPromotedlevel } from "./restaurant/RestaurantCart";
import Shimmerui from "./Shimmerui";
import { SWIGGY_API } from "../utils/constant";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Promoted level component object
  const PromotedLavel = withPromotedlevel(RestaurantCart);

  /**
   * Use Effiect render after the whole page rendered
   * Im using this first render the page then call the API for dynamic data
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Fetch Swigqy API dynamic data
   */
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const Data = await response.json();
      const restaurantCarts = Data?.data?.cards;
      const [card1, card2, card3, ...resCards] = restaurantCarts;
      setRestaurantData(resCards);
      setFilterRestaurant(resCards);
    } catch (error) {
      console.log("Error encounter restaurant card fetching:" + error);
    }
  };

  /**
   * Filter restaurant card based on rating
   */
  const filterData = () => {
    const filtred = restaurantData.filter(
      (res) => res?.card?.card?.info?.avgRating > 4.1
    );
    setFilterRestaurant(filtred);
  };

  /**
   * Reset all filter that apply by user
   */
  const reset = () => {
    setFilterRestaurant(restaurantData);
    console.log("reset clicked");
  };

  return restaurantData.length === 0 ? (
    <Shimmerui />
  ) : (
    <div className="container">
      <div className="flex flex-wrap m-auto p-2  border-b-1 w-9/12">
        <button
          className="m-1 py-2 px-3 cursor-pointer bg-gray-400 border-0 rounded-xl hover:bg-gray-500"
          onClick={filterData}
        >
          Top Restaurant
        </button>
        <button
          className="m-1 py-2 px-3 cursor-pointer bg-gray-400 border-0 rounded-xl hover:bg-gray-500"
          onClick={reset}
        >
          Reset filter
        </button>
        <input
          type="text"
          className="m-1 mx-3 py-2 px-3 cursor-pointer border-2 rounded-2xl"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search foods"
        />
        <button
          className="m-1 mx-3 py-2 px-3 cursor-pointer bg-blue-700 font-bold rounded-2xl hover:bg-blue-800"
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
      <div className="container flex w-9/12 m-auto p-2 flex-wrap">
        {filterRestaurant.map((item) => (
          <NavLink
            key={item?.card?.card?.info?.id}
            to={`/restaurant/${item?.card?.card?.info?.id}`}
          >
            {item?.card?.card?.info?.promoted ? (
              <PromotedLavel cardData={item?.card?.card} />
            ) : (
              <RestaurantCart cardData={item?.card?.card} />
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Body;
