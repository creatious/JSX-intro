import React from "react";
import ReactDom from "react-dom";

//var React = require("react");
//var ReactDom = require("react-dom");

const date = new Date(2020, 1, 1, 18);
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
