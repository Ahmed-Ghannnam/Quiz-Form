import { useState, useEffect } from "react";

function TimerDisplay(props) {
  const [timerColor, setTimerColor] = useState("#007bff");
  const [timerProgress, setTimerProgress] = useState(100);

  useEffect(() => {
    // Update the timer color based on the remaining time
    if (props.timer >= 7) {
      setTimerColor("#007bff"); // Blue color when time is more than or equal to 7 seconds
    } else if (props.timer >= 4) {
      setTimerColor("#ffc107"); // Yellow color when time is between 4 and 6 seconds
    } else {
      setTimerColor("#dc3545"); // Red color when time is less than 4 seconds
    }

    // Calculate the timer progress as a percentage
    const progress = (props.timer / 10) * 100;
    setTimerProgress(progress);
  }, [props.timer]);
  return (
    <div className="timer">
      <div
        className="progress-ring"
        style={{
          background: "transparent",
          border: `5px solid ${timerColor}`,
          animationDuration: `${props.timer}s`,
          animationPlayState: props.timer === 10 ? "running" : "paused",
        }}
      ></div>
      <span>{props.timer}</span>
    </div>
  );
}

export default TimerDisplay;
