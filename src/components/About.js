import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parents Constructor");
  }
  componentDidMount() {
    console.log("Parents component Did Mount");
  }
  render() {
    console.log("Parents render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>this is only for learning</h2>
        <User name={"Izan code function"} />
        <UserClass name={"First"} location={"Mumbai"} />
        <UserClass name={"Second"} location={"us"} />
        <UserClass name={"Third"} location={"us"} />
      </div>
    );
  }
}

/*
- Parent Constructor
- Parent render

    - First Construtor
    - First render
    - First component did mount

    - Second Construtor
    - Second render
    - Second component did mount

- Parent component did mount
this is wrong


- Parent Constructor
- Parent render

  - First Construtor
  - First render

  - Second Construtor
  - Second render
   
<DOM UPDATED - IN SINGLE BATCH>
  - First component did mount
  - Second component did mount

- Parent component did mount
this is Right



const About = () => {
  return (
    <div>
      <h1>About Function Component</h1>
      <h2>this is only for learning</h2>
      <User name={"Izan code function"} />
      <UserClass name={"Izan code Classes"} location={"Mumbai"} />
    </div>
  );
};
*/
export default About;
