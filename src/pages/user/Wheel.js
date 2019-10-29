import React from "react";
import "./css/Circle.css";



const Wheel = (props) => {
  return (
    <div id="skills">
      
      <div id="part1" class="circle animate">
        <div className="count">Health = 123</div>
      </div>
      <div id="part2" class="circle animate"></div>
      <div id="part3" class="circle animate"></div>
      <div id="part4" class="circle animate"></div>
      <div id="part5" class="circle animate"></div>
      <div id="part6" class="circle animate"></div>
    </div>
  );
};

export default Wheel;