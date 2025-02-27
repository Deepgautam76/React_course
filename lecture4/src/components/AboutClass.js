import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent class constructor");
  }

  //This method called when whole component render
  componentDidMount() {
    console.log("parent did mount");
  }

  //it is a method to render the whole component
  render() {
    console.log("parent class render");
    return (
      <div className="container">
        <h2>Hello i am from About Class</h2>
        <UserClass name="kamal" location="Noida" />
      </div>
    );
  }
}

/*
 ----- Component LifeCycle ----
 - Parent constructor
 - Parent render mentod
   - First child constructor
   - First Render method called
   - Second child constructor
   - Second Render method called
(this is commit phase)   
   - First child ComponentDidMount called
   - Second Child ComponentDidMount called
- Parent ComponentDidMount called

*/

export default AboutClass;
