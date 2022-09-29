import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredBreak, setStoredBreak } from "../../utilities/localStorage";
import "./Break.css";

const Break = ({ count }) => {
  const [breakTimeShow, setBreakTimeShow] = useState(0);

  const breakTimes = [10, 20, 30, 40, 50];
  const breakValues = breakTimes.map((breakTime) => (
    <button
      className="btn-break"
      onClick={() => breakTimeDetect(breakTime)}
      key={breakTime}
    >
      {breakTime}s
    </button>
  ));
  const showMsg = () => {
    toast.success("All tasks completed!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    setBreakTimeShow(getStoredBreak());
  }, []);

  const breakTimeDetect = (breakTime) => {
    setBreakTimeShow(breakTime);
    setStoredBreak(breakTime);
  };

  return (
    <div className="break">
      <div>
        <p>Add A Break</p>
        <div className="break-buttons"> {breakValues} </div>
      </div>
      <div>
        <p>Exercise Details</p>
        <div className="time-show">Exercise Time: {count} Seconds</div>
        <div className="time-show">BreakTime: {breakTimeShow} Seconds</div>
      </div>
      <button onClick={showMsg} className="complete-btn">
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Break;
