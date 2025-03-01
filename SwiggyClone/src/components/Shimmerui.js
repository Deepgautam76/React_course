import React from "react";

const Shimmerui = () => {
  const arr = new Array(40).fill(0);
  return (
    <>
      <div className="container">
        <div className="search">
          <button className="filter-btn">Top Restaurant</button>
          <button className="filter-btn">Reset filter</button>
          <input type="text" placeholder="Search here food or reataurant" />
        </div>
        <div className="card-container">
          {arr.map((item,index) => {
            return <div className="blank-restaurent-card" key={index}></div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Shimmerui;
