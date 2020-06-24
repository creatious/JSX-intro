import React from "react";

function Heading(){
  
const date = new Date(2020, 1, 1, 10);
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
  
return <h1 className="heading" style={customStyle}>{greeting}</h1>
}
    
export default Heading;
