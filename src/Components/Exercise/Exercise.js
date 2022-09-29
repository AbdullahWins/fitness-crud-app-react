import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { image, name, time, details, age } = props.exercise;
  return (
    <div className="exercise">
      <div>
        <img src={image} alt="" />
        <div className="padding">
          <h2>{name}</h2>
          <p>{details}</p>
          <p>For Age: {age}</p>
          <p>Time Required: {time}</p>
        </div>
      </div>
      <button onClick={()=>props.clickHandler(time)}>Add to list</button>
    </div>
  );
};

export default Exercise;
