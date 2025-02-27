import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
    console.log("the value of a is: ");
    //This is way to creation of state variable in class component
    this.state = {
      count: 0,
      profile: {},
    };
  }

  /**
   * This method called after render method
   * You can also say that this method called after component loaded dummy data
   * So that you can call the api and get the data
   */
  async componentDidMount() {
    console.log(this.props.name + "Component did mount");
    const response = await fetch("https://api.github.com/users/Deepgautam76");
    const data = await response.json();
    console.log(data);

    // This is the way to setState variable in class component
    this.setState({
      profile: data,
    });
  }

  // Called when the component is updated by new api call or new props
  componentDidUpdate() {
    console.log("Component did update");

    this.timer = setInterval(() => {
      console.log("set interval called");
    }, 1000);
  }

  // Called when the component is removed from the dom
  componentWillUnmount() {
    //This is the way to clear the all interval running in the component
    clearInterval(this.timer);
    console.log("Component will unmount and clear the all interval");
  }

  render() {
    console.log(this.props.location + " render is called");
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.profile;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase Count
        </button>
        <img src={avatar_url} alt={name} />
        <h3>Name: {name}</h3>
        <h2>Location:{location}</h2>
      </div>
    );
  }
}

export default UserClass;
