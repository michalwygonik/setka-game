import { useEffect } from "react";
import "./Timer.css";

const Timer = (props) => {
  const { startGame, timer, setTimer } = props;

  useEffect(() => {
    let intervalId;
    if (startGame) {
      intervalId = setInterval(() => {
        setTimer(timer + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [setTimer, startGame, timer]);

  const minutes = Math.floor((timer % 360000) / 6000);
  const seconds = Math.floor((timer % 6000) / 100);

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-timer">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
