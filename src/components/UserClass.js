import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    /* console.log(props);*/
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " Child Construtor");
  }
  componentDidMount() {
    console.log(this.props.name + " Child component Did Mount");
    //Api Call
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2 = {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @izancode</h4>
      </div>
    );
  }
}

export default UserClass;
