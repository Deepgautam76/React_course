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

/**
 * Higher order components
 * take the component in input and return and enhance them
 * also return the components
 * 
 * --- input - RestaurantCard ==> ReastaurantCardPromoted --- 
 */

// 

export const withPromotedlevel = (RestaurantCart) => {
  return (props) => {
    console.log("Prop from promoted:", { ...props });
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="res"
          style={{
            display: "flex",
            position: "absolute",
            background: "black",
            color: "white",
            padding: "5px",
            margin: "1.7rem",
            borderRadius: "10px",
          }}
        >
          Promoted
        </label>
        <RestaurantCart className="res" {...props} />
      </div>
    );
  };
};

export default RestaurantCart;
