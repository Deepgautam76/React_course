import React, { useState } from "react";

import { useParams } from "react-router";
import Shimmerui from "../Shimmerui";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id;

  /** Custom hooks for fetching the restaurant-menu data */
  const resMenu = useRestaurantMenu(resId);
  const filterCardByItemCategory = resMenu.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (resMenu.length === 0)
    return (
      <div className="flex flex-col mb-3 py-2">
        <Shimmerui />
      </div>
    );
  return (
    <>
      {filterCardByItemCategory.map((category) => (
        <div
        className="flex bg-gray-900 text-amber-50"
          key={category?.card?.card?.categoryId}>
          <RestaurantMenuCategory items={category} />
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
