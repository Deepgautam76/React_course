import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import Shimmerui from "./Shimmerui";
import { CDN_URL, MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const param = useParams();
  const resId = param.id;
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    // console.log("data")
    // console.log(data);
    const menu = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    // console.log(menuCards);
    const menuCards = menu[1].card?.card?.itemCards;
    console.log(menuCards);
    setResMenu(menuCards);
  };

  if (resMenu === null) return <Shimmerui />;
  return (
    <div className="menu-cards">
      {resMenu.map((menu) => {
        return (
          <div className="menu-container" key={menu?.card?.info?.id}>
            <div className="menu-detailed">
              <h1>{menu?.card?.info?.name}</h1>
              <h3>{menu?.card?.info?.defaultprice}</h3>
              <p>{menu?.card?.info?.description}</p>
            </div>
            <div className="img-container">
              <img src={CDN_URL + menu?.card?.info?.imageId} alt="resImage" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
