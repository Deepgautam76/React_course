import React from "react";
import Dishes from "./Dishes";

const RestaurantMenuCategory = ({ items, showItems, setShowIndex }) => {
  const { categoryId, title, itemCards } = items?.card?.card;

  let preSetItem = showItems;
  const handelClick = () => {
    setShowIndex();
  };

  return (
    <>
      <div
        key={categoryId}
        className="flex flex-col m-auto my-2 py-2 w-8/12 border-b-1 rounded-md"
      >
        <div
          className="flex justify-between cursor-pointer m-auto p-2 w-12/12 hover:bg-gray-500 rounded-2xl"
          onClick={handelClick}
        >
          <span className="flex font-bold text-2xl">
            {title}({itemCards?.length})
          </span>
          <span className="rounded-md hover:bg-gray-300">🔻</span>
        </div>
        <div>{showItems && <Dishes items={itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantMenuCategory;
