import RestaurantCart from "../components/RestaurantCart";
import Data from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search here food or reataurant" />
        <span>Enter food or restaurant name </span>
      </div>
      <div className="res-container">
        {Data.map((item) => (
          <RestaurantCart
            key={item.card.card.info.id}
            cardData={item.card.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
