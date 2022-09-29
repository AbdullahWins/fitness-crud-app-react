const setStoredCounter = (count) => {
  localStorage.setItem("counter", JSON.stringify(count));
};

const getStoredCounter = () => {
  let counter;
  const storedCounter = localStorage.getItem("counter");
  if (storedCounter) {
    counter = JSON.parse(storedCounter);
  } else {
    counter = 0;
  }
  return counter;
};

const setStoredBreak = (breakTime) => {
  localStorage.setItem("breakTime", JSON.stringify(breakTime));
};

const getStoredBreak = () => {
  let breakTime;
  const storedBreak = localStorage.getItem("breakTime");
  if (storedBreak) {
    breakTime = JSON.parse(storedBreak);
  } else {
    breakTime = 0;
  }
  return breakTime;
};

export { setStoredCounter, getStoredCounter, setStoredBreak, getStoredBreak };
