import React, { useState, useEffect, useRef } from "react";
function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running === true) {
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - ref.current);
      }, 100);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  function start() {
    setRunning(true);
    ref.current = Date.now() - time;
  }
  function stop() {
    setRunning(false);
  }
  function reset() {
    setTime(0);
    setRunning(false);
  }

  function formatTime() {
    let milliseconds = Math.floor((time % 1000) / 100);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    return `${hours} : ${minutes} : ${seconds} .${milliseconds}`;
  }
  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="buttons">
        <button className="start" onClick={start}>
          Start
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
