import { useEffect, useState } from "react";
import "./App.css";
import Exercises from "./Components/Exercises/Exercises";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import QnA from "./Components/QnA/QnA";
import User from "./Components/User/User";
import { setStoredCounter, getStoredCounter } from "./utilities/localStorage";

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = (time) => {
    setCount(count + parseInt(time));
    setStoredCounter(count + parseInt(time));
  };

  useEffect(() => {
    setCount(getStoredCounter());
  }, []);

  return (
    <div className="App">
      <div className="body">
        <div>
          <Nav></Nav>
          <Exercises clickHandler={clickHandler}></Exercises>
        </div>
        <div>
          <User count={count}></User>
        </div>
      </div>
      <QnA></QnA>
      <Footer></Footer>
    </div>
  );
}

export default App;
