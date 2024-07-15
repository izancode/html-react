# This Main Branch Here Only

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
