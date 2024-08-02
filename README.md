# This food-delivery-app-opti-6 Branch Here Only

# Javascript Code

Javascript Code

<script>
  const heading = document.createElement("h1");
  heading.innerHTML = "Hello World! from Javascript";
  const root = document.getElementById("root");
  root.appendChild(heading);
</script>

# React Code

const heading = React.createElement(
"h1",
{ id: "heading", xyz: "abc" },
"Hello World from React!"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

# =====================================================================

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child" }, [
React.createElement("h1", {}, "Hey I am h1 tag"),
React.createElement("h2", {}, "Hey I am h2 tag"),
]),
React.createElement("div", { id: "child2" }, [
React.createElement("h1", {}, "Hey I am h1 tag"),
React.createElement("h2", {}, "Hey I am h2 tag"),
]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

# React Element is an object and react object will become html that the browser understand

# Bundler make file into bundle make whole code minified,clean,compressed before send to production

Example: Webpack,parcel,vite

# There is Two Dependencies when installing package

# 1.Dependencies

This is used in Before Production and after Production also.Example: React,Axios,Bootstrap,Lodash

# 2.devDependencies

This is used in Before Production only.Example: Webpack,Babel,ESLint,Jest

"any package": "^2.12.0" install minor update like 2.13.0
"any package": "~2.12.0" install major update like 3.13.0
"any package": "2.12.0" Fixed version like 2.12.0

# There is a folder called node_modules which is used like this: for example, if our project needs dependencies like parcel, and parcel itself is a React project, it has its own dependencies and package. These dependencies, including both direct dependencies like parcel and their dependencies (transitive dependencies), are managed within the node_modules folder. Additionally, package-lock.json(or yarn.lock for yarn) tracks the exact versions of all dependencies installed in the node_modules folder.

# npx

    just like we have npm as similar we have npx
    npm means to install any package
    npx execute a package

# Parcel

Parcel is a Beast
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm - written in C++
-Cashing - Faster Builds
-Image Optimization
-Minification
-bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - Support older Browsers
-Diagnostic
-Error Handling
-HTTps
-Tree Shaking - removed unused code
-Different Build dev and production bundles

# Script

"scripts": {
"start":"parcel index.html", (Dev mode - project will be live on localhost) - npm run start / npm start
"build":"parcel build index.html", (Build Mode - project will be build in one folder normal html css file) - npm run build
"test": " jest"
},

# React Project Plaining

izanFood
--Component--
Header Component
-logo
-Nav Item
Body Component
-search
-Resturant Container
--Resturant Card
---Img
---Name od res, Star Rating, Cuisines, delivery time
Footer Component
-Copy Right
-Links
-Address
-contact

# Two Types of Export/Import

-Deafult Export/Import
ex:
export default Components
import Component from "path"

-Named Export/Import
ex:
export const Component/variable = "something";
import {Component/variable} from "path";

# React Hooks

(Normal JS utility function)
-Two very Impotant Hooks
-useState()
Superpowerful State Varibles in react
Whenever a state varible update react re-render my component
-useEffect() -

when the jsx html in function render after this useEffect were called

# React Works Behind the scence by using

Reconciliation Algorithm React 16 after its name ->(React Fiber)

one div have 7 div inner and in some cases after onclick we have render only 3 div

Virtaul DOM is representation of an actual dom

actual dom

<div>
 <div>
  <img>

Virtaul dom is React Object

Diff Algorithm
Diff Algorithm find out the difference between the two virtual dom "Updated Virtaul Dom" and "Previous Virtaul DOM"

Old/Previous Virtaul DOM

<div>
  <div 1></div>
  <div 2></div>
  <div 3></div>
  <div 4></div>
  <div 5></div>
  <div 6></div>
  <div 7></div>
</div>

=>After OnClick Button

New/Updated Virtaul Dom

<div>
  <div 1></div>
  <div 2></div>
  <div 3></div> 
</div>

So its try out the difference between old and new one
what will be the difference?
only four nodes and then
it calculate the difference
and after automatically update
the dom on very render cycle

# Monolith Architecture and Microservices Architecture

Monolith - In one single page
-Api
-UI
-Authentication
-DataBase
-SMS Notification

Microservices - Sepration of Concerns
-Backend
-UI
-Authentication
-DataBase
-SMS Notification
-Email Notification

# Two Approches to fetch data from backend or api

# Two Types of Routing in Web Apps

-Client Side Routing <Link to="Just Change Component Single page Application"><Link/>
-Server Side Routing <a href="refresh Whole Page"></a>

# Ayyappan Pure Veg

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0738955&lng=72.886596&restaurantId=555803&catalog_qa=undefined&submitAction=ENTER

# Bhatt Vishranti Gruh

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0738955&lng=72.886596&restaurantId=519308&catalog_qa=undefined&submitAction=ENTER

# Component Lifecycle - Mounted

Loading - Mounting the component on the web page

In class Based Component except constructor() and render() there is also a componentDidMount() method
1.constructor()
2.render()
3.componentDidMount()
4.componentDidUpdate()
5.componentWillMount()

In function based component there is useeffect as same as that functionality we have componentDidMount() in class based
function based - useeffect(()=>{},[])
class based - componentDidMount(),componentDidUpdate()

function Based - return () => {console.log("use effect render unmounting");};
class based - componentWillUnmount()

# Single Resposibility Principal

# High Order Components

High Order Components is function that takes a component and returns a component that can be used to render multiple components together.

# props Drilling

Props drilling happens when you pass data from a parent component to a deeply nested child component through several layers of intermediary components. This can become complicated if there are many levels of nesting.

# Redux - Redux ToolKit

  -Install npm i @reduxjs/toolkit and react-redux 
  -Build our store
  -Connect our store to our app
  -Slice (cartSlice)
  -dispatch(action)
  -Selector

