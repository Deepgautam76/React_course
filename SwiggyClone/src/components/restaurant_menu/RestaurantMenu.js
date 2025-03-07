import React, { useState } from "react";

import { useParams } from "react-router";
import Shimmerui from "../Shimmerui";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Dishes from "./Dishes";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id;
  /** Custom hooks for fetching the restaurant-menu after clicking on restaurant */
  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length === 0)
    return (
      <div className="flex flex-col mb-3 py-2">
        <Shimmerui />
      </div>
    );
  return (
    <>
      {resMenu.map((item) => (
        <div
          key={item?.card?.card?.categoryId}
          className="flex flex-col mb-3 py-2"
        >
          <div className="flex justify-between cursor-pointer m-auto px-2 w-8/12">
            <span className="flex font-bold text-2xl ">
              {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})
            </span>
            <span>🔻</span>
          </div>
          <div>
            <Dishes items={item?.card?.card?.itemCards} />
          </div>
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
