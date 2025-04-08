// useInfiniteRestaurants.js
import { useEffect, useRef, useState } from "react";
import { BASE_URL, PARAMS } from "../utils/constant";

const useInfiniteRestaurants = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [offset, setOffset] = useState(""); // initial offset
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}?${PARAMS}&offset=${offset}`);
      const json = await response.json();

      const restaurantCarts = json?.data?.cards;
      const [card1, card2, card3, ...resCards] = restaurantCarts;

      setRestaurantData((prev) => [...prev, ...resCards]);
      setFilterRestaurant((prev) => [...prev, ...resCards]);

      const nextOffset = json?.data?.pageOffset?.nextOffset;
      setOffset(nextOffset || null);
    } catch (error) {
      console.log("Error Encounter Restaurant Card Fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchData();
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    if (!offset) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [offset, loading]);

  const filterTopRated = () => {
    const filtered = restaurantData.filter(
      (res) => res?.card?.card?.info?.avgRating > 3.9
    );
    setFilterRestaurant(filtered);
  };

  const resetFilter = () => {
    setFilterRestaurant(restaurantData);
  };

  const searchRestaurant = (query) => {
    const result = restaurantData.filter((res) =>
      res?.card?.card?.info?.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilterRestaurant(result.length ? result : restaurantData);
  };

  return {
    loaderRef,
    restaurantData,
    filterRestaurant,
    loading,
    filterTopRated,
    resetFilter,
    searchRestaurant,
  };
};

export default useInfiniteRestaurants;
