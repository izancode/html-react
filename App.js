import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    hello my name is faizan Jsx
  </h1>
);
console.log(jsxHeading);

/*
# React Components

Two Types of Components in React
1.Class Based Components - old way to writting code
2.Functional Based Components - new way writting code

*/

//React Functional Components

const HeadingComponents = () => {
  return <h1>izancode React Functional component</h1>;
};

const HeadingComponents2 = () => (
  <div id="container">
    <h1>izancode React Functional component test</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents2 />);
