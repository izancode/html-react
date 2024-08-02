import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parents Constructor");
  }

  render() {
    //console.log("Parents render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h1 className="text-xl font-bold">{loggedinUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>this is only for learning</h2>

        <UserClass name={"First"} location={"Mumbai"} />
        <User name={"Second"} location={"Mumbai"} />
      </div>
    );
  }
}

export default About;
