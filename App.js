import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello my name is faizan React"
);

console.log(heading);

/* JSX - is not HTML in JS but its html or xml like syntax
JSX transpiled before it reaches the JS - parcel - Babel

JSX converted to React.createElement and this converted to ReactElement(object) and this converted to html element
*/

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    hello my name is faizan Jsx
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
console.log(root);
