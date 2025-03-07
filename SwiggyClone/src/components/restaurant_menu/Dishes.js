import { CDN_URL } from "../../utils/constant";

const Dishes = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, name, defaultPrice, price, ratings, description, imageId } =
          item?.card?.info || {};
        return (
          <div key={id} className="flex m-auto py-2 border-b-1 w-8/12">
            <div className="flex-1 w-10/12 px-2 ">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-700">{name}</h2>
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
              <p className="text-gray-600 text-sm mt-2">{description} </p>
            </div>
            <div className="relative w-2/12 h-28  rounded-lg overflow-hidden shadow-md">
              <img
                src={CDN_URL + imageId}
                alt="Dishes-image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white text-center mx-1 py-1 rounded-t-lg shadow-md hover:bg-gray-300">
                <button className="text-green-600 font-bold">ADD</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dishes;
