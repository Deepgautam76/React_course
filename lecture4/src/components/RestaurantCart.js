import { CDN_URL } from "../utils/constant";

const RestaurantCart = (prop) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = prop?.cardData?.info;
  return (
    <div className="restaurent-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Food Image"
        className="restaurant-image"
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} </h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} </h4>
    </div>
  );
};

export default RestaurantCart;
