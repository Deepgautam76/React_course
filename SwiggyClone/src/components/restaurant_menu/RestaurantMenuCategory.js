import { useState } from "react";
import Dishes from "./Dishes";

const RestaurantMenuCategory = ({ items }) => {
  const [showDishes, setShowDishes] = useState(false);
  const { categoryId, title, itemCards } = items?.card?.card;
  return (
    <>
      <div
        key={categoryId}
        className="flex flex-col m-auto my-2 py-2 w-8/12 border-b-1 rounded-md"
      >
        <div
          className="flex justify-between cursor-pointer m-auto p-2 w-12/12 hover:bg-gray-500 rounded-2xl"
          onClick={() => setShowDishes(!showDishes)}
        >
          <span className="flex font-bold text-2xl">
            {title}({itemCards?.length})
          </span>
          <span className="rounded-md hover:bg-gray-300">🔻</span>
        </div>
        <div>{showDishes && <Dishes items={itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantMenuCategory;
