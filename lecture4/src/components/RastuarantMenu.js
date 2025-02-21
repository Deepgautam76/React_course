import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import Shimmerui from "./Shimmerui";
import { MENU_API } from "../utils/constant";


const RastaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const param = useParams();
  const resId=param.id;
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + param.id);
    const data = await response.json();
    // console.log(data);
    const menu=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    // console.log(menuCards);
    const menuCards=menu[1].card?.card?.itemCards;
    console.log(menu[1].card?.card?.itemCards);
    setResMenu(menuCards);
  };

  if (resMenu === null) return <Shimmerui />;
  return (
    <div>
      {
        resMenu.map((menu)=>{
          return(
            <div className="menu" key={menu.card.info.id}>
              <h1>{menu.card.info.name}</h1>
              <h3>{menu.card.info.defaultprice}</h3>
              <p>{menu.card.info.description}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default RastaurantMenu;
