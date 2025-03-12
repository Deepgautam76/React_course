import React, { useState } from "react";

import { useParams } from "react-router";
import Shimmerui from "../Shimmerui";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id;

  const [showIndex, setShowIndex] = useState(null);

  /** Custom hooks for fetching the restaurant-menu data */
  const resMenu = useRestaurantMenu(resId);
  const Menu =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterCardByItemCategory = Menu?.filter(
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
    <div>
      <div className="flex m-auto w-8/12 my-4 text-2xl font-bold border-0 p-2">
        {resMenu?.data?.cards[2]?.card?.card?.info?.name}
      </div>
      {filterCardByItemCategory.map((category, index) => (
        <div
          className="flex bg-gray-900 text-amber-50"
          key={category?.card?.card?.categoryId}
        >
          <RestaurantMenuCategory
            /**
             * This component is cotrolled componet
             * Becouse this component manage by the parent
             * show that component are controlled component
             */
            items={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
