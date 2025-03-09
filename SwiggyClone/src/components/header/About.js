import React from "react";
import User from "./User";
const About = () => {
  return (
    <div className="h-lvh flex mx-6 my-8 ">
      <div className="flex flex-col">
        <h3 className="text-3xl font-semibold">It's build by the developer Kamal Deep</h3>
        <User location="Noida (NCR)" />
      </div>
    </div>
  );
};

export default About;
