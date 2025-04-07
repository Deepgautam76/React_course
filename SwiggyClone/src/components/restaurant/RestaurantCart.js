import { CDN_URL } from "../../utils/constant";

const RestaurantCart = (prop) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    prop?.cardData?.info;
  return (
    <div className="container m-1 my-2 w-3xs rounded-2xl overflow-hidden shadow-lg bg-gray-400  hover:scale-95">
      <div className="relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Food Image"
          className="w-full h-40 object-cover rounded-2xl"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {name.length > 20 ? `${name.substring(0, 20)}...` : name}
        </h2>
        <h3>
          {cuisines.length > 3
            ? `${cuisines.splice(0, 3).join(",")}...`
            : cuisines.join(",")}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-600 text-lg font-bold">
            ★ {avgRating}
          </span>
          <span className="text-gray-900 text-sm ">• {sla?.slaString} </span>
        </div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

/**
 * Higher order components
 * take the component in input and return and enhance them
 * also return the components
 *
 * --- input - RestaurantCard ==> ReastaurantCardPromoted ---
 */

export const withPromotedlevel = (RestaurantCart) => {
  return (props) => {
    return (
      <div>
        <div className="absolute mx-3 px-2 py-1 bg-amber-800 rounded-br-lg rounded-tr-lg rounded-tl-lg">
          Promoted
        </div>
        <div>
          <RestaurantCart className="res" {...props} />
        </div>
      </div>
    );
  };
};

export default RestaurantCart;
