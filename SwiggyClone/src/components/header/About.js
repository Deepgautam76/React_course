import React from "react";
import User from "./User";
const About = () => {
  return (
    <div className="h-lvh flex flex-col m-4 min-h-screen">
      <div className="flex flex-col px-8 ">
        <h3 className="text-3xl font-semibold text-green-400">
          It's Build By Developer Kamal Deep
        </h3>
      </div>
      <div>
        <User location="Noida (NCR)" />
      </div>
    </div>
  );
};

export default About;
