import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./Exercises.css";

const Exercises = (props) => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("workoutDB.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);


  return (
    <div className="exercise-container">
      {exercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          exercise={exercise}
          clickHandler={props.clickHandler}
        ></Exercise>
      ))}
    </div>
  );
};

export default Exercises;
