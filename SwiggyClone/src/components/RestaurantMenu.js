import React from "react";

import { useParams } from "react-router";
import Shimmerui from "./Shimmerui";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const param = useParams();
  const resId = param.id;

  // Custom hooks for fetching the restaurant-menu data
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmerui />;
  return (
    <div className="menu-cards">
      {resMenu.map((menu) => {
        const { id, name, defaultprice, description, imageId } =
          menu?.card?.info;
        return (
          <>
            <div className="menu-container" key={id}>
              <div className="menu-detailed">
                <h1>{name}</h1>
                <h3>{defaultprice}</h3>
                <p>{description}</p>
              </div>
              <div className="img-container">
                <img src={CDN_URL + imageId} alt="resImage" />
              </div>
            </div>
            <div className="card-seprator"></div>
          </>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
