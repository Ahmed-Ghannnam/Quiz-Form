import { useState, useEffect } from "react";
function TimerDisplay({ timer }) {
  const [timerColor, setTimerColor] = useState("#007bff");
  //   const [timerProgress, setTimerProgress] = useState(100);

  useEffect(() => {
    // Update the timer color based on the remaining time
    if (timer >= 7) {
      setTimerColor("#007bff"); // Blue color when time is more than or equal to 7 seconds
    } else if (timer >= 4) {
      setTimerColor("#ffc107"); // Yellow color when time is between 4 and 6 seconds
    } else {
      setTimerColor("#dc3545"); // Red color when time is less than 4 seconds
    }

    // // Calculate the timer progress as a percentage
    // const progress = (timer / 10) * 100;
    // setTimerProgress(progress);
  }, [timer]);
  return (
    <div className="timer">
      <div
        className="progress-ring"
        style={{
          background: "transparent",
          border: `5px solid ${timerColor}`,
          animationDuration: `${timer}s`,
          animationPlayState: timer === 10 ? "running" : "paused",
        }}
      ></div>
      <span>{timer}</span>
    </div>
  );
}

export default TimerDisplay;
