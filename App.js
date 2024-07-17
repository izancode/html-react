import React from "react";
import ReactDOM from "react-dom/client";

const NavComponent = () => (
  <div>
    <nav className="nav">
      <div className="logo">
        <img
          src="https://i.pinimg.com/474x/73/a4/0b/73a40b716c4e5585a1640810136b18b3.jpg"
          alt=""
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <p>
              <a href="#">Home</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Service</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Contact</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">{reactVar}</a>
            </p>
          </li>
        </ul>
      </div>
    </nav>
    <InteriorDesign />
  </div>
);
const reactVar = <span>React Element</span>;
const number = 1;

const Title = () => (
  <div className="head" tabIndex="5">
    <h1>Title Component</h1>
    <p>{number + 2}</p>
    <p>{console.log(number)}</p>
  </div>
);
/*
when someone trying to hack your site like 
he want to insert some js script this is 
called cross side scripting
*/

function InteriorDesign() {
  return (
    <div id="container">
      {/* this is component composition */}
      <h1>HeadingComponents Component</h1>
      <Title />
      <Title></Title>
      {Title()}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavComponent />);
