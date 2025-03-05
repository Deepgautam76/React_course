import { CDN_URL } from "../utils/constant";

const Dishes = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, name, defaultPrice, ratings, description, imageId } =
          item?.card?.info || {};
        return (
          <div key={id}>
            <div>
              <div
                className="dish-detailed"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <h3>{name}</h3>
                <h3>{defaultPrice}</h3>
                <h4>{ratings?.aggregatedRating?.rating}</h4>
                <p>{description} </p>
              </div>
              <div className="card-image">
                <img src={CDN_URL + imageId} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dishes;
