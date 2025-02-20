import React from "react";

const Shimmerui = () => {
  const arr = new Array(40).fill(0);
  return (
    <>
      <div className="container">
        <div className="search">
          <button className="filter-btn">Filter Top reataurent</button>
          <button className="filter-btn">Reset filter</button>
          <input type="text" placeholder="Search here food or reataurant" />
          <span>Enter food or restaurant name </span>
        </div>
        <div className="card-container">
          {arr.map((item, index) => {
            return <div className="blank-restaurent-card" key={index}></div>;
          })}
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
          <div className="blank-restaurent-card"></div>
        </div>
      </div>
    </>
  );
};

export default Shimmerui;
