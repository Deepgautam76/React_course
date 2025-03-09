import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

const User = ({ location }) => {
  const { Name, age } = useContext(UserContext);

  return (
    <div>
      <h2>Name: {Name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contect: abc@gamil.com</h4>
    </div>
  );
};

export default User;
