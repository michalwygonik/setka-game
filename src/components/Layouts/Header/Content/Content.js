import BoardContainer from "./Board/BoardContainer";
import { useState } from "react";
import "./Content.css";

const Content = () => {
  const [startGame, setStartGame] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleStartGame = () => {
    setStartGame(true);
    setTimer(0);
  };

  const minutes = Math.floor((timer % 360000) / 6000);
  const seconds = Math.floor((timer % 6000) / 100);

  return (
    <>
      <div className="container">
        <h2>
          Gra polegająca na jak najszybszym odnalezieniu kolejnych cyfr od 1 do
          100
        </h2>
        {timer > 1000 && startGame === false ? (
          <span className="endGameInfo">
            Brawo! Ukończyłeś grę w {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
        ) : null}
        {startGame ? (
          <BoardContainer
            startGame={startGame}
            setStartGame={setStartGame}
            timer={timer}
            setTimer={setTimer}
          />
        ) : (
          <button onClick={handleStartGame} className="startButton">
            {timer > 1000 && startGame === false ? "Zagraj ponownie" : "start"}
          </button>
        )}
      </div>
    </>
  );
};

export default Content;
