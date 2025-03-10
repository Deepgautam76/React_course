import { connect, useDispatch } from "react-redux";
import { addItem } from "../../redux_store/cartSlice";

import { CDN_URL } from "../../utils/constant";

const Dishes = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {items.map((item) => {
        const { id, name, defaultPrice, price, ratings, description, imageId } =
          item?.card?.info || {};
        return (
          <div key={id} className="flex m-auto py-2 border-b-1 w-12/12">
            <div className="flex-1 w-10/12 px-2 ">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-300">{name}</h2>
              </div>
              <p className="text-lg font-semibold mt-1">
                ₹ {defaultPrice / 100 || price / 100}
              </p>
              <div className="flex items-center gap-1 mt-1 text-green-600 font-semibold">
                <span>
                  {ratings?.aggregatedRating?.rating
                    ? `${ratings?.aggregatedRating?.rating}★`
                    : null}
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-2">{description} </p>
            </div>
            <div className="relative w-2/12 h-28  rounded-lg overflow-hidden shadow-md">
              <img
                src={CDN_URL + imageId}
                alt="Dishes-image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 text-center mx-1 py-1 rounded-t-lg shadow-md hover:bg-gray-500">
                <button
                  className="text-green-600 font-bold"
                  onClick={() => handleAdd(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dishes;
