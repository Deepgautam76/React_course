import React, { useState, useEffect } from "react";

const User = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    timer=setInterval(()=>{
      console.log("hello from set Interval");
    },1000)

    return () => {
      //This is the clear the all the timeInterval
      clearInterval(timer)
      console.log("Component will unmount");
    }
  },[]);

  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h1>Name: Kamal deep</h1>
      <h3>Location: Noida</h3>
      <h4>Contect: abc@gamil.com</h4>
    </div>
  );
};

export default User;
