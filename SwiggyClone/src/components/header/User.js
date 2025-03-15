import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

const User = ({ location }) => {
  const { name, course, email, github } = useContext(UserContext);

  return (
    <div className="container flex flex-col mx-4 p-4 ">
      <div className="font-semibold">
        <p>
          Hi, I am developer {name}.This project build by myself and my
          information.
        </p>
      </div>
      <div>
        <h3>Course: {course}</h3>
        <h3>Location :{location}</h3>
        <h3>Email: {email}</h3>
        <h3>GitHub: {github}</h3>
      </div>
    </div>
  );
};

export default User;
