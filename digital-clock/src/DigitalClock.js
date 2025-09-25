import React, { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    document.title = "It's Spiderman Time";
  }, []);

  function formateTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const Tamed = time.getHours() > 12 ? "PM" : "AM";

    hours = hours > 12 ? hours - 12 : hours;
    return `${formatZero(hours)}:${formatZero(minutes)}:${formatZero(
      seconds
    )} ${Tamed}`;
  }

  function formatZero(num) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <h1>{formateTime()}</h1>
      </div>
    </div>
  );
}
export default DigitalClock;
