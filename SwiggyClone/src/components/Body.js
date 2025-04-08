import { useState } from "react";
import { NavLink } from "react-router";
import RestaurantCart from "./restaurant/RestaurantCart";
import Shimmerui from "./Shimmerui";
import useInfiniteRestaurants from "../utils/useInfiniteRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    loaderRef,
    restaurantData,
    filterRestaurant,
    loading,
    filterTopRated,
    resetFilter,
    searchRestaurant,
  } = useInfiniteRestaurants();

  return restaurantData.length === 0 ? (
    <Shimmerui />
  ) : (
    <div className="container">
      <div className="flex flex-wrap m-auto p-2 border-b-1 w-9/12">
        <button
          className="m-1 py-2 px-3 bg-gray-400 rounded-xl hover:bg-gray-500"
          onClick={filterTopRated}
        >
          Top Rated
        </button>
        <button
          className="m-1 py-2 px-3 bg-gray-400 rounded-xl hover:bg-gray-500"
          onClick={resetFilter}
        >
          Reset filter
        </button>
        <input
          type="text"
          className="m-1 mx-3 py-2 px-3 border-2 rounded-2xl"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search foods"
        />
        <button
          className="m-1 mx-3 py-2 px-3 bg-blue-700 font-bold rounded-2xl hover:bg-blue-800"
          onClick={() => {
            searchRestaurant(searchText);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>

      <div className="container flex w-9/12 m-auto flex-wrap">
        {filterRestaurant.map((item) => (
          <NavLink
            key={item?.card?.card?.info?.id}
            to={`/restaurant/${item?.card?.card?.info?.id}`}
          >
            <RestaurantCart cardData={item?.card?.card} />
          </NavLink>
        ))}
      </div>

      {loading && <p className="text-center mt-4">Loading more...</p>}
      <div ref={loaderRef} className="h-10"></div>
    </div>
  );
};

export default Body;
