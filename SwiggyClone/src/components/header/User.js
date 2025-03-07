import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

const User = ({ name, location }) => {

  const info=useContext(UserContext);
  const {Name,age}=info;

  return (
    <div
      className="user-card"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "10px",
        margin: "10px",
        border: "2px solid black",
        width: "15rem",
      }}
    >
      <h1 className="text-xl">Name: {name}</h1>
      <h2>Name from context:{Name} {age}</h2>
      <h3>Location: {location}</h3>
      <h4>Contect: abc@gamil.com</h4>
    </div>
  );
};

export default User;
