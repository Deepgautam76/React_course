import React from "react";
import ReactDOM from "react-dom/client";

// Creating multiple element by using React.createElement
const parent = React.createElement("h1", { id: "parent",key:1 }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'a kamal deep"),
    React.createElement("h2", {}, "I'a an h2 tag"),
  ]),
    React.createElement("div", {id:"child2",key:2}, [
        React.createElement("h1", {}, "I'a an h1 tag"),
        React.createElement("h2", {}, "I'a an h2 tag"),
    ]),
]);

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("container"));

root.render(parent);
