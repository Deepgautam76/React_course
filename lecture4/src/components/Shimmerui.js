import React from "react";

const Shimmerui = () => {
  const arr = new Array(40).fill(0);
  return (
    <>
      <div className="container">
        {arr.map((item) => {
          return <div className="blank-restaurent-card"></div>;
        })}
      </div>
    </>
  );
};

export default Shimmerui;
