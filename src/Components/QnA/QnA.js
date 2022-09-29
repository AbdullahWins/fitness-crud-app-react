import React from "react";
import "./QnA.css";

const QnA = () => {
  return (
    <div className="qna">
      <h2>Frequently Asked Questions</h2>
      <div>
        <p className="question">Q:How does react work?</p>
        <p className="answer">
          A:React is a javascript library that uses components. It uses
          componets to render UI and also uses virtual DOM to make itself
          faster.
        </p>
      </div>
      <div>
        <p className="question">Q:Difference between props and state.</p>
        <p className="answer">
          A:Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components.
        </p>
      </div>
      <div>
        <p className="question">
          Q:Other uses of userEffect except loading data.
        </p>
        <p className="answer">
          A:UseEffect can run on state changes to validate inputs, live
          filtering or trigger a component while a state changes. So it can be
          used while state changes ad also while props changes to perform
          various actions.
        </p>
      </div>
    </div>
  );
};

export default QnA;
