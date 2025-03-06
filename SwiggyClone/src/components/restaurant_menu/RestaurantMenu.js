import React, { useState } from "react";

import { useParams } from "react-router";
import Shimmerui from "./Shimmerui";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Dishes from "./Dishes";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id;
  /** Custom hooks for fetching the restaurant-menu after clicking on restaurant */
  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length === 0) return <Shimmerui />;
  return (
    <>
      {resMenu.map((item) => (
        <div key={item?.card?.card?.categoryId} className="menu-items-type">
          <div className="title">
            <span>
              <h2>
                {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})
              </h2>
            </span>
            <span>🔻</span>
          </div>
          <div className="dishes-items">
            <Dishes items={item?.card?.card?.itemCards} />
          </div>
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
