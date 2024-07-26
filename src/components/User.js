import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("izan code updated");
    }, 1000);
    //this return when ur unmounting
    console.log("use effect render mounting");
    return () => {
      clearInterval(timer);
      console.log("use effect render unmounting");
    };
  }, []);
  console.log("render");

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @izancode</h4>
    </div>
  );
};

export default User;
