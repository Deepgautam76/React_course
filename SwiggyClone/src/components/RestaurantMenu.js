import React from "react";

import { useParams } from "react-router";
import Shimmerui from "./Shimmerui";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import menuItem from "./menuItem";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id;

  /** Custom hooks for fetching the restaurant-menu after clicking on restaurant */
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmerui />;
  return (
    <>
      {resMenu.map((item) => (
        <div key={item?.card?.card?.categoryId} className="item-category">
          <div className="title">
            {item?.card?.card?.title}({item?.card?.card?.itemCards?.length})
          </div>
          <div className="menu-item">
            {/* here is the build the menu item */}
            <menuItem items={item?.card?.card?.itemCards} />
          </div>
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
