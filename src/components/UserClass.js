import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    /* console.log(props);*/
    this.state = {
      userInfo: {
        name: "Dumy Name",
        location: "default location",
        avatar_url:
          "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
      },
    };
    console.log(this.props.name + " Child Construtor");
  }
  async componentDidMount() {
    console.log("Parents component Did Mount");
    const data = await fetch("https://api.github.com/users/izancode");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("component Will Unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @izancode</h4>
      </div>
    );
  }
}

export default UserClass;
/*
--Mounting LifeCycle--
Constructor
Render 
  HTML Render
Componentdidmount
  Api Call
  setstate - state varrable is updated
--Update

render(Api data)  
  Html loaded with new api data
Componentdidupdated



*/
