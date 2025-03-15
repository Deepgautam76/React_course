import { createContext } from "react";

/**
 * This is the way to create
 * the contextProvide using
 * keyword - "createContext"
 * -- And if you want to access this context use this --
 *   like (const data=useContext("enter the context name")
 *    const data=useContext(UserContext)
 *  -- if you had old class based components use this way to acess the context--
 *    <UserContext.Consumer>
 *     {("receive data here in the form of cb")=>}
 *    </UserContext.Consumer>
 */

const UserContext = createContext({
  name: "Kamal Deep",
  course:"B.Tech",
  email: "deepgautam209738@gmail.com",
  github: "https://www.github.com/Deepgautam76",
});

export default UserContext;
